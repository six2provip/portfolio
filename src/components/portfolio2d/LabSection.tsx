'use client';

import { experiments } from '@/data/experiments';
import { FlaskConical, Cpu, Radio, Sparkles, Binary } from 'lucide-react';

export function LabSection() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'SHIPPED':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-400/30';
      case 'IN PROGRESS':
        return 'bg-sky-500/10 text-sky-400 border-sky-400/30';
      case 'PROTOTYPE':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-400/30';
      case 'EXPERIMENT':
      default:
        return 'bg-purple-500/10 text-purple-400 border-purple-400/30';
    }
  };

  return (
    <section id="lab" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-indigo-400 uppercase tracking-widest">
            <FlaskConical className="h-4 w-4" />
            <span>THE LAB // EXPERIMENTS & PROTOTYPES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Explorations & Technical R&amp;D
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl">
            Active research in AI protocols, Model Context Protocol (MCP), quantized local LLMs, WebGL graphics, and realtime networking.
          </p>
        </div>

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col justify-between rounded-2xl border border-indigo-500/20 bg-[#0c0d16] p-6 shadow-xl transition-all duration-300 hover:border-indigo-400/50 hover:bg-[#111320]"
            >
              <div className="space-y-4">
                {/* Header: Category & Status */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                    {exp.category}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${getStatusBadge(
                      exp.status
                    )}`}
                  >
                    {exp.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold tracking-tight text-white">
                  {exp.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-indigo-950/40 border border-indigo-500/20 px-2 py-0.5 font-mono text-[10px] text-indigo-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
