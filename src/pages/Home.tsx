import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  BarChart,
  History,
  Users,
  Trophy,
  Brain,
  Zap,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChessIcon } from '@/components/icons';
import { useThemeStore } from '@/store/themeStore';

export function Home() {
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
    <div className="relative isolate">
      {/* Hero Section */}
      <div className="mx-auto max-w-4xl py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center"
        >
          <motion.div variants={item} className="mb-8 flex justify-center">
            <ChessIcon className="h-20 w-20 text-blue-600" />
          </motion.div>
          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight sm:text-6xl"
          >
            Analyze your chess games like a{' '}
            <span className="text-blue-600">grandmaster</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300"
          >
            Import your games from Lichess and Chess.com, analyze your moves, and
            improve your chess strategy with our powerful analysis tools.
          </motion.p>
          <motion.div
            variants={item}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link to="/register">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700"
              >
                <span className="relative z-10">Get started</span>
                <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-blue-700 to-blue-600 transition-transform duration-300 ease-out group-hover:translate-x-0" />
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="outline"
                size="lg"
                className="group relative overflow-hidden"
              >
                <span className="relative z-10">Log in</span>
                <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 transition-transform duration-300 ease-out group-hover:translate-x-0" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="py-24 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to improve your game
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Comprehensive tools and features designed to help you understand your
              games better and enhance your chess skills.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Game Archive',
                  description:
                    'Access your complete game history from multiple platforms in one place.',
                  icon: History,
                  color: 'bg-purple-500',
                },
                {
                  title: 'Deep Analysis',
                  description:
                    'Get detailed move analysis and improvement suggestions from our advanced engine.',
                  icon: Brain,
                  color: 'bg-blue-500',
                },
                {
                  title: 'Multi-Platform',
                  description:
                    'Connect your Lichess and Chess.com accounts seamlessly for a unified experience.',
                  icon: Users,
                  color: 'bg-green-500',
                },
                {
                  title: 'Performance Tracking',
                  description:
                    'Track your progress over time with detailed statistics and insights.',
                  icon: BarChart,
                  color: 'bg-yellow-500',
                },
                {
                  title: 'Tournament Ready',
                  description:
                    'Prepare for tournaments with specialized analysis and practice tools.',
                  icon: Trophy,
                  color: 'bg-red-500',
                },
                {
                  title: 'Instant Insights',
                  description:
                    'Get real-time feedback on your moves and learn from your mistakes instantly.',
                  icon: Zap,
                  color: 'bg-indigo-500',
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`group relative rounded-2xl p-8 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                >
                  <div
                    className={`absolute -inset-0.5 rounded-2xl ${feature.color} opacity-0 blur transition duration-300 group-hover:opacity-10`}
                  />
                  <div className="relative">
                    <div
                      className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.color}`}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                    <div className="mt-4 flex items-center text-blue-600">
                      <span className="text-sm font-medium">Learn more</span>
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="relative isolate mt-24 px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to improve your chess game?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Join thousands of players who have already improved their game with our
            analysis tools.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to="/register">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-blue-600 hover:bg-blue-700"
              >
                <span className="relative z-10">Start analyzing now</span>
                <div className="absolute inset-0 -translate-x-full transform bg-gradient-to-r from-blue-700 to-blue-600 transition-transform duration-300 ease-out group-hover:translate-x-0" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}