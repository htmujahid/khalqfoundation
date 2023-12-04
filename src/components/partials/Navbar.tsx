'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { MenuCloseIcon, MenuIcon } from '../assets';

const navLinks = [
  { title: 'Home', href: '/' },
  { title: 'Projects', href: '/projects' },
  { title: 'Cases', href: '/cases' },
  { title: 'About Us', href: '/about' },
  { title: 'Contact Us', href: '/contact' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full z-20 top-0 left-0">
      <div className="container flex flex-wrap items-center justify-between gap-2 mx-auto py-5 relative">
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/images/logo/logo.png"
            alt="logo"
            className="h-auto w-auto"
            width={50}
            height={50}
          />
        </Link>
        <div
          className="items-center justify-between hidden relative md:static w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:static text-gray-dark md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-80 md:p-0"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:order-2 gap-2">
          <Button variant="primary" href="/donate" className="">
            Donate Now
          </Button>
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border-2 text-gray-dark rounded-lg md:hidden hover:bg-gray-light focus:outline-none focus:ring-2 focus:ring-gray-light"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <MenuCloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className="items-center justify-between absolute md:hidden md:static w-full md:w-auto md:order-1 text-center"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 text-gray-dark font-medium border border-gray-100 rounded-lg bg-gray-50 border-2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:opacity-80 md:p-0"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
