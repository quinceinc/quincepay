import { useState } from "react";
import { supabaseClient } from "../lib/supabaseClient";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function login() {
    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) router.push("/dashboard");
  }

  async function signup() {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
    });

    if (!error && data.user) {
      await fetch("/api/create-stripe-account", {
        method: "POST",
        body: JSON.stringify({
          userId: data.user.id,
          email,
        }),
      });

      router.push("/dashboard");
    }
  }

  return (
    <main style={{ padding: 40 }}>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={login}>Login</button>
      <button onClick={signup}>Register</button>
    </main>
  );
}
