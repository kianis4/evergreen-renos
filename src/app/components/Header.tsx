'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Popover, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Fragment } from 'react';

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

function NavItem({ href, children }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative block px-3 py-2 transition',
          isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400'
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
}

function DesktopNavigation() {
  return (
    <nav>
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/">Home</NavItem>
        <NavItem href="/about-us">About Us</NavItem>
        <NavItem href="/services">Services</NavItem>
        <NavItem href="/testimonials">Testimonials</NavItem>
        <NavItem href="/contact-us">Contact Us</NavItem>
      </ul>
    </nav>
  );
}

function MobileNavItem({ href, children }: NavItemProps) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/">Home</MobileNavItem>
                <MobileNavItem href="/about-us">About Us</MobileNavItem>
                <MobileNavItem href="/services">Services</MobileNavItem>
                <MobileNavItem href="/testimonials">Testimonials</MobileNavItem>
                <MobileNavItem href="/contact-us">Contact Us</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export default function Header() {
  return (
    <header className="relative z-50 flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <Link href="/" aria-label="Home" className="text-lg font-bold">
        Evergreen Renos
      </Link>
      <div className="hidden md:block">
        <DesktopNavigation />
      </div>
      <div className="md:hidden">
        <MobileNavigation />
      </div>
    </header>
  );
}


// import Link from 'next/link';

// export default function Header() {
//   return (
//     <header className="bg-green-600 text-white p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-lg font-bold">
//           <Link href="/">Evergreen Renos</Link>
//         </h1>
//         <nav>
//           <ul className="flex space-x-4">
//             <li>
//               <Link href="/" className="hover:underline">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/about-us" className="hover:underline">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link href="/services" className="hover:underline">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link href="/testimonials" className="hover:underline">
//                 Testimonials
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact-us" className="hover:underline">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// }
