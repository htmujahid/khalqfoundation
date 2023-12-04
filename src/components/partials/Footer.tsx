import Link from 'next/link';
import Image from 'next/image';
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '../assets';

const footerLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Projects',
    href: '/projects',
  },
  {
    title: 'Cases',
    href: '/cases',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const socialLinks = [
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/khalqfoundationpakistan',
    icon: <FacebookIcon className="h-5 w-5 text-white" />,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/khalqfoundationpakistan/',
    icon: <InstagramIcon className="h-5 w-5 text-white" />,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/company/khalq-foundation-pakistan/',
    icon: <LinkedinIcon className="h-5 w-5 text-white" />,
  },
];

export function Footer() {
  return (
    <footer>
      <div className="border-t">
        <div className="container mx-auto">
          <div className="">
            <div className="flex items-center justify-center flex-col">
              <div className="">
                <Link href="/" className="flex items-center sm:mb-0 py-6">
                  <Image
                    src="/assets/images/logo/logo.png"
                    alt="logo"
                    className="h-auto w-auto"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <ul className="flex flex-wrap items-center pb-6 font-medium sm:mb-0 justify-center gap-x-8 gap-y-2">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-dark hover:opacity-80 duration-300"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <hr className="sm:mx-auto" />
            <div className="flex flex-wrap items-center justify-between flex-col-reverse py-6 gap-2 sm:flex-row">
              <p className="text-gray-dark">&copy; 2022 khalqfoundation.org</p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <div key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      className="bg-gray-dark p-1 rounded-md block hover:opacity-80 duration-300"
                    >
                      {link.icon}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
