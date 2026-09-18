'use client';

import { siteConfig } from '@/data/site';
import { ArrowRight, Sparkles, Layers, FileText, Code2, Terminal } from 'lucide-react';

import { Language, translations } from '@/data/i18n';

interface HeroSectionProps {
  onSwitchTo3D: () => void;
  onOpenProjects: () => void;
  onOpenResume: () => void;
  lang?: Language;
}

export function HeroSection({ onSwitchTo3D, onOpenProjects, onOpenResume, lang = 'en' }: HeroSectionProps) {
  const t = translations[lang];
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column: Bio & Identity */}
          <div className="w-full lg:max-w-2xl space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-400/30 bg-sky-400/10 px-3.5 py-1.5 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider text-sky-300 uppercase">
                {t.hero.status}
              </span>
            </div>

            {/* Display Name & Brand */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase">
                  {siteConfig.brand}
                </span>
                <span className="h-1 w-1 rounded-full bg-zinc-600" />
                <span className="font-mono text-xs text-zinc-400 tracking-wider">
                  VIETNAM
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {siteConfig.name}
              </h1>
              <p className="text-lg sm:text-xl font-mono font-medium text-sky-400">
                {t.hero.role}
              </p>
              <p className="text-xs sm:text-sm font-mono tracking-widest text-zinc-400 uppercase">
                {t.hero.tagline}
              </p>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
              {t.hero.bio}
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Python', 'FastAPI', 'React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'WebSocket', 'AI'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <button
                onClick={onSwitchTo3D}
                className="flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 font-mono text-xs font-bold text-black hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
              >
                <Sparkles className="h-4 w-4" />
                <span>{t.hero.enter3d}</span>
              </button>

              <button
                onClick={onOpenProjects}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-mono text-xs font-bold text-white hover:border-white/30 hover:bg-white/10 transition-all"
              >
                <Layers className="h-4 w-4" />
                <span>{t.hero.exploreProjects}</span>
              </button>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-3 font-mono text-xs text-zinc-400 hover:text-white hover:border-white/20 transition-all"
              >
                <FileText className="h-4 w-4" />
                <span>{t.hero.viewCv}</span>
              </button>
            </div>
          </div>

          {/* Right Column: High-tech Terminal Spec Card */}
          <div className="w-full lg:max-w-md">
            <div className="rounded-2xl border border-white/15 bg-[#0e1017] p-5 shadow-2xl font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-zinc-400 ml-1 font-bold">{t.hero.telemetryTitle}</span>
                </div>
                <span className="text-[10px] text-sky-400">STATUS: ACTIVE</span>
              </div>

              <div className="space-y-2 text-zinc-300">
                <div className="flex justify-between">
                  <span className="text-zinc-500">{t.hero.archTitle}</span>
                  <span className="text-sky-400">KHANG.OS v2.4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">PRIMARY ROLE:</span>
                  <span className="text-emerald-400">{t.hero.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">EDUCATION:</span>
                  <span className="text-zinc-300">{t.hero.education}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">GRADUATION:</span>
                  <span className="text-zinc-300">{t.hero.graduation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">GAMING FOCUS:</span>
                  <span className="text-rose-400">LOL TOP • VALORANT ENTRY</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 space-y-1.5 text-[11px] text-zinc-400">
                <div className="text-zinc-500">// CURRENT RUNTIME MOTTO</div>
                <div className="text-sky-300 italic">
                  &ldquo;{t.hero.motto}&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
