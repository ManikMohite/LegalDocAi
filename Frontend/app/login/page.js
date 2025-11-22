"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Facebook, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  

   const handleCredentialsLogin = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log("Credentials Result:", result);

    if (result?.error) {
      alert("Invalid email or password");
      return;
    }

    // Login success → go to Home
    window.location.href = "/";
  };


  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-cyan-600 flex items-center justify-center px-6 py-10">

      {/* LEFT SIDE – Project Info */}
      <div className="hidden md:flex flex-col w-1/2 pr-12 text-left">
        <h1 className="text-5xl font-extrabold text-white leading-tight drop-shadow-md">
          Legal Document Assistant
        </h1>
        <p className="text-slate-200 text-lg mt-4 max-w-lg leading-relaxed">
          Your AI-powered workspace to analyze documents, generate legal drafts,
          and chat with an intelligent assistant — securely and instantly.
        </p>
      </div>

      {/* RIGHT SIDE – Login Card */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white shadow-2xl p-10 rounded-2xl w-full max-w-md border border-slate-200"
      >
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-2">
          Welcome Back
        </h2>

        <p className="text-gray-600 text-center mb-6">
          Login to continue
        </p>

        {/* SOCIAL LOGIN */}
        <div className="flex flex-col gap-3 mb-6">
      <Button
  onClick={() => signIn("github", { callbackUrl: "/" })}
  className="w-full rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-semibold flex items-center justify-center gap-3 py-3"
>
  <Github size={20} /> Continue with GitHub
</Button>

<Button
  onClick={() => signIn("facebook", { callbackUrl: "/" })}
  className="w-full rounded-xl bg-[#1877f2] hover:bg-[#0e5fcc] text-white font-semibold flex items-center justify-center gap-3 py-3"
>
  <Facebook size={20} /> Continue with Facebook
</Button>

<Button
  onClick={() => signIn("google", { callbackUrl: "/" })}
  className="w-full rounded-xl bg-[#DB4437] hover:bg-[#b9382d] text-white font-semibold flex items-center justify-center gap-3 py-3"
>
  <Mail size={20} /> Continue with Google
</Button>

        </div>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-500 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-center mb-4 font-medium">
            {error}
          </p>
        )}

        {/* FORM */}
        <form  onSubmit={handleCredentialsLogin} className="flex flex-col gap-4">
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
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-cyan-500 outline-none"
            required
          />

          {/* Forgot password */}
          <div className="text-right -mt-2">
            <a
              href="/forgotpassword"
              className="text-sm text-cyan-600 hover:underline font-medium"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 shadow-md"
          >
            Login
          </Button>
        </form>

        {/* Signup Link */}
        <p className="text-gray-700 text-center mt-6">
          Don’t have an account?{" "}
          <a
            className="font-semibold text-cyan-600 hover:underline"
            href="/signup"
          >
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
}

