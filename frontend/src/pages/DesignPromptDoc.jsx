import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check, Download, FileText } from "lucide-react";
import { DESIGN_PROMPT } from "@/data/designPrompt";

const DesignPromptDoc = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(DESIGN_PROMPT);
      setCopied(true);
      toast.success("Design prompt copied to clipboard.");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Could not copy. Select the text manually.");
    }
  };

  const handleDownload = () => {
    const blob = new Blob([DESIGN_PROMPT], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "nandish-the-journey-design-prompt.md";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    toast.success("Downloaded the design prompt.");
  };

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-mono2 text-xs font-bold uppercase tracking-wider text-[#4f46e5]">
            The blueprint
          </span>
          <h1 className="mt-1 flex items-center gap-2 font-display text-3xl font-black tracking-tight">
            <FileText className="h-7 w-7 text-[#4f46e5]" /> Design Prompt
          </h1>
          <p className="mt-2 max-w-xl text-[#6b6a63]">
            The single, copy/paste-ready prompt that captures this entire game concept. Hand it to
            any team or AI designer to rebuild it.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            data-testid="copy-design-prompt-button"
            className="inline-flex items-center gap-2 rounded-full border border-[#d9d4c9] bg-white px-4 py-2.5 text-sm font-semibold text-[#16150f] transition-colors hover:bg-[#f7f5f1]"
          >
            {copied ? <Check className="h-4 w-4 text-[#4f46e5]" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied" : "Copy"}
          </button>
          <button
            onClick={handleDownload}
            data-testid="download-design-prompt-button"
            className="inline-flex items-center gap-2 rounded-full bg-[#16150f] px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" /> Download
          </button>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-[#e7e2d8] bg-white">
        <div className="flex items-center gap-1.5 border-b border-[#e7e2d8] bg-[#f7f5f1] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ef4444]/70" />
          <span className="h-3 w-3 rounded-full bg-[#f59e0b]/70" />
          <span className="h-3 w-3 rounded-full bg-[#10b981]/70" />
          <span className="ml-3 font-mono2 text-xs text-[#6b6a63]">
            nandish-the-journey-design-prompt.md
          </span>
        </div>
        <pre className="max-h-[70vh] overflow-auto whitespace-pre-wrap break-words px-5 py-6 font-mono2 text-[13px] leading-relaxed text-[#2a2924]">
          {DESIGN_PROMPT}
        </pre>
      </div>
    </main>
  );
};

export default DesignPromptDoc;
