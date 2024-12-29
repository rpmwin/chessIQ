import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useThemeStore } from '@/store/themeStore';
import { Button } from '../ui/button';

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {theme === 'light' ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </motion.div>
    </Button>
  );
}