import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/store/authStore';
import { Button } from '../ui/button';

interface UserMenuProps {
  mobile?: boolean;
}

export function UserMenu({ mobile = false }: UserMenuProps) {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (mobile) {
    return (
      <div className="space-y-2">
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={() => navigate('/profile')}
        >
          <User className="mr-2 h-5 w-5" />
          Profile
        </Button>
        <Button
          variant="ghost"
          className="w-full justify-start"
          onClick={handleLogout}
        >
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate('/profile')}
        >
          <User className="h-5 w-5" />
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: 1.05 }}>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  );
}