import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Mail } from 'lucide-react';
import { useThemeStore } from '@/store/themeStore';
import { ChessIcon } from '../icons';

export function Footer() {
  const { theme } = useThemeStore();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50'} transition-colors duration-200`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          <motion.div variants={item} className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChessIcon className="h-6 w-6 text-blue-600" />
              <span className="text-lg font-bold">Chess Analysis</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Analyze your chess games like a grandmaster with our powerful tools
              and insights.
            </p>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@chessanalysis.com"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Legal
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"
              >
                Terms of Service
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Chess Analysis. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}