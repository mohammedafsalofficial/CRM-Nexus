export default function SearchIcon({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      transform="rotate(-10)"
    >
      <circle cx="10" cy="10" r="7" />
      <line x1="15" y1="15" x2="22" y2="22" />
    </svg>
  );
}
