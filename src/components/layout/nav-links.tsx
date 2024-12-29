import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/store/authStore';

interface NavLinksProps {
  mobile?: boolean;
}

export function NavLinks({ mobile = false }: NavLinksProps) {
  const { isAuthenticated } = useAuthStore();

  const links = [
    ...(isAuthenticated
      ? [
          { href: '/archive', label: 'Game Archive' },
          { href: '/profile', label: 'Profile' },
        ]
      : []),
  ];

  if (mobile) {
    return (
      <>
        {links.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {link.label}
          </Link>
        ))}
      </>
    );
  }

  return (
    <>
      {links.map((link) => (
        <motion.div
          key={link.href}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
        >
          <Link
            to={link.href}
            className="rounded-md px-3 py-2 text-sm font-medium hover:text-blue-600"
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
    </>
  );
}