'use client';

import { useEffect } from 'react';
import { Project } from '@/types';
import { X, ExternalLink, CheckCircle2, Terminal, Layers, ArrowLeft } from 'lucide-react';
import { GithubIcon } from '@/components/ui/Icons';
import { ProjectPreviewMockup } from '@/components/projects/ProjectPreviewMockup';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 flex flex-col w-full max-w-3xl max-h-[92vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0d0f17] shadow-2xl text-white">
        {/* Top Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#0d0f17]/95 px-6 py-4 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-sky-500/10 px-2.5 py-0.5 text-xs font-mono font-medium text-sky-400 border border-sky-400/20">
              {project.categoryLabel}
            </span>
            {project.year && (
              <span className="font-mono text-xs text-zinc-400">
                {project.year}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Close (Esc)"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-7">
          {/* Project Title & Tagline */}
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-base text-sky-300/90 font-mono text-sm">
              {project.tagline}
            </p>
          </div>

          {/* High-Fidelity Interactive Project Mockup */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              SYSTEM DEMO &amp; TELEMETRY
            </h3>
            <ProjectPreviewMockup project={project} />
          </div>

          {/* Description Section */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              OVERVIEW
            </h3>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Role Section */}
          {project.role && (
            <div className="border-t border-white/10 pt-5 space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                ROLE
              </h3>
              <p className="text-white font-medium text-sm">
                {project.role}
              </p>
            </div>
          )}

          {/* Technologies Section */}
          <div className="border-t border-white/10 pt-5 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
              TECHNOLOGIES
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-zinc-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features Checklist */}
          {project.features && project.features.length > 0 && (
            <div className="border-t border-white/10 pt-5 space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-zinc-400">
                CORE FEATURES
              </h3>
              <ul className="space-y-2.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action CTAs */}
          <div className="border-t border-white/10 pt-6 flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-xs font-mono font-bold text-black hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/20"
              >
                <ExternalLink className="h-4 w-4" />
                <span>LIVE DEMO</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-mono font-bold text-zinc-200 hover:border-white/30 hover:text-white transition-colors"
              >
                <GithubIcon className="h-4 w-4" />
                <span>VIEW CODE (GITHUB)</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="ml-auto rounded-xl px-4 py-2.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
            >
              CLOSE (ESC)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
