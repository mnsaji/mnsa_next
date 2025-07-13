"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="sticky w-full z-50 py-5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center cursor-pointer group relative">
            <div className="relative">
              <Code2 className="w-10 h-10 text-violet-400 mr-3 group-hover:text-cyan-300 transition-all duration-300 drop-shadow-lg group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute inset-0 w-10 h-10 bg-violet-400/20 rounded-lg blur-md group-hover:bg-cyan-300/30 transition-all duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold space-grotesk bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-violet-300 transition-all duration-300">
                MNSA TECH
              </span>
              <span className="text-xs text-gray-400 space-grotesk tracking-wider">
                AI SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="relative bg-slate-900/50 backdrop-blur-md rounded-full border border-violet-500/30 px-8 py-3 shadow-2xl">
              <div className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group exo-2 ${
                      isActive(item.href)
                        ? "text-violet-300 bg-violet-500/20 shadow-lg"
                        : "text-gray-300 hover:text-violet-300 hover:bg-violet-500/10"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="relative bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-500 hover:to-purple-600 text-white px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-violet-500/25 border border-violet-400/30 group exo-2"
            >
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/50 to-violet-600/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </Link>
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 rounded-full bg-slate-900/50 border border-violet-500/30 text-gray-300 hover:text-violet-300 focus:outline-none transition-all duration-300 hover:bg-violet-500/10"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-xl border-t border-violet-500/20">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl exo-2 ${
                  isActive(item.href)
                    ? "text-violet-300 bg-violet-500/20 border border-violet-500/30"
                    : "text-gray-300 hover:text-violet-300 hover:bg-violet-500/10 border border-transparent"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full mt-4 bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-500 hover:to-purple-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 text-center border border-violet-400/30 exo-2"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;