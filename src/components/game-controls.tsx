import React from 'react';
import { Button } from './ui/button';
import {
  ChevronLeft,
  ChevronRight,
  SkipBack,
  SkipForward,
  Play,
  Pause,
} from 'lucide-react';

interface GameControlsProps {
  currentMove: number;
  totalMoves: number;
  isPlaying: boolean;
  onFirstMove: () => void;
  onPreviousMove: () => void;
  onTogglePlayback: () => void;
  onNextMove: () => void;
  onLastMove: () => void;
}

export function GameControls({
  currentMove,
  totalMoves,
  isPlaying,
  onFirstMove,
  onPreviousMove,
  onTogglePlayback,
  onNextMove,
  onLastMove,
}: GameControlsProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={onFirstMove}
        disabled={currentMove === 0}
      >
        <SkipBack className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onPreviousMove}
        disabled={currentMove === 0}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" onClick={onTogglePlayback}>
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onNextMove}
        disabled={currentMove === totalMoves - 1}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onLastMove}
        disabled={currentMove === totalMoves - 1}
      >
        <SkipForward className="h-4 w-4" />
      </Button>
    </div>
  );
}