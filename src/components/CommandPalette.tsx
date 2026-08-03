import { useEffect, useState } from "react";
import { Command } from "cmdk";

const links = [
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Tech Stack", id: "stack" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  function go(id: string) {
    setOpen(false);
    // let the dialog close first so the scroll doesn't fight the unmount
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }

  return (
    <>
   {/* visible trigger — fixed so it survives scroll, safe-area aware for notches */}
<button
  type="button"
  onClick={() => setOpen(true)}
  aria-label="Open command palette"
  className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] z-40 flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2.5 text-sm text-muted-foreground shadow-lg backdrop-blur-sm transition-transform hover:text-foreground active:scale-[0.96] sm:bottom-4 sm:right-4"
>
  <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-4 w-4">
    <path
      d="M9 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm8 2-3.5-3.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  <span className="hidden sm:inline">Search</span>
  <kbd className="hidden items-center rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-flex">
    ⌘K
  </kbd>
</button>
      <Command.Dialog
        open={open}
        onOpenChange={setOpen}
        label="Command menu"
        className="flex h-full max-h-full flex-col overflow-hidden"
        overlayClassName="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
        contentClassName="fixed inset-x-3 top-[8vh] z-50 mx-auto flex max-h-[75dvh] w-auto max-w-xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:inset-x-0"
      >
        <div className="flex items-center gap-2 border-b border-border px-4">
          <svg aria-hidden viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-muted-foreground">
            <path
              d="M9 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm8 2-3.5-3.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Command.Input
            autoFocus
            placeholder="Search..."
            className="w-full bg-transparent py-4 text-base outline-none placeholder:text-muted-foreground"
          />
          {/* explicit close target — thumbs don't have an Escape key */}
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="shrink-0 rounded-md p-1.5 text-muted-foreground hover:bg-muted sm:hidden"
          >
            ✕
          </button>
        </div>

        <Command.List className="overflow-y-auto overscroll-contain p-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
          <Command.Empty className="p-6 text-center text-sm text-muted-foreground">
            No results found.
          </Command.Empty>

          <Command.Group
            heading="Navigation"
            className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground"
          >
            {links.map(({ label, id }) => (
              <Command.Item
                key={id}
                onSelect={() => go(id)}
                className="cursor-pointer rounded-lg px-4 py-3 text-sm hover:bg-muted data-[selected=true]:bg-muted data-[selected=true]:text-foreground"
              >
                {label}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </>
  );
}