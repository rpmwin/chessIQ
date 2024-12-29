import React from 'react';
import { Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useThemeStore } from '@/store/themeStore';
import { Navbar } from './layout/navbar';
import { Footer } from './layout/footer';
import { PageTransition } from './layout/page-transition';

export function Layout() {
  const { theme } = useThemeStore();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-50'} transition-colors duration-200`}>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}