export default function Badge({ text }) {
  return (
    <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">
      {text}
    </span>
  );
}
