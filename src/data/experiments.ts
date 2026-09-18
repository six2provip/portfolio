import { Experiment } from '@/types';

export const experiments: Experiment[] = [
  {
    id: 'exp-mcp-protocol',
    title: 'Model Context Protocol (MCP) Bridge',
    category: 'AI / AGENT TOOLS',
    description:
      'Prototyping local MCP server connectors in TypeScript and Python to safely expose local file systems and database schemas to AI agent runtimes.',
    technologies: ['MCP', 'TypeScript', 'FastAPI', 'JSON-RPC'],
    status: 'IN PROGRESS',
    date: '2024'
  },
  {
    id: 'exp-local-llm',
    title: 'Local LLM Inference Sandbox',
    category: 'LOCAL AI / RUNTIMES',
    description:
      'Benchmarking quantized small language models (Llama 3, Mistral, Qwen) using Ollama and WebGPU local inference for offline code reasoning.',
    technologies: ['Ollama', 'Python', 'WebGPU', 'Hugging Face'],
    status: 'PROTOTYPE',
    date: '2024'
  },
  {
    id: 'exp-threejs-shaders',
    title: 'Procedural Shader Atmospheres',
    category: '3D / WEBGL',
    description:
      'Custom Three.js GLSL shaders experimenting with raymarched volumetric fog, cyber-grid projections, and noise-driven terrain contours.',
    technologies: ['Three.js', 'GLSL', 'WebGL', 'React Three Fiber'],
    status: 'EXPERIMENT',
    date: '2024'
  },
  {
    id: 'exp-realtime-ws',
    title: 'High-Throughput WebSocket Hub',
    category: 'REALTIME / NETWORKING',
    description:
      'Low-overhead event broadcast daemon testing concurrent socket subscriptions, backpressure handling, and heartbeat reconnect strategies.',
    technologies: ['FastAPI', 'Node.js', 'WebSocket', 'Redis Pub/Sub'],
    status: 'PROTOTYPE',
    date: '2024'
  },
  {
    id: 'exp-ai-coding-flow',
    title: 'Autonomous Code-Diff Pipeline',
    category: 'AI CODING',
    description:
      'CLI tool that parses git staged diffs, generates semantic commit messages, and drafts self-contained pull request walkthroughs.',
    technologies: ['TypeScript', 'Git CLI', 'Node.js', 'LLMs'],
    status: 'SHIPPED',
    date: '2024'
  },
  {
    id: 'exp-spatial-nodes',
    title: 'Spatial Knowledge Graph Visualizer',
    category: '3D MAPS / DATA VIZ',
    description:
      'Force-directed 3D node network rendered in WebGL that clusters project dependencies and skill connections dynamically in space.',
    technologies: ['Three.js', 'D3-force-3d', 'Canvas', 'WebGL'],
    status: 'EXPERIMENT',
    date: '2023'
  }
];
