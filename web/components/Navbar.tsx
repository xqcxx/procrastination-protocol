'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import WalletConnect from './WalletConnect';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const links = [
    { href: '/start', label: 'Start' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/temptations', label: 'Temptations' },
    { href: '/leaderboard', label: 'Leaderboard' },
    { href: '/achievements', label: 'Achievements' },
  ];

  return (
    <nav className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              Procrastination Protocol
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors ${
                    isActive(link.href)
                      ? 'border-black text-black dark:border-white dark:text-white'
                      : 'border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-200'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <WalletConnect />
          </div>
        </div>
      </div>
    </nav>
  );
}
