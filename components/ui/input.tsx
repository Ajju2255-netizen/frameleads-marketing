import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base appearance: clean white background, subtle border
        "file:text-foreground placeholder:text-gray-400 selection:bg-primary selection:text-primary-foreground border-gray-300 flex h-9 w-full min-w-0 rounded-md border bg-white dark:bg-white px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        // Focus styles
        "focus-visible:border-emerald-500 focus-visible:ring-emerald-500/50 focus-visible:ring-[3px]",
        // Invalid state
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
