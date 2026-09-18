'use client';

import { Project } from '@/types';
import { DeveloperToolboxLive } from '../tools/DeveloperToolboxLive';
import {
  Layers,
  Activity,
  Server,
  MessageSquare,
  Sparkles,
  MapPin,
  CheckCircle2,
  TrendingUp,
  ShieldAlert,
  Cpu
} from 'lucide-react';

interface ProjectPreviewMockupProps {
  project: Project;
}

export function ProjectPreviewMockup({ project }: ProjectPreviewMockupProps) {
  // If it's developer toolbox, render the actual working interactive tool!
  if (project.id === 'developer-toolbox') {
    return <DeveloperToolboxLive />;
  }

  // 1. Dashboard SmartRetail Mockup
  if (project.id === 'smart-retail') {
    return (
      <div className="rounded-xl border border-white/10 bg-[#0a0d16] p-4 text-xs font-mono space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-sky-400 font-bold">
            <Activity className="h-4 w-4" />
            <span>SMARTRETAIL // TELEMETRY HUB</span>
          </div>
          <span className="rounded bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] text-emerald-400">
            WEBSOCKET SYNC: ACTIVE
          </span>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="rounded-lg border border-white/5 bg-white/5 p-2.5">
            <span className="text-[10px] text-zinc-400 block">TOTAL ORDERS (TODAY)</span>
            <span className="text-base font-bold text-white mt-1 block">1,428</span>
            <span className="text-[10px] text-emerald-400 flex items-center gap-0.5 mt-0.5">
              <TrendingUp className="h-3 w-3" /> +14.2%
            </span>
          </div>
          <div className="rounded-lg border border-white/5 bg-white/5 p-2.5">
            <span className="text-[10px] text-zinc-400 block">INVENTORY HEALTH</span>
            <span className="text-base font-bold text-sky-400 mt-1 block">99.4%</span>
            <span className="text-[10px] text-zinc-500 mt-0.5 block">6 Branches synced</span>
          </div>
          <div className="rounded-lg border border-white/5 bg-white/5 p-2.5">
            <span className="text-[10px] text-zinc-400 block">RBAC ENFORCEMENT</span>
            <span className="text-base font-bold text-emerald-400 mt-1 block">SECURE</span>
            <span className="text-[10px] text-zinc-500 mt-0.5 block">JWT + Scope ACL</span>
          </div>
        </div>

        {/* Live Event Stream */}
        <div className="rounded-lg border border-white/5 bg-black/40 p-3 space-y-1.5 text-[11px]">
          <div className="text-zinc-500 text-[10px]">// RECENT REALTIME POS EVENTS</div>
          <div className="flex justify-between text-zinc-300">
            <span className="text-sky-300">[19:28:12] Branch-01: Order #4810 Completed</span>
            <span className="text-emerald-400">Inventory -3</span>
          </div>
          <div className="flex justify-between text-zinc-300">
            <span className="text-sky-300">[19:28:44] Branch-03: Stock Alert: SKU-8821</span>
            <span className="text-amber-400">Restock Queued</span>
          </div>
        </div>
      </div>
    );
  }

  // 2. ERP / Business Management Mockup
  if (project.id === 'erp-business') {
    return (
      <div className="rounded-xl border border-white/10 bg-[#090e14] p-4 text-xs font-mono space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold">
            <Server className="h-4 w-4" />
            <span>ENTERPRISE ORCHESTRATOR // FASTAPI GATEWAY</span>
          </div>
          <span className="text-[10px] text-zinc-400">WORKERS: 12 CONCURRENT</span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-[11px]">
          <div className="rounded-lg border border-white/5 bg-white/5 p-3 space-y-2">
            <span className="font-bold text-zinc-200 block">CORE PIPELINES:</span>
            <div className="flex items-center justify-between text-zinc-400">
              <span>Invoice Generation Pipeline</span>
              <span className="text-emerald-400">0.04s avg</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>Audit Logging &amp; Hash Chain</span>
              <span className="text-emerald-400">Active</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>PostgreSQL Read Replica</span>
              <span className="text-sky-400">Latency: 2ms</span>
            </div>
          </div>

          <div className="rounded-lg border border-white/5 bg-white/5 p-3 space-y-2">
            <span className="font-bold text-zinc-200 block">ASYNCHRONOUS QUEUES:</span>
            <div className="flex items-center justify-between text-zinc-400">
              <span>Redis Task Queue</span>
              <span className="text-emerald-400">0 pending</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>Scheduled Payroll Dispatch</span>
              <span className="text-zinc-300">CRON Ready</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>Containerized Nodes</span>
              <span className="text-sky-400">Docker Swarm</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. Pulse Social Platform Mockup
  if (project.id === 'pulse-social') {
    return (
      <div className="rounded-xl border border-white/10 bg-[#0c0d18] p-4 text-xs font-mono space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2 text-indigo-400 font-bold">
            <MessageSquare className="h-4 w-4" />
            <span>#engineering-channel // PULSE</span>
          </div>
          <span className="text-[10px] text-emerald-400 flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            18 DEVELOPERS ONLINE
          </span>
        </div>

        {/* Chat Thread */}
        <div className="space-y-2 text-[11px]">
          <div className="rounded-lg bg-white/5 p-2.5">
            <div className="flex justify-between text-zinc-400 text-[10px] mb-1">
              <span className="font-bold text-sky-400">khang.dev (Six2)</span>
              <span>19:27:04</span>
            </div>
            <p className="text-zinc-200">
              WebSocket multiplexer deployed to production. Latency is sub-20ms worldwide.
            </p>
          </div>

          <div className="rounded-lg bg-indigo-950/20 border border-indigo-500/20 p-2.5">
            <div className="flex justify-between text-zinc-400 text-[10px] mb-1">
              <span className="font-bold text-indigo-400">Alex_Architect</span>
              <span>19:27:32</span>
            </div>
            <p className="text-zinc-200">
              Tested markdown previews and live channel presence updates. Looks buttery smooth!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // 4. AI Developer Platform Mockup
  if (project.id === 'ai-dev-platform') {
    return (
      <div className="rounded-xl border border-white/10 bg-[#120a10] p-4 text-xs font-mono space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2 text-rose-400 font-bold">
            <Sparkles className="h-4 w-4" />
            <span>AI AGENT DIFF PIPELINE // LOCAL LLM</span>
          </div>
          <span className="rounded bg-rose-500/10 border border-rose-500/30 px-2 py-0.5 text-[10px] text-rose-300">
            MODEL: OLLAMA / CODE-LLAMA-7B
          </span>
        </div>

        <div className="rounded-lg bg-black/60 p-3 space-y-2 text-[11px]">
          <div className="text-zinc-400">// REPOSITORY VECTOR CONTEXT LOADED</div>
          <div className="text-emerald-400">
            + export async function verifyAST(node: ASTNode) &#123;
          </div>
          <div className="text-emerald-400">
            +   return SemanticValidator.assertSecurityPolicy(node);
          </div>
          <div className="text-emerald-400">+ &#125;</div>
          <div className="text-zinc-400 text-[10px] pt-1">
            LLM REASONING: &ldquo;Refactored AST validation to prevent unsafe eval execution. Test coverage: 100%.&rdquo;
          </div>
        </div>
      </div>
    );
  }

  // 5. Interactive 3D Map Mockup
  if (project.id === 'interactive-3d-map') {
    return (
      <div className="rounded-xl border border-white/10 bg-[#080d16] p-4 text-xs font-mono space-y-3">
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2 text-sky-400 font-bold">
            <MapPin className="h-4 w-4" />
            <span>GEOSPATIAL TOPOGRAPHY // WEBGL 60FPS</span>
          </div>
          <span className="text-[10px] text-zinc-400">SHADERS: GLSL NOISE V3</span>
        </div>

        <div className="rounded-lg bg-black/60 p-3 text-[11px] grid grid-cols-2 gap-2">
          <div>
            <span className="text-zinc-500 text-[10px]">COORDINATES:</span>
            <div className="text-sky-300 font-bold">LAT 10.762622, LNG 106.660172</div>
          </div>
          <div>
            <span className="text-zinc-500 text-[10px]">TERRAIN MESH:</span>
            <div className="text-emerald-400 font-bold">LOD 4 • 65,536 Vertices</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-center">
      <Layers className="h-8 w-8 text-sky-400 mx-auto mb-2" />
      <span className="text-xs text-zinc-300">{project.description}</span>
    </div>
  );
}
