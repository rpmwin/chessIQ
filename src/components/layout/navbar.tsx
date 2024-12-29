import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { useThemeStore } from '@/store/themeStore';
import { Button } from '../ui/button';
import { ThemeToggle } from '../theme/theme-toggle';
import { NavLinks } from './nav-links';
import { UserMenu } from './user-menu';
import { ChessIcon } from '../icons';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const { theme } = useThemeStore();

  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white'} shadow-sm transition-colors duration-200`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <ChessIcon className="h-8 w-8 text-blue-600" />
              </motion.div>
              <span className="text-xl font-bold">Chess Analysis</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavLinks />
            <ThemeToggle />
            {isAuthenticated ? (
              <UserMenu />
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Sign up</Button>
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              <NavLinks mobile />
              {isAuthenticated ? (
                <UserMenu mobile />
              ) : (
                <div className="space-y-2">
                  <Link to="/login" className="block">
                    <Button variant="ghost" className="w-full">
                      Login
                    </Button>
                  </Link>
                  <Link to="/register" className="block">
                    <Button className="w-full">Sign up</Button>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}