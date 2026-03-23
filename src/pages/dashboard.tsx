import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import BalanceCard from "../components/dashboard/BalanceCard";
import StatsCard from "../components/dashboard/StatsCard";
import TransactionsTable from "../components/dashboard/TransactionsTable";
import { supabaseClient } from "../lib/supabaseClient";

export default function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadData() {
    const session = await supabaseClient.auth.getSession();
    const token = session.data.session?.access_token;

    const b = await fetch("/api/get-balance", {
      headers: { Authorization: `Bearer ${token}` },
    }).then(r => r.json());

    setBalance(b.balance);

    // mock transactions for now
    setTransactions([
      { amount: 120, status: "completed" },
      { amount: 80, status: "pending" },
    ]);
  }

  async function withdraw() {
    setLoading(true);

    const session = await supabaseClient.auth.getSession();
    const token = session.data.session?.access_token;

    await fetch("/api/create-payout", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    });

    setLoading(false);
    loadData();
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-6 mb-6">
        <BalanceCard
          balance={balance}
          onWithdraw={withdraw}
          loading={loading}
        />
        <StatsCard title="Total Earnings" value={`$${balance}`} />
        <StatsCard title="Transactions" value={transactions.length} />
      </div>

      <TransactionsTable transactions={transactions} />
    </Layout>
  );
}
