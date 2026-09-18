'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/data/site';
import { experiences } from '@/data/experience';
import { skillGroups } from '@/data/skills';
import { 
  X, 
  FileText, 
  Download, 
  GraduationCap, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

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

      <div className="relative z-10 flex flex-col w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0d0f17] shadow-2xl text-white">
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
          <div className="border-b border-white/10 pb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {siteConfig.name}
                </h1>
                <p className="text-sm font-mono text-sky-400 mt-1 font-semibold">
                  {siteConfig.role}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download="NguyenGiaKhang-CV-BE.pdf"
                  className="flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-xs font-mono font-bold text-black hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>DOWNLOAD CV (PDF)</span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-mono text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>PREVIEW</span>
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pt-1">
              {siteConfig.bio}
            </p>

            {/* Verified Contact Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
              {siteConfig.phone && (
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-300 hover:text-sky-400 hover:border-sky-400/40 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-sky-400" />
                  <span>{siteConfig.phone}</span>
                </a>
              )}
              {siteConfig.email && (
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-300 hover:text-sky-400 hover:border-sky-400/40 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-sky-400" />
                  <span>{siteConfig.email}</span>
                </a>
              )}
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-300">
                <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                <span>{siteConfig.location}</span>
              </span>
              {siteConfig.linkedin && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-300 hover:text-sky-400 hover:border-sky-400/40 transition-colors"
                >
                  <LinkedinIcon className="h-3.5 w-3.5 text-sky-400" />
                  <span>LinkedIn</span>
                </a>
              )}
              {siteConfig.github && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-300 hover:text-white hover:border-white/30 transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5 text-zinc-300" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
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
                <span className="font-mono text-xs text-emerald-400">08/2021 — 12/2023</span>
              </div>
              <p className="text-xs text-zinc-300 mt-1">
                Software Development Major (Graduated 12/2023)
              </p>
            </div>
          </div>

          {/* Key Milestones & Engineering Focus */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-sky-400 uppercase">
              <Briefcase className="h-4 w-4" />
              <span>WORK EXPERIENCE</span>
            </div>
            <div className="space-y-3">
              {experiences.map((exp) => (
                <div key={exp.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{exp.role}</span>
                    <span className="font-mono text-[11px] text-sky-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-zinc-300 font-mono mt-0.5">
                    {exp.organization}
                  </div>
                  <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.technologies.map((t) => (
                        <span key={t} className="rounded bg-black/40 px-2 py-0.5 text-[10px] font-mono text-zinc-300">
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

          {/* Direct Download Banner */}
          <div className="rounded-xl border border-dashed border-sky-400/30 bg-sky-500/5 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs text-sky-400 font-bold block">
                AUTHENTIC CV ATTACHMENT
              </span>
              <span className="text-xs text-zinc-400">
                Download NguyenGiaKhang-CV-BE.pdf directly for full offline review.
              </span>
            </div>
            <a
              href="/resume.pdf"
              download="NguyenGiaKhang-CV-BE.pdf"
              className="flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-xs font-mono font-bold text-black hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
            >
              <Download className="h-3.5 w-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
