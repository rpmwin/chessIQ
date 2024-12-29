import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/store/authStore';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual login logic
    login({
      id: '1',
      email,
      lichessUsername: 'demo_user',
      chesscomUsername: 'demo_user',
    });
    navigate('/archive');
  };

  return (
    <div className="flex min-h-[80vh] flex-col justify-center">
      <div className="mx-auto w-full max-w-md">
        <div className="rounded-lg bg-white px-8 py-12 shadow">
          <h2 className="text-center text-2xl font-bold leading-9 text-gray-900">
            Sign in to your account
          </h2>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600"
              />
            </div>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}