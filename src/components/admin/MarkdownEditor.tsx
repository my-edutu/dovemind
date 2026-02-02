import { useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Code,
  Link,
  Image,
  Minus,
  MousePointer2,
} from "lucide-react";
import { useState } from "react";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}

const MarkdownEditor = ({ value, onChange, placeholder, rows = 12 }: MarkdownEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [linkUrl, setLinkUrl] = useState("");
  const [linkText, setLinkText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonUrl, setButtonUrl] = useState("");

  const insertText = useCallback((before: string, after: string = "", placeholder: string = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end) || placeholder;
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end);
    
    onChange(newText);
    
    // Restore cursor position
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + before.length + selectedText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  }, [value, onChange]);

  const insertAtCursor = useCallback((text: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const newText = value.substring(0, start) + text + value.substring(start);
    
    onChange(newText);
    
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + text.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  }, [value, onChange]);

  const handleInsertLink = () => {
    if (linkUrl) {
      const text = linkText || linkUrl;
      insertAtCursor(`[${text}](${linkUrl})`);
      setLinkUrl("");
      setLinkText("");
    }
  };

  const handleInsertImage = () => {
    if (imageUrl) {
      insertAtCursor(`![${imageAlt || "Image"}](${imageUrl})`);
      setImageUrl("");
      setImageAlt("");
    }
  };

  const handleInsertButton = () => {
    if (buttonText && buttonUrl) {
      // Using HTML button that works in markdown
      insertAtCursor(`\n\n<a href="${buttonUrl}" style="display: inline-block; padding: 12px 24px; background-color: #0d9488; color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">${buttonText}</a>\n\n`);
      setButtonText("");
      setButtonUrl("");
    }
  };

  const toolbarButtons = [
    { icon: Bold, label: "Bold", action: () => insertText("**", "**", "bold text") },
    { icon: Italic, label: "Italic", action: () => insertText("*", "*", "italic text") },
    { icon: Heading1, label: "Heading 1", action: () => insertText("\n# ", "\n", "Heading 1") },
    { icon: Heading2, label: "Heading 2", action: () => insertText("\n## ", "\n", "Heading 2") },
    { icon: Heading3, label: "Heading 3", action: () => insertText("\n### ", "\n", "Heading 3") },
    { icon: List, label: "Bullet List", action: () => insertText("\n- ", "", "List item") },
    { icon: ListOrdered, label: "Numbered List", action: () => insertText("\n1. ", "", "List item") },
    { icon: Quote, label: "Quote", action: () => insertText("\n> ", "", "Quote") },
    { icon: Code, label: "Code", action: () => insertText("`", "`", "code") },
    { icon: Minus, label: "Divider", action: () => insertAtCursor("\n\n---\n\n") },
  ];

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 bg-secondary/50 rounded-lg border">
        {toolbarButtons.map((btn, index) => (
          <Button
            key={index}
            type="button"
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={btn.action}
            title={btn.label}
          >
            <btn.icon className="h-4 w-4" />
          </Button>
        ))}

        <div className="w-px h-6 bg-border mx-1" />

        {/* Link Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0" title="Insert Link">
              <Link className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="start">
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Insert Link</h4>
              <div className="space-y-2">
                <Label htmlFor="link-text" className="text-xs">Link Text</Label>
                <Input
                  id="link-text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="Click here"
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="link-url" className="text-xs">URL</Label>
                <Input
                  id="link-url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="h-8"
                />
              </div>
              <Button type="button" size="sm" onClick={handleInsertLink} className="w-full">
                Insert Link
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* Image Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0" title="Insert Image">
              <Image className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="start">
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Insert Image</h4>
              <div className="space-y-2">
                <Label htmlFor="image-url" className="text-xs">Image URL</Label>
                <Input
                  id="image-url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="image-alt" className="text-xs">Alt Text</Label>
                <Input
                  id="image-alt"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="Image description"
                  className="h-8"
                />
              </div>
              <Button type="button" size="sm" onClick={handleInsertImage} className="w-full">
                Insert Image
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* Button Popover */}
        <Popover>
          <PopoverTrigger asChild>
            <Button type="button" variant="ghost" size="sm" className="h-8 w-8 p-0" title="Insert Button">
              <MousePointer2 className="h-4 w-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="start">
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Insert Button</h4>
              <div className="space-y-2">
                <Label htmlFor="button-text" className="text-xs">Button Text</Label>
                <Input
                  id="button-text"
                  value={buttonText}
                  onChange={(e) => setButtonText(e.target.value)}
                  placeholder="Learn More"
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="button-url" className="text-xs">Button URL</Label>
                <Input
                  id="button-url"
                  value={buttonUrl}
                  onChange={(e) => setButtonUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="h-8"
                />
              </div>
              <Button type="button" size="sm" onClick={handleInsertButton} className="w-full">
                Insert Button
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Editor */}
      <Textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="font-mono text-sm"
      />

      {/* Help Text */}
      <p className="text-xs text-muted-foreground">
        Supports Markdown formatting. Use the toolbar above to format text, add images, links, and buttons.
      </p>
    </div>
  );
};

export default MarkdownEditor;
