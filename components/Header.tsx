"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Rent", href: "/rent" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
                src="/mainlogo.jpg"
                alt="Helly Equipment & Leasing"
                width={60}
                height={60}
                className="object-contain"
            />
           <div className="leading-tight">
              <p className="text-lg font-bold tracking-tight">
                 Helly <span className="text-primary">Equipment</span>
              </p>
               <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                   & Leasing
               </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+919879317452"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition"
            >
              <Phone className="h-4 w-4" />
              +919879317452
            </a>
           
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
              <Button size="sm" className="w-fit">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
