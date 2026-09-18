'use client';

import { gamingProfile } from '@/data/gaming';
import { Gamepad2, Shield, Target, Crosshair, Swords } from 'lucide-react';

export function GamingSection() {
  return (
    <section id="gaming" className="py-20 md:py-28 border-b border-white/10 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-rose-400 uppercase tracking-widest">
            <Gamepad2 className="h-4 w-4" />
            <span>{gamingProfile.title}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Competitive Instincts &amp; Focus
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl">
            {gamingProfile.tagline}
          </p>
        </div>

        {/* Gaming Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gamingProfile.games.map((game) => {
            const isLoL = game.name.includes('League');
            const Icon = isLoL ? Swords : Crosshair;

            return (
              <div
                key={game.name}
                className="relative overflow-hidden rounded-2xl border border-rose-500/20 bg-gradient-to-br from-[#120d14] to-[#0a080d] p-6 md:p-8 shadow-xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {game.name}
                      </h3>
                      <span className="text-xs font-mono text-rose-400 font-semibold">
                        {game.role}
                      </span>
                    </div>
                  </div>

                  <span className="rounded-full bg-rose-500/15 border border-rose-500/30 px-3 py-1 font-mono text-[10px] font-bold text-rose-300">
                    {game.badge}
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                  {game.description}
                </p>

                {game.favoriteCharacters && (
                  <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                    <span className="font-mono text-xs text-zinc-500">FAVORITES:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {game.favoriteCharacters.map((char) => (
                        <span
                          key={char}
                          className="rounded bg-black/40 border border-white/5 px-2 py-0.5 font-mono text-xs text-zinc-300"
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
