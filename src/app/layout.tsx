"use client";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { useState, useEffect } from "react";
import { Search, ShoppingCart, ChevronDown, X } from 'lucide-react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const navLinks = [
  {
    title: "Novinky",
    slogan: "Nejnovější technologie a inovace",
    submenu: {
      categories: ["Chytré Telefony", "Herní Konzole", "Nositelné Technologie"],
      featured: [
        { name: "XPhone 12", image: "/api/placeholder/200/200", slogan: "Smartphone nové generace" },
        { name: "Virtual Pro", image: "/api/placeholder/200/200", slogan: "Zažijte nový rozměr hraní" }
      ]
    }
  },
  {
    title: "Audio",
    slogan: "Špičkový zvuk a design",
    submenu: {
      categories: ["Bezdrátová Sluchátka", "Hi-Fi Systémy", "Soundbary"],
      featured: [
        { name: "AudioMax Pro", image: "/api/placeholder/200/200", slogan: "Zvuk, který cítíte" },
        { name: "Sonic Soundbar", image: "/api/placeholder/200/200", slogan: "Domácí kino na dosah" }
      ]
    }
  },
  {
    title: "Nositelné",
    slogan: "Technologie na dosah ruky",
    submenu: {
      categories: ["Chytré Hodinky", "Fitness Trackery", "AR Brýle"],
      featured: [
        { name: "SmartWatch 5", image: "/api/placeholder/200/200", slogan: "Váš nový osobní trenér" },
        { name: "VR Glasses", image: "/api/placeholder/200/200", slogan: "Virtuální realita pro každého" }
      ]
    }
  }
];

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <html lang="cs">
      <head>
        <title>Hi-Tech Electronics</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950`}>
        <nav className="bg-gray-900 text-white border-b border-cyan-500 relative">
          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between h-20">
                {/* Logo */}
                <div className="flex-shrink-0 ml-8">
                  <a href="/" className="text-2xl font-bold font-mono text-cyan-400">HI-TECH</a>
                </div>

                {/* Main Navigation */}
                <div className="flex justify-center flex-1">
                  {navLinks.map((link, index) => (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() => setActiveDropdown(index)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="px-4 py-6 flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-500 font-mono tracking-wider">
                        <span className="text-sm uppercase">{link.title}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                      </button>

                      {/* Mega Menu */}
                      <div 
                        className={`fixed left-0 w-full bg-gray-900/95 border-t border-cyan-500 transform transition-all duration-500 z-50 ${
                          activeDropdown === index 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 -translate-y-4 pointer-events-none'
                        }`}
                      >
                        <div className="container mx-auto py-12 px-4">
                          <div className="text-center mb-10">
                            <h2 className="text-3xl font-mono tracking-widest text-cyan-400 uppercase">{link.slogan}</h2>
                          </div>
                          <div className="grid grid-cols-12 gap-8 font-mono">
                            {/* Categories */}
                            <div className="col-span-3 border-r border-cyan-500/30">
                              <h3 className="text-lg uppercase tracking-wider mb-6 text-cyan-400">Kategorie</h3>
                              <ul className="space-y-4">
                                {link.submenu.categories.map((category, idx) => (
                                  <li key={idx}>
                                    <a href="#" className="hover:text-cyan-400 transition-colors duration-300 text-sm uppercase tracking-wide group flex items-center">
                                      <span className="transform transition-transform duration-300 group-hover:translate-x-2">{category}</span>
                                      <ChevronDown className="w-4 h-4 ml-2 rotate-[-90deg] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Featured Products */}
                            <div className="col-span-9">
                              <h3 className="text-lg uppercase tracking-wider mb-6 text-cyan-400">Doporučujeme</h3>
                              <div className="grid grid-cols-4 gap-8">
                                {link.submenu.featured.map((item, idx) => (
                                  <div key={idx} className="group relative overflow-hidden">
                                    <div className="aspect-w-1 aspect-h-1 overflow-hidden border border-cyan-500/30">
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale hover:grayscale-0"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 w-full p-4 text-center">
                                          <p className="text-white uppercase tracking-wider text-sm">{item.name}</p>
                                          <p className="text-cyan-400 text-xs italic mt-1">{item.slogan}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Search and Cart */}
                <div className="flex items-center space-x-6 mr-8">
                  <button className="hover:text-cyan-400 transition-colors duration-300">
                    <Search className="w-5 h-5" />
                  </button>
                  <button className="hover:text-cyan-400 transition-colors duration-300">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <div className="flex items-center justify-between px-4 h-16 border-b border-cyan-500">
              <div className="flex items-center space-x-4">
                <Search className="w-5 h-5 text-cyan-400" />
                <ShoppingCart className="w-5 h-5 text-cyan-400" />
              </div>

              <div className="flex-1 text-center">
                <a href="/" className="text-2xl font-mono font-bold text-cyan-400">HI-TECH</a>
              </div>

              {/* Hamburger Icon */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                  <span className={`block h-0.5 w-6 bg-cyan-400 transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block h-0.5 w-6 bg-cyan-400 transform transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block h-0.5 w-6 bg-cyan-400 transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            <div
              className={`fixed inset-0 bg-gray-900 text-white transform transition-all duration-500 ease-in-out z-40 ${
                isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-cyan-400 text-3xl focus:outline-none"
              >
                <X className="w-8 h-8" />
              </button>

              <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
                {navLinks.map((link, index) => (
                  <div key={index} className="text-center">
                    <p className="text-cyan-400 font-mono text-xl uppercase mb-4">{link.title}</p>
                    <ul className="space-y-2">
                      {link.submenu.categories.map((category, idx) => (
                        <li key={idx} className="hover:text-cyan-300">
                          <a href="#" className="text-sm uppercase tracking-wide">{category}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <main>{children}</main>
      </body>
    </html>
  );
}
