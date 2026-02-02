"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🤖</span>
            <span className="font-bold text-xl">
              <span className="gradient-text">TutorBot</span>
              <span className="text-gray-700"> Pro</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-gray-600 hover:text-indigo-600 transition">
              功能介紹
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-indigo-600 transition">
              方案價格
            </Link>
            <Link href="/demo" className="text-gray-600 hover:text-indigo-600 transition">
              線上體驗
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition">
              關於我們
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition">
              聯絡我們
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/demo"
              className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium transition"
            >
              免費試用
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition font-medium"
            >
              預約諮詢
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link href="/features" className="text-gray-600 hover:text-indigo-600 transition py-2">
                功能介紹
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-indigo-600 transition py-2">
                方案價格
              </Link>
              <Link href="/demo" className="text-gray-600 hover:text-indigo-600 transition py-2">
                線上體驗
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition py-2">
                關於我們
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-indigo-600 transition py-2">
                聯絡我們
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-full text-center hover:bg-indigo-700 transition font-medium mt-2"
              >
                預約諮詢
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
