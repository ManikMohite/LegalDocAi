"use client";

import { motion } from "framer-motion";
import { Upload, Bot, FileCheck, Download } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Upload Your Document",
      description:
        "Choose any PDF, image, or scanned document. Our system instantly processes it for AI analysis.",
      icon: Upload,
    },
    {
      title: "AI Analyzes Your File",
      description:
        "The AI extracts text, identifies clauses, analyzes risks, and creates a structured understanding of the file.",
      icon: Bot,
    },
    {
      title: "Get Insights & Summary",
      description:
        "Receive clean, concise summaries along with highlighted key points and categorized information.",
      icon: FileCheck,
    },
    {
      title: "Download or Ask Questions",
      description:
        "Export summaries as PDF or ask follow-up questions through the AI chat for deeper clarification.",
      icon: Download,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-6">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-20"
      >
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-cyan-600">
          How It Works
        </h1>

        <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
          A powerful AI workflow designed to simplify legal document
          understanding.
        </p>
      </motion.div>

      {/* STEP GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto mb-28">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-slate-200 transition group text-center"
            >
              <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition mb-6">
                <Icon size={40} />
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-3">
                {step.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* YOUTUBE VIDEO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Watch How It Works
        </h2>
        <p className="text-slate-600 mb-8">
          A quick walkthrough of how our AI processes and analyzes legal
          documents.
        </p>

        {/* VIDEO PLACEHOLDER BOX */}
        <div className="relative w-full pb-[56.25%] rounded-2xl overflow-hidden shadow-lg border border-slate-300 mb-6">
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src="https://www.youtube.com/embed/QYWgDhLPjME?si=fdj81AaLWjECgcz0&amp;start=16"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  ></iframe>
</div>


       
      </motion.div>
    </div>
  );
}
