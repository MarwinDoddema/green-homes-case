export default function Tag({ children, className }) {
  return (
    <span
      className={`bg-green px-3 py-1 rounded-lg font-heading text-white ${className}`}
    >
      {children}
    </span>
  );
}
