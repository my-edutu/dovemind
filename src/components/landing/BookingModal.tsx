import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BookingForm from "./BookingForm";
import { Calendar } from "lucide-react";

interface BookingModalProps {
    trigger?: React.ReactNode;
}

const BookingModal = ({ trigger }: BookingModalProps) => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger || (
                    <Button size="lg" className="bg-dove-teal hover:bg-dove-teal/90 text-primary-foreground font-bold h-14 px-10 rounded-[20px] shadow-lg shadow-dove-teal/20">
                        <Calendar className="mr-2 h-5 w-5" />
                        Book a Session
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-dove-teal text-center mb-4">
                        Book a Consulting Session
                    </DialogTitle>
                </DialogHeader>
                <div className="pb-4">
                    <BookingForm onSuccess={() => setOpen(false)} />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BookingModal;
