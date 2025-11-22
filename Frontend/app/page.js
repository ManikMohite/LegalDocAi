"use client";
"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import GetStartedButton from "@/components/getstarted";
import { FileText, ShieldCheck, ScrollText, FileDiff } from "lucide-react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleUpload = () => {
    if (status === "authenticated") {
      router.push("/dashboard");    // user is logged in
    } else if (status === "unauthenticated") {
      router.push("/login");        // user is NOT logged in
    } else {
      // still loading session
      console.log("Checking session...");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 opacity-95"></div>

        {/* Floating blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-300 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-20"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center py-40 px-6 text-white"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-xl"
          >
            Legal Document AI  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-white">
              Assistant
            </span>
          </motion.h1>

          <p className="mt-6 text-xl max-w-2xl mx-auto opacity-90">
            Upload documents, extract key insights, summarize contracts, and analyze clauses—powered by advanced AI.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex justify-center gap-4"
          >
            <button onClick={handleUpload}
              className="bg-white text-blue-900 font-semibold px-7 py-3 rounded-2xl shadow-lg hover:bg-gray-200 transition-all"
            >
              Upload Document
            </button>

            <Link
              href="/features"
              className="backdrop-blur-lg bg-white/20 border border-white/30 px-7 py-3 rounded-2xl hover:bg-white/30 transition-all"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ---------------- FEATURES SECTION ---------------- */}
      <section className="py-28 px-8">
        <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-20">
          Powerful AI Tools for Legal Teams
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

          <FeatureCard
            icon={<FileText size={40} />}
            title="Smart Summaries"
            desc="Generate human-level summaries instantly from long contracts."
            delay={0.15}
          />

          <FeatureCard
            icon={<ScrollText size={40} />}
            title="Clause Detection"
            desc="Find obligations, liabilities, terms, penalties, and legal definitions."
            delay={0.25}
          />

          <FeatureCard
            icon={<ShieldCheck size={40} />}
            title="Secure & Private"
            desc="Your documents stay encrypted and protected."
            delay={0.35}
          />

          <FeatureCard
            icon={<FileDiff size={40} />}
            title="Contract Comparison"
            desc="AI highlights differences between multiple versions."
            delay={0.45}
          />

        </div>
      </section>

      {/* ---------------- IMAGE PREVIEW SECTION ---------------- */}
      <section className="py-28 bg-white px-8">
        <h2 className="text-5xl font-extrabold text-blue-900 text-center mb-16">
          Document Insights — At a Glance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <ImageCard src="/project1.jpeg" alt="Project 1" />
          <ImageCard src="/project4.jpeg" alt="Project 4" />
          <ImageCard src="/project2.jpeg" alt="Project 2" />

        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section className="py-28 text-center bg-gradient-to-r from-blue-900 to-cyan-700 text-white">
        <h2 className="text-5xl font-extrabold mb-5">
          Transform Your Legal Workflow Today
        </h2>

        <p className="opacity-90 text-xl mb-10">
          Upload your first document and experience AI-powered clarity.
        </p>

        <GetStartedButton />
      </section>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                COMPONENTS                                   */
/* -------------------------------------------------------------------------- */

function FeatureCard({ icon, title, desc, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border hover:shadow-2xl transition-all"
    >
      <div className="text-cyan-500 mx-auto mb-4">{icon}</div>

      <h3 className="text-2xl font-bold text-blue-800 text-center">
        {title}
      </h3>

      <p className="mt-2 text-gray-600 text-center">{desc}</p>
    </motion.div>
  );
}

function ImageCard({ src, alt }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 180 }}
      className="rounded-3xl overflow-hidden shadow-2xl border hover:shadow-cyan-300 transition"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}
