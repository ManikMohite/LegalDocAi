import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* LEFT — About */}
        <div>
          <h3 className="text-xl font-semibold text-slate-300">
            Legal Document Assistant
          </h3>
          <p className="text-gray-400 mt-2">
            Government Engineering College, Raichur
          </p>
          <p className="text-gray-500 mt-1 text-sm">
            Built by Manik and team with dedication & innovation.
          </p>
        </div>

        {/* MIDDLE — Team Members */}
<div>
  <h4 className="text-slate-300 text-lg font-semibold mb-3">Team Members</h4>
  <ul className="space-y-2 text-gray-300">

    {/* MANIK */}
    <li className="flex items-center gap-2">
      <a
        href="https://github.com/manikmohite"
        target="_blank"
        className="text-gray-300 hover:text-slate-300"
      >
        <Github size={16} />
      </a>

      <a
        href="https://www.linkedin.com/in/manikmohite05"
        target="_blank"
        className="text-gray-300 hover:text-slate-300"
      >
        <Linkedin size={16} />
      </a>

      <span>Manik</span>
    </li>

    {/* SRINIVAS */}
    <li className="flex items-center gap-2">
      <Github size={16} />
      <Linkedin size={16} />
      <span>Srinivas</span>
    </li>

    {/* RAHUL */}
    <li className="flex items-center gap-2">
      <Github size={16} />
      <Linkedin size={16} />
      <span>Rahul</span>
    </li>

    {/* KALYAN */}
    <li className="flex items-center gap-2">
      <Github size={16} />
      <Linkedin size={16} />
      <span>Kalyan</span>
    </li>

  </ul>
</div>


        {/* RIGHT — Features */}
        <div>
          <h4 className="text-slate-300 text-lg font-semibold mb-3">Features</h4>
          <ul className="space-y-2 text-gray-300">
            <li>AI-Powered Document Analysis</li>
            <li>Document Upload & Classification</li>
            <li>Legal Query Chat Assistant</li>
            <li>Summary & Case Extraction</li>
            <li>Draft Document Generation</li>
          </ul>

          {/* Your Social Links */}
         
        </div>

      </div>

      {/* Bottom copyright */}
      <div className="text-center mt-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Legal Document Assistant. All rights reserved.
      </div>
    </footer>
  );
}
