"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ForgotPassword() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // SEND RESET EMAIL
  async function handleSendEmail(e) {
    e.preventDefault();
    setMessage("");
    setError("");

    const res = await fetch("/api/forgotpassword", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (data.error) return setError(data.error);

    setMessage("Reset link sent to your email!");
  }

  // RESET PASSWORD
  async function handleResetPassword(e) {
    e.preventDefault();
    setMessage("");
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    const res = await fetch("/api/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });

    const data = await res.json();
    if (data.error) return setError(data.error);

    setMessage("Password updated successfully! Redirecting...");
    
    setTimeout(() => {
      window.location.href = "/login";
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-cyan-600 flex items-center justify-center px-6 py-10">

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="bg-white w-full max-w-md p-10 rounded-2xl shadow-2xl border border-slate-200"
      >
        {/* Header */}
        <h1 className="text-3xl font-bold text-blue-900 text-center mb-2">
          {token ? "Reset Password" : "Forgot Password"}
        </h1>

        <p className="text-slate-600 text-center mb-6">
          {token
            ? "Choose a new password for your account."
            : "Enter your email and we’ll send you a reset link."}
        </p>

        {/* Success Message */}
        {message && (
          <p className="text-green-700 bg-green-100 border border-green-300 px-4 py-2 rounded-xl text-center mb-4 font-medium">
            {message}
          </p>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-700 bg-red-100 border border-red-300 px-4 py-2 rounded-xl text-center mb-4 font-medium">
            {error}
          </p>
        )}

        {/* STEP 1 — EMAIL */}
        {!token && (
          <form onSubmit={handleSendEmail} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-cyan-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              Send Reset Link
            </button>
          </form>
        )}

        {/* STEP 2 — RESET PASSWORD */}
        {token && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <input
              type="password"
              placeholder="New Password"
              className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-cyan-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-cyan-500 outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold shadow-md transition"
            >
              Reset Password
            </button>
          </form>
        )}
      </motion.div>
    </div>
  );
}
