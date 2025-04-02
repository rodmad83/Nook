"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add background to navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-20 pr-4 md:pr-8">
          <Image
            src="/images/logo.png"
            alt="Nook Junior School Gurugram"
            width={150}
            height={70}
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 ml-4">
          <Link href="/" className="text-hei-green hover:text-hei-bright-green font-medium">
            Home
          </Link>
          <div className="relative group">
            <button className="text-hei-green hover:text-hei-bright-green font-medium flex items-center">
              About
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 pt-2 w-48 hidden group-hover:block">
              <div className="bg-white shadow-lg rounded-md py-2">
                <Link href="/about-hei" className="block px-4 py-2 text-hei-green hover:bg-hei-light">
                  About Nook
                </Link>
                <Link href="/corporate" className="block px-4 py-2 text-hei-green hover:bg-hei-light">
                  Corporate
                </Link>
              </div>
            </div>
          </div>
          <Link href="/hei-schools-gurugram" className="text-hei-green hover:text-hei-bright-green font-medium">
            Nook Junior School
          </Link>
          <Link href="/a-day-at-hei" className="text-hei-green hover:text-hei-bright-green font-medium">
            A Day at Nook
          </Link>
          <Link href="/enrolment-journey" className="text-hei-green hover:text-hei-bright-green font-medium">
            Enrolment Journey
          </Link>
          <Link href="/gallery" className="text-hei-green hover:text-hei-bright-green font-medium">
            Gallery
          </Link>
          <Link href="/contact-us" className="text-hei-green hover:text-hei-bright-green font-medium">
            Contact Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-20 focus:outline-none"
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-hei-green mb-1.5 transition-all ${isOpen ? 'transform rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-hei-green mb-1.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <div className={`w-6 h-0.5 bg-hei-green ${isOpen ? 'transform -rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-10 md:hidden transition-transform duration-300 ease-in-out transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="container pt-20 pb-8">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-hei-green hover:text-hei-bright-green font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <div className="py-2">
                <div className="font-medium text-hei-green mb-2">About</div>
                <div className="ml-4 flex flex-col space-y-2">
                  <Link
                    href="/about-hei"
                    className="text-hei-green hover:text-hei-bright-green"
                    onClick={() => setIsOpen(false)}
                  >
                    About Nook
                  </Link>
                  <Link
                    href="/corporate"
                    className="text-hei-green hover:text-hei-bright-green"
                    onClick={() => setIsOpen(false)}
                  >
                    Corporate
                  </Link>
                </div>
              </div>
              <Link
                href="/hei-schools-gurugram"
                className="text-hei-green hover:text-hei-bright-green font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Nook Junior School
              </Link>
              <Link
                href="/a-day-at-hei"
                className="text-hei-green hover:text-hei-bright-green font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                A Day at Nook
              </Link>
              <Link
                href="/enrolment-journey"
                className="text-hei-green hover:text-hei-bright-green font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Enrolment Journey
              </Link>
              <Link
                href="/gallery"
                className="text-hei-green hover:text-hei-bright-green font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact-us"
                className="text-hei-green hover:text-hei-bright-green font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
