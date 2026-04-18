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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="text-xl font-bold text-foreground">
            MAFHH
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="rounded-md p-2 text-foreground hover:bg-secondary transition"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden lg:flex items-center gap-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              {item.name}
            </Link>
          ))}

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Products
              <ChevronDown className="h-4 w-4" />
            </button>

            {/* Invisible hover bridge */}
            <div className="absolute left-0 top-full h-3 w-full"></div>

            {/* Dropdown */}
            <div className="absolute left-0 top-full mt-3 hidden min-w-[220px] rounded-xl border border-border bg-background shadow-xl group-hover:block z-50">
              <a
                href="https://billfeast.mafhhtechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-sm hover:bg-secondary rounded-t-xl transition"
              >
                🍽️ BillFeast
              </a>

              <span className="block px-4 py-3 text-sm text-muted-foreground">
                More coming soon...
              </span>
            </div>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 justify-end">
          <Button asChild>
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background border-l border-border px-6 py-6 shadow-xl lg:hidden">
            {/* Top */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="text-xl font-bold text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                MAFHH
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md p-2 text-foreground hover:bg-secondary transition"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Nav Items */}
            <div className="mt-8 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium hover:bg-secondary transition"
                >
                  {item.name}
                </Link>
              ))}

              {/* Products */}
              <div className="pt-4">
                <p className="px-4 pb-2 text-sm font-semibold text-muted-foreground">
                  Products
                </p>

                <a
                  href="https://billfeast.mafhhtechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg px-4 py-3 text-base hover:bg-secondary transition"
                >
                  🍽️ BillFeast
                </a>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <Button asChild className="w-full">
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}