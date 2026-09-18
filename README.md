# KHANG.OS — Autonomous 3D Personal Brand Portfolio

> **Digital Studio & Systems Engineering Portfolio for Nguyễn Gia Khang**  
> *Fullstack Developer • Builder • Creator*

---

## 1. Overview

**KHANG.OS** is an autonomous, high-performance 3D developer portfolio engineered with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Three.js**, and **React Three Fiber** (`@react-three/fiber` & `@react-three/drei`).

The platform provides two coordinated experiences:
1. **Interactive 3D Spatial Studio**: A cohesive developer studio environment with 5 interconnected architectural zones:
   - **Entry Portal**: Glowing gateway with brand telemetry and interactive beacon.
   - **Workspace**: Developer desk with ultrawide curved monitor rendering an interactive live IDE canvas.
   - **The Lab**: Experimental research pod with floating holographic wireframe polyhedra and orbit rings.
   - **Gaming Battlestation**: Tactical dual-monitor gaming setup for League of Legends (Top Lane) & Valorant (Entry Fragger).
   - **About Gallery**: Holographic pedestal displaying verified background, education (FPT Polytechnic 12/2023), and timeline.
2. **Accessible 2D Interface**: A fast, high-density, accessible interface featuring category-filtered projects, experimental lab cards, skill matrix, chronological milestones, and 1-click email copy with procedural sound feedback.

---

## 2. Technology Stack

- **Framework**: Next.js (App Router, Turbopack)
- **UI Runtime**: React 19 & TypeScript
- **Styling**: Tailwind CSS with custom HSL design tokens and glassmorphism panels
- **3D Engine**: Three.js, `@react-three/fiber`, `@react-three/drei`
- **Audio Engine**: Web Audio API procedural synthesis (zero external audio file dependencies)
- **Icons & Effects**: `lucide-react`, `canvas-confetti`
- **Deployment**: Vercel ready (static and serverless compatible)

---

## 3. Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm 9+

### Installation
```bash
# Clone or navigate to the repository
cd portfolio

# Install dependencies
npm install
```

### Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 4. Production Build & Deployment

### Production Build
```bash
npm run build
```

### Running Production Server
```bash
npm run start
```

### Vercel Deployment
The project is 100% self-contained and ready for zero-config deployment on Vercel:
1. Push this repository to GitHub/GitLab.
2. Import the repository into the [Vercel Dashboard](https://vercel.com).
3. The build command (`npm run build`) and output directory (`.next`) are detected automatically.
4. No external database or paid API keys are required.

---

## 5. Data Architecture & Customization

All portfolio content is structured and separated from the UI layer in `src/data/`:

| File | Purpose |
|---|---|
| `src/data/site.ts` | Brand name, aliases, bio, contact email, social links |
| `src/data/projects.ts` | Project items, tech badges, features, links, categories |
| `src/data/experiments.ts` | Lab research items, statuses (EXPERIMENT, PROTOTYPE, IN PROGRESS, SHIPPED) |
| `src/data/skills.ts` | Categorized tech matrix (Backend, Frontend, Database, Infrastructure, AI) |
| `src/data/experience.ts` | Chronological education & milestones (FPT Polytechnic 12/2023) |
| `src/data/gaming.ts` | Battlestation telemetry, role cards, tactical preferences |

### How to Add a New Project
Edit `src/data/projects.ts` and append an entry to the `projects` array:

```ts
{
  id: 'my-new-system',
  title: 'NextGen Inventory Engine',
  category: 'ERP', // 'ERP' | 'PRODUCT' | 'AI' | '3D' | 'TOOLS'
  categoryLabel: 'ENTERPRISE ERP',
  tagline: 'High-throughput inventory sync and queue worker',
  description: 'Scalable service processing warehouse stock events with sub-second latency.',
  year: '2025',
  role: 'Lead Architect',
  technologies: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
  features: [
    'Sub-millisecond Redis locking for stock integrity',
    'Asynchronous webhook dispatchers'
  ],
  demoUrl: 'https://demo.example.com',
  githubUrl: 'https://github.com/nguyengiakhang/inventory-engine',
  featured: true
}
```

The new project will automatically appear in both the **3D Studio Monitor**, the **2D Filterable Showcase**, and the **CMD+K Command Palette**.

---

## 6. 3D Asset & Scene Customization

3D components are organized modularly in `src/components/3d/`:
- `zones/StudioFloor.tsx`: Floor planes, lighting guides, boundaries.
- `zones/WorkspaceZone.tsx`: Developer desk, curved monitor with interactive IDE canvas, task lamp, office chair.
- `zones/LabZone.tsx`: Floating holographic icosahedron, orbiting rings, satellite nodes.
- `zones/GamingZone.tsx`: Dual-monitor battlestation with tactical radar texture.
- `zones/AboutZone.tsx`: Gallery pedestal and holographic ID slate.
- `effects/DustParticles.tsx`: Ambient floating studio particles.
- `effects/StudioLighting.tsx`: Architectural spotlights, ambient fill, and zone accent lights.

*Note: The 3D studio uses procedural Three.js geometry and canvas textures, eliminating bulky GLB downloads and ensuring instant loading and 60 FPS performance.*

---

## 7. Performance & Graphics Quality Presets

The application includes an adaptive graphics manager with 3 presets:

- **LOW**: 1x DPR, shadow maps disabled, 40 particles, antialias off (ideal for mobile or power-saving mode).
- **MEDIUM**: 1.5x DPR, soft shadow maps, 100 particles, antialias on.
- **HIGH**: Up to 2x DPR, high-res shadow maps, 200 particles, full post-processing.

Quality is automatically estimated on first load based on hardware concurrency and device memory, and can be manually switched at any time via the top HUD.

---

## 8. Keyboard Controls & Shortcuts

| Shortcut | Action |
|---|---|
| `CMD + K` / `CTRL + K` | Open global command palette & search |
| `W A S D` / `Arrow Keys` | Free camera exploration in studio |
| `Shift` + `WASD` | Fast camera sprint |
| `ESC` | Close active modal, drawer, or command palette |
| `3D / 2D` Toggle | Switch seamlessly between spatial studio and direct accessible layout |

---

## 9. License

Personal portfolio and brand identity for **Nguyễn Gia Khang**. All rights reserved.
