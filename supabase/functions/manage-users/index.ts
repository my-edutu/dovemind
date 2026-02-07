import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "";
        const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") ?? "";
        const supabaseServiceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

        // 1. Verify the caller is an authenticated Admin
        const authHeader = req.headers.get("Authorization");
        if (!authHeader) {
            throw new Error("Missing Authorization header");
        }

        const supabaseClient = createClient(supabaseUrl, supabaseAnonKey, {
            global: { headers: { Authorization: authHeader } },
        });

        const { data: { user }, error: userError } = await supabaseClient.auth.getUser();
        if (userError || !user) {
            throw new Error("Unauthorized");
        }

        // Check if the user has the 'admin' role
        const { data: roles } = await supabaseClient
            .from("user_roles")
            .select("role")
            .eq("user_id", user.id)
            .eq("role", "admin")
            .single();

        if (!roles) {
            throw new Error("Forbidden: Admin privileges required");
        }

        // 2. Initialize Service Role Client for Admin Operations
        const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);

        const { action, userId } = await req.json();

        if (action === "list_users") {
            // List all users from auth.users
            const { data: { users }, error: listError } = await supabaseAdmin.auth.admin.listUsers();
            if (listError) throw listError;

            // Fetch all user roles
            const { data: allRoles, error: rolesError } = await supabaseAdmin
                .from("user_roles")
                .select("user_id, role");

            if (rolesError) throw rolesError;

            // Merge data
            const result = users.map((u) => {
                const roleEntry = allRoles.find((r) => r.user_id === u.id);
                return {
                    id: u.id,
                    email: u.email,
                    last_sign_in_at: u.last_sign_in_at,
                    created_at: u.created_at,
                    role: roleEntry ? roleEntry.role : "user",
                };
            });

            // Sort: Admins first, then by created_at desc
            result.sort((a, b) => {
                if (a.role === "admin" && b.role !== "admin") return -1;
                if (a.role !== "admin" && b.role === "admin") return 1;
                return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            });

            return new Response(JSON.stringify({ users: result }), {
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
        }

        if (action === "add_admin") {
            if (!userId) throw new Error("userId is required");

            const { error } = await supabaseAdmin
                .from("user_roles")
                .upsert({ user_id: userId, role: "admin" }, { onConflict: "user_id" });

            if (error) throw error;

            return new Response(JSON.stringify({ message: "User promoted to admin" }), {
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
        }

        if (action === "remove_admin") {
            if (!userId) throw new Error("userId is required");

            // Prevent removing oneself? (Optional safety check, skip for now to simplify)

            const { error } = await supabaseAdmin
                .from("user_roles")
                .delete()
                .eq("user_id", userId)
                .eq("role", "admin");

            if (error) throw error;

            return new Response(JSON.stringify({ message: "Admin privileges removed" }), {
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            });
        }

        throw new Error(`Unknown action: ${action}`);

    } catch (error) {
        console.error("Error in manage-users:", error);
        return new Response(
            JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
            {
                status: 400,
                headers: { ...corsHeaders, "Content-Type": "application/json" },
            }
        );
    }
});
