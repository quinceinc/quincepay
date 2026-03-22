import { useEffect, useState } from "react";
import { supabaseClient } from "../lib/supabaseClient";

export default function Dashboard() {
  const [balance, setBalance] = useState(0);

  async function loadBalance() {
    const session = await supabaseClient.auth.getSession();
    const token = session.data.session?.access_token;

    const res = await fetch("/api/get-balance", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    setBalance(data.balance);
  }

  async function withdraw() {
    const session = await supabaseClient.auth.getSession();
    const token = session.data.session?.access_token;

    await fetch("/api/create-payout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    alert("Withdrawal started");
  }

  useEffect(() => {
    loadBalance();
  }, []);

  return (
    <main style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>Balance: ${balance}</p>
      <button onClick={withdraw}>Withdraw</button>
    </main>
  );
}
