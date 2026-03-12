"use client";

import { FileCode, FileJson, FileText } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const TABS = [
  {
    id: "about",
    name: "about.ts",
    icon: FileCode,
    color: "text-blue-400",
    content: (
      <code className="text-zinc-300">
        <span className="text-purple-400">const</span>{" "}
        <span className="text-blue-400">developer</span>{" "}
        <span className="text-cyan-400">=</span> {"{"}
        {"\n  "}
        <span className="text-blue-300">name</span>
        <span className="text-zinc-400">: </span>
        <span className="text-green-400">{'"Aditya Singh"'}</span>,{"\n  "}
        <span className="text-blue-300">role</span>
        <span className="text-zinc-400">: </span>
        <span className="text-green-400">
          {'"Full-Stack Dev & AI Engineer"'}
        </span>
        ,{"\n  "}
        <span className="text-blue-300">focus</span>
        <span className="text-zinc-400">: [</span>
        {"\n    "}
        <span className="text-green-400">{'"LLMs"'}</span>,{" "}
        <span className="text-green-400">{'"NLP"'}</span>,{" "}
        <span className="text-green-400">{'"RAG Systems"'}</span>,{" "}
        <span className="text-green-400">{'"Real-time Apps"'}</span>
        {"\n  "}
        <span className="text-zinc-400">]</span>,{"\n  "}
        <span className="text-blue-300">passion</span>
        <span className="text-zinc-400">: </span>
        <span className="text-green-400">
          {'"Turning complex ideas into scalable products."'}
        </span>
        {"\n"}
        {"}"}
        <span className="text-zinc-400">;</span>
      </code>
    ),
  },
  {
    id: "skills",
    name: "skills.py",
    icon: FileText,
    color: "text-yellow-400",
    content: (
      <code className="text-zinc-300">
        <span className="text-purple-400">class</span>{" "}
        <span className="text-amber-400">Stack</span>
        <span className="text-zinc-400">:</span>
        {"\n    "}
        <span className="text-purple-400">def</span>{" "}
        <span className="text-blue-400">__init__</span>(
        <span className="text-orange-400">self</span>)
        <span className="text-zinc-400">:</span>
        {"\n        "}
        <span className="text-orange-400">self</span>.
        <span className="text-zinc-300">frontend</span>{" "}
        <span className="text-cyan-400">=</span> [
        <span className="text-green-400">{'"React"'}</span>,{" "}
        <span className="text-green-400">{'"Next.js"'}</span>,{" "}
        <span className="text-green-400">{'"Tailwind"'}</span>]{"\n        "}
        <span className="text-orange-400">self</span>.
        <span className="text-zinc-300">backend</span>{" "}
        <span className="text-cyan-400">=</span> [
        <span className="text-green-400">{'"Node.js"'}</span>,{" "}
        <span className="text-green-400">{'"PostgreSQL"'}</span>,{" "}
        <span className="text-green-400">{'"Pinecone"'}</span>]{"\n        "}
        <span className="text-orange-400">self</span>.
        <span className="text-zinc-300">ai_ml</span>{" "}
        <span className="text-cyan-400">=</span> [
        <span className="text-green-400">{'"PyTorch"'}</span>,{" "}
        <span className="text-green-400">{'"TensorFlow"'}</span>,{" "}
        <span className="text-green-400">{'"Pandas"'}</span>]{"\n        "}
        <span className="text-orange-400">self</span>.
        <span className="text-zinc-300">cloud</span>{" "}
        <span className="text-cyan-400">=</span> [
        <span className="text-green-400">{'"GCP"'}</span>,{" "}
        <span className="text-green-400">{'"Firebase"'}</span>,{" "}
        <span className="text-green-400">{'"Docker"'}</span>]
      </code>
    ),
  },
  {
    id: "contact",
    name: "contact.json",
    icon: FileJson,
    color: "text-green-400",
    content: (
      <code className="text-zinc-300">
        {"{"}
        {"\n  "}
        <span className="text-blue-300">{'"email"'}</span>
        <span className="text-zinc-400">: </span>
        <span className="text-green-400">
          {'"adiytasinghrajput755@gmail.com"'}
        </span>
        ,{"\n  "}
        <span className="text-blue-300">{'"github"'}</span>
        <span className="text-zinc-400">: </span>
        <span className="text-green-400">{'"github.com/singhaditya73"'}</span>,
        {"\n  "}
        <span className="text-blue-300">{'"linkedin"'}</span>
        <span className="text-zinc-400">: </span>
        <span className="text-green-400">
          {'"linkedin.com/in/aditya-singh73"'}
        </span>
        {"\n"}
        {"}"}
      </code>
    ),
  },
];

export function TerminalDisplay() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="my-8 mt-2 w-full overflow-hidden rounded-xl border border-edge bg-[#0d1117] font-mono text-sm shadow-2xl">
      {/* Mac Header & Tabs */}
      <div className="flex flex-col items-start border-b border-edge bg-[#161b22] sm:flex-row sm:items-center">
        <div className="flex shrink-0 gap-2 px-4 py-3 sm:py-0">
          <div className="h-3 w-3 rounded-full bg-red-500/90" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/90" />
          <div className="h-3 w-3 rounded-full bg-green-500/90" />
        </div>

        <div className="scrollbar-none flex w-full overflow-x-auto">
          {TABS.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={cn(
                "flex items-center gap-2 border-r border-edge px-4 py-2.5 text-xs transition-colors",
                activeTab === idx
                  ? "bg-[#0d1117] text-zinc-100"
                  : "bg-transparent text-zinc-500 hover:bg-zinc-800/50 hover:text-zinc-300"
              )}
            >
              <tab.icon className={cn("h-3.5 w-3.5", tab.color)} />
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="overflow-x-auto p-4 sm:p-6">
        <pre className="m-0 text-[13px] leading-relaxed sm:text-sm">
          {TABS[activeTab].content}
        </pre>
      </div>
    </div>
  );
}
