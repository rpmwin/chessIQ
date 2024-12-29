import { LucideProps } from 'lucide-react';

export function ChessIcon(props: LucideProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 16h8v-2H8v2Z" />
      <path d="M12 4v1.5" />
      <path d="M5 8h14" />
      <path d="M16 12V9h-3v3h3Z" />
      <path d="M11 9H8v3h3V9Z" />
      <path d="M14 16v4H8v-4" />
      <path d="M4 20h14" />
    </svg>
  );
}