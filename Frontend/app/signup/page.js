
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

     let data;
    try {
      data = await res.json();
    } catch (err) {
      setError("This Email already exist");
      return;
    }

    // If backend returns error → show it
    if (data.error) {
      setError(data.error); // 👈 will show "Email already exists"
      return;
    }

    // If success → redirect
    if (data.success) {
      setSuccess("Account created! Redirecting...");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
    }
  }

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-cyan-600 p-6">

  {/* LEFT SIDE – Project Title */}
  <div className="hidden md:flex flex-col w-1/2 text-left pr-10">
    <h1 className="text-4xl font-extrabold text-white leading-tight">
      Legal Document Assistant
    </h1>
    <p className="text-slate-200 text-lg mt-4 max-w-md">
      Create your account to analyze, summarize, and generate legal documents with powerful AI assistance.
    </p>
  </div>

  {/* RIGHT SIDE – Form Card */}
  <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-2xl p-10 rounded-2xl w-full max-w-md border border-slate-200"
      >

        {/* Project Title */}
       

        <h2 className="text-2xl font-semibold text-blue-900 text-center mb-2">
          Create Account
        </h2>
        <p className="text-gray-600 text-center mb-6">Sign up to get started</p>

        {/* SOCIAL SIGNUP */}
   
        {/* OR Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        {/* Messages */}
        {error && (
          <p className="text-red-600 text-center mb-4 font-medium">{error}</p>
        )}
        {success && (
          <p className="text-green-600 text-center mb-4 font-medium">{success}</p>
        )}

        {/* SIGNUP FORM */}
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            required
          />

          <Button
            type="submit"
            className="w-full rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 shadow-md"
          >
            Sign Up
          </Button>
        </form>

        {/* LOGIN LINK */}
        <p className="text-gray-700 text-center mt-6">
          Already have an account?{" "}
          <a className="font-semibold text-cyan-600 hover:underline" href="/login">
            Login
          </a>
        </p>
      </motion.div>
    </div>
  );
}
