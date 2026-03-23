export default function Sidebar() {
  return (
    <div className="w-64 p-6 border-r border-white/5">
      <h1 className="text-xl font-bold gradient-text mb-10">
        QuincePay
      </h1>

      <nav className="space-y-6 text-gray-400">
        <p className="hover:text-white cursor-pointer">Dashboard</p>
        <p className="hover:text-white cursor-pointer">Transactions</p>
        <p className="hover:text-white cursor-pointer">Settings</p>
      </nav>
    </div>
  );
}
