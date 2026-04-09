import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ApplyForm from "./ApplyForm";
import { UserPlus } from "lucide-react";

interface ApplyModalProps {
    trigger?: React.ReactNode;
}

const ApplyModal = ({ trigger }: ApplyModalProps) => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger || (
                    <Button size="lg" className="bg-white text-dove-teal hover:bg-muted border border-dove-teal font-bold h-14 px-10 rounded-[20px] shadow-sm">
                        <UserPlus className="mr-2 h-5 w-5" />
                        Apply Now
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-dove-teal text-center mb-4">
                        Join Our Mission
                    </DialogTitle>
                </DialogHeader>
                <div className="pb-4">
                    <ApplyForm onSuccess={() => setOpen(false)} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ApplyModal;
