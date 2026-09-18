'use client';

import { useState } from 'react';
import { siteConfig } from '@/data/site';
import { Mail, Copy, Check, Sparkles, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  onSuccessSound?: () => void;
}

export function ContactSection({ onSuccessSound }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    onSuccessSound?.();

    // Trigger subtle confetti burst
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#38bdf8', '#34d399', '#f8fafc']
      });
    } catch {
      // ignore
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-[#0f121d] to-[#07080c] p-8 sm:p-12 lg:p-16 shadow-2xl text-center">
          <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] h-[150px] bg-sky-500/10 blur-[90px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3.5 py-1 text-xs font-mono text-sky-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>COMMUNICATION CHANNEL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Let&apos;s build something exceptional.
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Have an architectural idea, a product vision, or want to collaborate on reliable software systems? Reach out directly.
            </p>

            {/* Email Bar with 1-Click Copy */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-black/60 px-5 py-3 text-sm font-mono text-zinc-200 shadow-inner">
                <Mail className="h-4 w-4 text-sky-400" />
                <span>{siteConfig.email}</span>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-sky-500 px-6 py-3 font-mono text-xs font-bold text-black hover:bg-sky-400 transition-all shadow-lg shadow-sky-500/20"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-950" />
                    <span>EMAIL COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>COPY EMAIL</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Social / Platform Links */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-xs text-zinc-300 hover:border-white/20 hover:text-white transition-colors"
              >
                <Send className="h-3.5 w-3.5 text-sky-400" />
                <span>SEND EMAIL</span>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-xs text-zinc-300 hover:border-white/20 hover:text-white transition-colors"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GITHUB</span>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-xs text-zinc-300 hover:border-white/20 hover:text-white transition-colors"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-sky-400" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.brand} — {siteConfig.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>FULLSTACK DEVELOPER</span>
            <span>•</span>
            <span>FPT POLYTECHNIC 12/2023</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
