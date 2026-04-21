"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#services", label: "서비스" },
  { href: "#process", label: "진행 과정" },
  { href: "#portfolio", label: "포트폴리오" },
  { href: "#contact", label: "문의하기" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-gray-200 bg-white/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold text-gray-900">
          Paperclip<span className="text-blue-600">Dev</span>
        </a>

        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 md:inline-block"
        >
          프로젝트 시작하기
        </a>

        <button
          type="button"
          className="md:hidden"
          aria-label={mobileMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-1 block rounded-lg bg-blue-600 px-3 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                프로젝트 시작하기
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
