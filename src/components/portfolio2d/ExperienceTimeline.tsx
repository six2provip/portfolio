'use client';

import { experiences } from '@/data/experience';
import { Briefcase, GraduationCap, Calendar, CheckCircle } from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest">
            <Briefcase className="h-4 w-4" />
            <span>BACKGROUND &amp; TIMELINE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Experience &amp; Education
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl">
            A chronological timeline of software development milestones, project engineering, and academic background.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/15 pl-6 sm:pl-10 space-y-12 max-w-3xl">
          {experiences.map((item) => {
            const isEducation = item.type === 'EDUCATION';
            const Icon = isEducation ? GraduationCap : Briefcase;

            return (
              <div key={item.id} className="relative group">
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-white/20 bg-[#07080c] transition-colors ${
                    isEducation
                      ? 'text-emerald-400 group-hover:border-emerald-400'
                      : 'text-sky-400 group-hover:border-sky-400'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>

                {/* Timeline content card */}
                <div className="rounded-2xl border border-white/10 bg-[#0d0f17] p-6 shadow-xl transition-all duration-300 hover:border-white/20 hover:bg-[#111420]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-sky-400">
                      {item.period}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${
                        isEducation
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-400/20'
                          : 'bg-white/5 text-zinc-400 border border-white/10'
                      }`}
                    >
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>

                  <div className="text-xs sm:text-sm font-mono text-zinc-400 mt-0.5">
                    {item.organization}
                  </div>

                  <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </p>

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-black/40 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
