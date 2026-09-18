'use client';

import { useState, useEffect, useRef } from 'react';
import { siteConfig } from '@/data/site';
import { projects } from '@/data/projects';
import { skillGroups } from '@/data/skills';
import { ZoneId } from '@/types';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';

interface QuakeTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateZone: (zone: ZoneId) => void;
}

interface LogEntry {
  type: 'input' | 'output' | 'error' | 'system';
  text: string;
}

export function QuakeTerminal({ isOpen, onClose, onNavigateZone }: QuakeTerminalProps) {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<LogEntry[]>([
    { type: 'system', text: `KHANG.OS [Version 2.4.0-PROD]` },
    { type: 'system', text: `Logged in as khang (Nguyễn Gia Khang // Six2)` },
    { type: 'system', text: `Type 'help' to inspect available system commands.` },
    { type: 'system', text: `--------------------------------------------------` }
  ]);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState<number>(-1);
  const [isMaximized, setIsMaximized] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  // Auto scroll to bottom of terminal
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    // Add to history
    setHistory((prev) => [...prev, cmd]);
    setHistoryIdx(-1);

    // Log user input
    setLogs((prev) => [...prev, { type: 'input', text: `khang@os:~$ ${cmd}` }]);

    const parts = cmd.split(' ');
    const command = parts[0].toLowerCase();
    const arg = parts[1]?.toLowerCase();

    switch (command) {
      case 'help':
        setLogs((prev) => [
          ...prev,
          {
            type: 'output',
            text: [
              'AVAILABLE COMMANDS:',
              '  whoami       - Display personal and brand identity',
              '  skills       - Print categorized engineering matrix',
              '  projects     - List verified systems and repository links',
              '  goto <zone>  - Move 3D camera (entry, workspace, lab, gaming, about)',
              '  cat resume   - Print education and timeline summary',
              '  github       - Open GitHub profile (https://github.com/six2provip)',
              '  clear        - Clear console screen',
              '  matrix       - Toggle green matrix phosphor display',
              '  exit         - Close terminal session'
            ].join('\n')
          }
        ]);
        break;

      case 'whoami':
        setLogs((prev) => [
          ...prev,
          {
            type: 'output',
            text: [
              `NAME:       ${siteConfig.name}`,
              `HANDLE:     ${siteConfig.handle} (also known as: ${siteConfig.aliases.join(', ')})`,
              `ROLE:       ${siteConfig.role}`,
              `LOCATION:   ${siteConfig.location}`,
              `GITHUB:     ${siteConfig.github}`,
              `EMAIL:      ${siteConfig.email}`,
              `STATUS:     ${siteConfig.status}`
            ].join('\n')
          }
        ]);
        break;

      case 'skills':
        setLogs((prev) => [
          ...prev,
          {
            type: 'output',
            text: skillGroups
              .map(
                (g) =>
                  `[${g.category}]\n  ` +
                  g.skills.map((s) => s.name).join(' • ')
              )
              .join('\n\n')
          }
        ]);
        break;

      case 'projects':
        setLogs((prev) => [
          ...prev,
          {
            type: 'output',
            text: projects
              .map(
                (p, i) =>
                  `${i + 1}. ${p.title} [${p.category}]\n   Stack: ${p.technologies.join(', ')}\n   Repo: ${p.githubUrl}`
              )
              .join('\n\n')
          }
        ]);
        break;

      case 'goto':
        if (!arg) {
          setLogs((prev) => [
            ...prev,
            { type: 'error', text: 'Usage: goto <entry | workspace | lab | gaming | about>' }
          ]);
        } else if (['entry', 'workspace', 'lab', 'gaming', 'about'].includes(arg)) {
          onNavigateZone(arg as ZoneId);
          setLogs((prev) => [
            ...prev,
            { type: 'output', text: `>> Repositioning 3D camera coordinates to: ${arg.toUpperCase()}` }
          ]);
        } else {
          setLogs((prev) => [
            ...prev,
            { type: 'error', text: `Invalid zone: "${arg}". Options: entry, workspace, lab, gaming, about.` }
          ]);
        }
        break;

      case 'cat':
        if (arg === 'resume' || arg === 'resume.txt' || arg === 'cv') {
          setLogs((prev) => [
            ...prev,
            {
              type: 'output',
              text: [
                '=== NGUYỄN GIA KHANG — CURRICULUM VITAE ===',
                'EDUCATION:   FPT Polytechnic (Graduated 12/2023)',
                'MAJOR:       Software Engineering',
                'SPECIALTY:   Python, FastAPI, Next.js, React, MongoDB, Three.js, Docker',
                'FOCUS:       Building high-reliability ERP platforms & interactive digital products.',
                'CV FILE:     Download direct PDF from CV button or /resume.pdf'
              ].join('\n')
            }
          ]);
        } else {
          setLogs((prev) => [
            ...prev,
            { type: 'error', text: `cat: ${arg || 'file'}: No such file. Try 'cat resume'.` }
          ]);
        }
        break;

      case 'github':
        if (typeof window !== 'undefined') {
          window.open(siteConfig.github, '_blank');
        }
        setLogs((prev) => [
          ...prev,
          { type: 'output', text: `Opening ${siteConfig.github} in new tab...` }
        ]);
        break;

      case 'clear':
        setLogs([]);
        break;

      case 'exit':
      case 'quit':
        onClose();
        break;

      case 'matrix':
        setLogs((prev) => [
          ...prev,
          {
            type: 'system',
            text: 'Wake up, Neo...\nThe Matrix has you.\nFollow the white rabbit.'
          }
        ]);
        break;

      default:
        setLogs((prev) => [
          ...prev,
          { type: 'error', text: `Command not found: "${command}". Type "help" for list of commands.` }
        ]);
        break;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInputVal(history[nextIdx] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx !== -1) {
        const nextIdx = historyIdx + 1;
        if (nextIdx >= history.length) {
          setHistoryIdx(-1);
          setInputVal('');
        } else {
          setHistoryIdx(nextIdx);
          setInputVal(history[nextIdx] || '');
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // Simple autocomplete
      const available = ['help', 'whoami', 'skills', 'projects', 'goto workspace', 'goto lab', 'goto gaming', 'goto about', 'cat resume', 'github', 'clear', 'exit'];
      const match = available.find((c) => c.startsWith(inputVal.trim()));
      if (match) setInputVal(match);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-in slide-in-from-top-4 duration-200">
      <div
        className={`mx-auto border-b border-sky-400/30 bg-[#07090f]/95 shadow-2xl backdrop-blur-2xl flex flex-col font-mono text-xs transition-all ${
          isMaximized ? 'h-[85vh]' : 'h-[50vh] sm:h-[45vh]'
        }`}
      >
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-black/60 select-none">
          <div className="flex items-center gap-2">
            <TerminalIcon className="h-4 w-4 text-sky-400" />
            <span className="font-bold text-zinc-200 tracking-wider">
              KHANG.OS // QUAKE CLI
            </span>
            <span className="hidden sm:inline text-[10px] text-zinc-500 border-l border-white/10 pl-2">
              BASH TERMINAL
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-zinc-500 hidden sm:inline">
              HOTKEY: ` (BACKTICK)
            </span>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 text-zinc-400 hover:text-white rounded hover:bg-white/10"
              title="Toggle Fullscreen"
            >
              {isMaximized ? <Minimize2 className="h-3.5 w-3.5" /> : <Maximize2 className="h-3.5 w-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 text-zinc-400 hover:text-white rounded hover:bg-white/10"
              title="Close Terminal (Esc or `)"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Terminal Log Output Area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-2 text-zinc-300 select-text scanlines"
        >
          {logs.map((log, index) => (
            <div key={index} className="leading-relaxed">
              {log.type === 'input' && (
                <span className="text-sky-400 font-semibold">{log.text}</span>
              )}
              {log.type === 'output' && (
                <pre className="text-zinc-200 font-mono whitespace-pre-wrap">{log.text}</pre>
              )}
              {log.type === 'error' && (
                <span className="text-rose-400">{log.text}</span>
              )}
              {log.type === 'system' && (
                <span className="text-emerald-400/90">{log.text}</span>
              )}
            </div>
          ))}
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2 border-t border-white/10 bg-black/40 px-4 py-2.5">
          <span className="text-sky-400 font-bold whitespace-nowrap">
            khang@os:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'skills', 'projects', 'goto lab', etc."
            className="flex-1 bg-transparent text-white font-mono outline-none text-xs placeholder:text-zinc-600"
            autoFocus
          />
          <CornerDownLeft className="h-3.5 w-3.5 text-zinc-500" />
        </div>
      </div>
    </div>
  );
}
