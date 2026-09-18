import { GamingProfile } from '@/types';

export const gamingProfile: GamingProfile = {
  title: 'BATTLESTATION & GAMING',
  tagline: 'Tactical focus, competitive strategy, and high-intensity reflexes',
  games: [
    {
      name: 'League of Legends',
      role: 'Top Lane',
      favoriteCharacters: ['Aatrox', 'Renekton', 'Jax'],
      description:
        'Solo lane dominance, wave management, wave push pacing, and split-push pressure in team skirmishes.',
      badge: 'TOP LANE MAIN'
    },
    {
      name: 'Valorant',
      role: 'Entry Fragger',
      favoriteCharacters: ['Jett', 'Reyna', 'Omen'],
      description:
        'First contact engagement, fast site clearing, crosshair placement, and high-impact momentum rounds.',
      badge: 'DUELIST / ENTRY'
    }
  ]
};
