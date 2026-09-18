'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/data/site';
import { experiences } from '@/data/experience';
import { skillGroups } from '@/data/skills';
import { X, FileText, Download, CheckCircle, GraduationCap, Briefcase } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 flex flex-col w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0d0f17] shadow-2xl text-white">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#0d0f17]/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <FileText className="h-5 w-5 text-sky-400" />
            <h2 className="font-mono text-sm font-bold tracking-wider text-white uppercase">
              CURRICULUM VITAE // {siteConfig.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Identity Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              {siteConfig.name}
            </h1>
            <p className="text-sm font-mono text-sky-400 mt-1">
              {siteConfig.role}
            </p>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              {siteConfig.bio}
            </p>
          </div>

          {/* Education Verified */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-emerald-400 uppercase">
              <GraduationCap className="h-4 w-4" />
              <span>EDUCATION</span>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-sm">FPT Polytechnic</span>
                <span className="font-mono text-xs text-emerald-400">GRADUATED 12/2023</span>
              </div>
              <p className="text-xs text-zinc-300 mt-1">
                Software Engineering Major
              </p>
            </div>
          </div>

          {/* Key Milestones & Engineering Focus */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase">
              <Briefcase className="h-4 w-4" />
              <span>CORE EXPERIENCE & MILESTONES</span>
            </div>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <div key={exp.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{exp.role}</span>
                    <span className="font-mono text-[11px] text-zinc-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-sky-300/80 font-mono mt-0.5">
                    {exp.organization}
                  </div>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.technologies.map((t) => (
                        <span key={t} className="rounded bg-white/5 px-2 py-0.5 text-[10px] font-mono text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono tracking-wider text-zinc-400 uppercase">
              TECHNICAL PROFICIENCY
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skillGroups.map((group) => (
                <div key={group.category} className="rounded-xl border border-white/5 bg-white/5 p-3">
                  <span className="text-xs font-mono font-bold text-sky-400 block mb-1.5">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {group.skills.map((s) => (
                      <span key={s.name} className="text-[11px] font-mono text-zinc-300 bg-black/40 px-1.5 py-0.5 rounded">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PDF Download Placeholder / Notice */}
          <div className="rounded-xl border border-dashed border-white/20 bg-sky-500/5 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-zinc-300 font-bold block">
                PDF RESUME DOWNLOAD
              </span>
              <span className="text-xs text-zinc-400">
                Print-ready PDF version is updated regularly.
              </span>
            </div>
            <a
              href={`mailto:${siteConfig.email}?subject=Requesting Resume PDF for Nguyen Gia Khang`}
              className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-xs font-mono font-bold text-white hover:bg-white/20 transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span>REQUEST DIRECT PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
