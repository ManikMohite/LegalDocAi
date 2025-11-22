"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Layers,
  MessageSquare,
  Scale,
  FileEdit,
  Eye,
  Download,
  ShieldCheck,
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      title: "AI Document Analysis",
      description:
        "Upload any legal document and get instant insights, summaries, key points, and risk factors using powerful AI models.",
      icon: FileText,
    },
    {
      title: "Document Classification",
      description:
        "Automatically categorize files into types like court orders, contracts, notices, agreements, and more.",
      icon: Layers,
    },
    {
      title: "Interactive Document Chat",
      description:
        "Ask AI anything related to your uploaded document—clauses, risks, meanings, explanations—AI responds instantly.",
      icon: MessageSquare,
    },
    {
      title: "General Legal Chat",
      description:
        "Get answers to general legal queries without uploading a file. AI provides informational legal guidance.",
      icon: Scale,
    },
    {
      title: "Draft Generation",
      description:
        "Generate professional legal drafts such as notices, agreements, and formal reply letters in DOCX format.",
      icon: FileEdit,
    },
    {
      title: "Built-in PDF Viewer",
      description:
        "View uploaded PDFs directly in your browser with smooth multi-page scrolling.",
      icon: Eye,
    },
    {
      title: "Export Summaries",
      description:
        "Download AI-generated summaries as beautifully formatted PDFs—perfect for sharing or record-keeping.",
      icon: Download,
    },
    {
      title: "Enterprise-Level Security",
      description:
        "End-to-end security with encrypted data handling, JWT authentication, NextAuth login, and auto temporary file deletion.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-24 px-6">

      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold text-blue-900">
          Powerful AI Features
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mt-4">
          Everything you need to analyze, understand, and generate legal documents —
          all in one secure platform.
        </p>
      </motion.div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-slate-200 transition group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-cyan-100 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-blue-900">
                  {feature.title}
                </h3>
              </div>

              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
