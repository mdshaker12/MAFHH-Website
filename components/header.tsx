"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-foreground">
              MAFHH
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          
          {/* Normal links */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}

          {/* 🔥 Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Products
              <ChevronDown className="w-4 h-4" />
            </button>

            <div className="absolute left-0 mt-3 hidden group-hover:block bg-background border border-border rounded-lg shadow-lg min-w-[200px] z-50">
              
              <a
                href="https://billfeast.mafhhtechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm hover:bg-secondary transition"
              >
                🍽️ BillFeast
              </a>

              {/* Future products */}
              <span className="block px-4 py-3 text-sm text-muted-foreground">
                More coming soon...
              </span>

            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </nav>

      {/* 📱 Mobile Menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
          
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold text-foreground">
                MAFHH
              </span>
            </Link>
            <button
              className="-m-2.5 rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-2">
            
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-medium hover:bg-secondary"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Products */}
            <div className="pt-4">
              <p className="px-3 text-sm font-semibold text-muted-foreground">
                Products
              </p>

              <a
                href="https://billfeast.mafhhtechnologies.com"
                target="_blank"
                className="block px-3 py-2 text-base hover:bg-secondary rounded-lg"
              >
                🍽️ BillFeast
              </a>
            </div>

            <div className="pt-6">
              <Button asChild className="w-full">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                  Get in Touch
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}