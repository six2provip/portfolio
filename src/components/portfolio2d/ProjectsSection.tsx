'use client';

import { useState, useMemo } from 'react';
import { projects, projectCategories } from '@/data/projects';
import { Project } from '@/types';
import { ArrowUpRight, Layers } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'ALL') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest">
              <Layers className="h-4 w-4" />
              <span>PROJECT SHOWCASE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Selected Works & Systems
            </h2>
            <p className="text-sm md:text-base text-zinc-400 max-w-xl">
              Real-world systems, enterprise ERP dashboards, AI architectures, and interactive 3D WebGL applications.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-3.5 py-1.5 font-mono text-xs font-medium tracking-wider transition-all ${
                  activeCategory === cat.id
                    ? 'bg-sky-500 text-black font-bold shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0e1017] p-6 shadow-xl transition-all duration-300 hover:border-sky-400/40 hover:bg-[#131622] hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Category & Year Header */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/5 px-2.5 py-0.5 font-mono text-[10px] font-medium tracking-wider text-sky-400 border border-white/5">
                    {project.categoryLabel}
                  </span>
                  {project.year && (
                    <span className="font-mono text-xs text-zinc-500">
                      {project.year}
                    </span>
                  )}
                </div>

                {/* Project Title & Tagline */}
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-sky-400 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-zinc-500 group-hover:text-sky-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-1 text-xs font-mono text-zinc-400 leading-relaxed line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Technologies & Footer */}
              <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded bg-black/40 px-2 py-0.5 font-mono text-[10px] text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="rounded bg-black/40 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-mono text-sky-400">
                  <span>INSPECT SPEC & DEMO</span>
                  <span className="text-zinc-500 group-hover:text-sky-400">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
