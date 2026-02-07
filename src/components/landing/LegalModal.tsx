
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    content: React.ReactNode;
}

const LegalModal = ({ isOpen, onClose, title, content }: LegalModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-3xl h-[80vh] flex flex-col">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        Please review our {title.toLowerCase()}.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="flex-1 pr-4">
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                        {content}
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    );
};

export default LegalModal;
