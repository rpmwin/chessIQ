import React from 'react';
import { Link } from 'react-router-dom';
import { Chessboard } from 'react-chessboard';
import { Button } from './ui/button';
import { formatDate } from '@/lib/utils';

interface GameCardProps {
  id: string;
  date: Date;
  opponent: string;
  result: string;
  platform: string;
  length: string;
  fen: string;
}

export function GameCard({
  id,
  date,
  opponent,
  result,
  platform,
  length,
  fen,
}: GameCardProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow transition-shadow hover:shadow-md">
      <div className="mb-4 aspect-square">
        <Chessboard position={fen} boardWidth={300} areArrowsAllowed={false} />
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{formatDate(date)}</span>
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${
              result === 'Win'
                ? 'bg-green-100 text-green-800'
                : result === 'Loss'
                ? 'bg-red-100 text-red-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {result}
          </span>
        </div>
        <p className="mt-2 font-medium text-gray-900">vs {opponent}</p>
        <p className="text-sm text-gray-500">
          {platform} • {length}
        </p>
      </div>
      <div className="flex gap-2">
        <Link to={`/analysis/${id}`} className="flex-1">
          <Button className="w-full">Analyze</Button>
        </Link>
      </div>
    </div>
  );
}