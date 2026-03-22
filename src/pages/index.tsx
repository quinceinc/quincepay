import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>QuincePay</h1>
      <Link href="/login">Login</Link>
    </main>
  );
}
