'use client';

import { Project } from '@/types';
import { HeroSection } from './HeroSection';
import { ProjectsSection } from './ProjectsSection';
import { LabSection } from './LabSection';
import { GamingSection } from './GamingSection';
import { SkillsSection } from './SkillsSection';
import { ExperienceTimeline } from './ExperienceTimeline';
import { ContactSection } from './ContactSection';

interface Portfolio2DProps {
  onSwitchTo3D: () => void;
  onSelectProject: (project: Project) => void;
  onOpenResume: () => void;
  onSuccessSound?: () => void;
}

export function Portfolio2D({
  onSwitchTo3D,
  onSelectProject,
  onOpenResume,
  onSuccessSound
}: Portfolio2DProps) {
  return (
    <div className="relative min-h-screen bg-[#07080c] text-white">
      <HeroSection
        onSwitchTo3D={onSwitchTo3D}
        onOpenProjects={() => {
          const el = document.getElementById('projects');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenResume={onOpenResume}
      />

      <ProjectsSection onSelectProject={onSelectProject} />

      <LabSection />

      <GamingSection />

      <SkillsSection />

      <ExperienceTimeline />

      <ContactSection onSuccessSound={onSuccessSound} />
    </div>
  );
}
