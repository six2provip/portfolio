'use client';

import { useState } from 'react';
import { Check, Copy, Code, KeyRound, RefreshCw, AlertCircle } from 'lucide-react';

export function DeveloperToolboxLive() {
  const [activeTab, setActiveTab] = useState<'json' | 'jwt'>('json');

  // JSON state
  const [jsonInput, setJsonInput] = useState<string>(
    JSON.stringify(
      {
        developer: 'Nguyễn Gia Khang',
        brand: 'KHANG.OS',
        stack: ['Python', 'FastAPI', 'React', 'Next.js', 'Docker', 'MongoDB'],
        status: 'ONLINE'
      },
      null,
      2
    )
  );
  const [jsonOutput, setJsonOutput] = useState<string>('');
  const [jsonError, setJsonError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // JWT state
  const [jwtInput, setJwtInput] = useState<string>(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJraGFuZy5vcyIsIm5hbWUiOiJOZ3V54buFbiBHaWEgS2hhbmciLCJyb2xlIjoiRnVsbHN0YWNrIERldmVsb3BlciIsImV4cCI6MTgwMDAwMDAwMH0.signature'
  );
  const [jwtPayload, setJwtPayload] = useState<string>('');
  const [jwtError, setJwtError] = useState<string | null>(null);

  const formatJSON = (indent: number) => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonOutput(JSON.stringify(parsed, null, indent));
      setJsonError(null);
    } catch (err) {
      setJsonError((err as Error).message);
    }
  };

  const decodeJWT = () => {
    try {
      const parts = jwtInput.trim().split('.');
      if (parts.length < 2) throw new Error('Invalid JWT format (must have 3 parts separated by dots)');
      const payloadDecoded = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));
      setJwtPayload(JSON.stringify(JSON.parse(payloadDecoded), null, 2));
      setJwtError(null);
    } catch (err) {
      setJwtError((err as Error).message);
      setJwtPayload('');
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-white/10 bg-[#090b12] p-4 text-xs font-mono">
      {/* Sub Tabs */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('json')}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors ${
              activeTab === 'json'
                ? 'bg-sky-500/20 text-sky-400 border border-sky-400/30'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <Code className="h-3.5 w-3.5" />
            <span>JSON FORMATTER</span>
          </button>

          <button
            onClick={() => {
              setActiveTab('jwt');
              decodeJWT();
            }}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors ${
              activeTab === 'jwt'
                ? 'bg-amber-500/20 text-amber-400 border border-amber-400/30'
                : 'text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <KeyRound className="h-3.5 w-3.5" />
            <span>JWT INSPECTOR</span>
          </button>
        </div>

        <span className="text-[10px] text-zinc-500">
          LIVE CLIENT-SIDE UTILITY
        </span>
      </div>

      {activeTab === 'json' ? (
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <div className="text-zinc-400 text-[10px] mb-1">INPUT RAW JSON:</div>
              <textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                rows={6}
                className="w-full rounded-lg border border-white/10 bg-black/50 p-2.5 text-zinc-200 outline-none focus:border-sky-400/50 resize-none font-mono text-[11px]"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-zinc-400 text-[10px] mb-1">
                <span>FORMATTED OUTPUT:</span>
                {jsonOutput && (
                  <button
                    onClick={() => handleCopy(jsonOutput)}
                    className="text-sky-400 hover:underline flex items-center gap-1"
                  >
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span>{copied ? 'COPIED' : 'COPY'}</span>
                  </button>
                )}
              </div>
              <textarea
                value={jsonOutput || (jsonError ? `Error: ${jsonError}` : 'Click Format below to run...')}
                readOnly
                rows={6}
                className={`w-full rounded-lg border bg-black/50 p-2.5 outline-none resize-none font-mono text-[11px] ${
                  jsonError ? 'text-rose-400 border-rose-500/30' : 'text-emerald-300 border-white/10'
                }`}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => formatJSON(2)}
              className="rounded-lg bg-sky-500/20 border border-sky-400/40 px-3 py-1.5 text-sky-300 hover:bg-sky-500/30 transition-colors"
            >
              PRETTIFY (2 SPACES)
            </button>
            <button
              onClick={() => formatJSON(0)}
              className="rounded-lg bg-white/5 border border-white/10 px-3 py-1.5 text-zinc-300 hover:bg-white/10 transition-colors"
            >
              MINIFY
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div>
            <div className="text-zinc-400 text-[10px] mb-1">PASTE JWT TOKEN:</div>
            <textarea
              value={jwtInput}
              onChange={(e) => setJwtInput(e.target.value)}
              rows={3}
              className="w-full rounded-lg border border-white/10 bg-black/50 p-2.5 text-zinc-200 outline-none focus:border-amber-400/50 resize-none font-mono text-[11px]"
            />
          </div>

          <button
            onClick={decodeJWT}
            className="rounded-lg bg-amber-500/20 border border-amber-400/40 px-3 py-1.5 text-amber-300 hover:bg-amber-500/30 transition-colors"
          >
            DECODE PAYLOAD
          </button>

          <div>
            <div className="text-zinc-400 text-[10px] mb-1">DECODED PAYLOAD:</div>
            <pre className="rounded-lg border border-white/10 bg-black/50 p-3 text-emerald-300 text-[11px] overflow-x-auto">
              {jwtPayload || (jwtError ? `Error: ${jwtError}` : 'Click Decode above...')}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
