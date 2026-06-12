interface ErrorProps {
  error?: string;
  className?: string;
}

export default function Error({
  error,
  className = "",
}: ErrorProps) {
  if (!error) return null;

  return (
    <span className={`text-red-500 text-sm mt-1 ${className}`}>
      {error}
    </span>
  );
}