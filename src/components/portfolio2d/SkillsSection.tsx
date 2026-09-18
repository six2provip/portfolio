'use client';

import { useState } from 'react';
import { skillGroups } from '@/data/skills';
import { Terminal, Server, Layout, Database, Wrench, Bot } from 'lucide-react';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'BACKEND':
        return Server;
      case 'FRONTEND':
        return Layout;
      case 'DATABASE':
        return Database;
      case 'INFRASTRUCTURE':
        return Wrench;
      case 'AI':
      default:
        return Bot;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-widest">
            <Terminal className="h-4 w-4" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Architecture &amp; Skills Matrix
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl">
            Clean categorization of verified frameworks, protocols, databases, and tooling without fabricated proficiency percentages.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const Icon = getCategoryIcon(group.category);
            const isHovered = activeCategory === group.category;

            return (
              <div
                key={group.category}
                onMouseEnter={() => setActiveCategory(group.category)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`flex flex-col justify-between rounded-2xl border bg-[#0d0f17] p-6 shadow-xl transition-all duration-300 ${
                  isHovered
                    ? 'border-emerald-400/40 bg-[#121622] -translate-y-1'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-400/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-mono text-sm font-bold tracking-wider text-white">
                        {group.category}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {group.skills.length} CORE TECHNOLOGIES
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                    {group.description}
                  </p>

                  <div className="space-y-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/item flex items-center justify-between rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-xs transition-colors hover:border-white/15 hover:bg-white/10"
                      >
                        <span className="font-mono font-medium text-zinc-200 group-hover/item:text-emerald-300 transition-colors">
                          {skill.name}
                        </span>
                        {skill.note && (
                          <span className="text-[10px] font-mono text-zinc-500 text-right truncate max-w-[150px]">
                            {skill.note}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
