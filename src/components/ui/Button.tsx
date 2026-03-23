export default function Button({ children, onClick, loading }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-indigo-500 to-cyan-400 p-3 rounded-xl font-semibold hover:opacity-90 transition"
    >
      {loading ? "Processing..." : children}
    </button>
  );
}
