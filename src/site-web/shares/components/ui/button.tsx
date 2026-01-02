import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        
        // ===== Site web variants (using brand, highlight, light, dark-bg, brand-static) =====
        brand: "rounded-2xl font-blod bg-brand text-light dark:text-dark-bg hover:bg-highlight transition-all shadow-xl shadow-brand/20",
        "brand-outline": "rounded-2xl font-bold text-brand bg-light dark:text-brand-static hover:bg-white transition-all border border-brand/10 shadow-sm",
        highlight: "rounded-2xl font-bold bg-white text-brand-static hover:bg-btn hover:text-white transition-all shadow-xl shadow-black/20",
      },
      size: {
        // ===== Original sizes (for auth/settings) =====
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        
        // ===== Site web sizes =====
        "site-md": "px-8 py-4 text-lg",
        "site-lg": "px-10 py-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "brand",
      size: "site-md",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
