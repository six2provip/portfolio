import { ImageResponse } from 'next/og';

export const alt = 'KHANG.OS — Nguyễn Gia Khang | Fullstack Developer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#07080c',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '70px 80px',
          fontFamily: 'sans-serif',
          border: '16px solid #101422',
        }}
      >
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                backgroundColor: '#38bdf8',
                marginRight: '14px',
              }}
            />
            <span
              style={{
                color: '#f8fafc',
                fontSize: '24px',
                fontWeight: 'bold',
                letterSpacing: '4px',
              }}
            >
              KHANG.OS
            </span>
          </div>

          <span
            style={{
              color: '#38bdf8',
              fontSize: '16px',
              letterSpacing: '2px',
              fontFamily: 'monospace',
            }}
          >
            DIGITAL STUDIO // ONLINE
          </span>
        </div>

        {/* Center Title */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              color: '#38bdf8',
              fontSize: '22px',
              fontWeight: 600,
              letterSpacing: '3px',
              marginBottom: '16px',
              fontFamily: 'monospace',
            }}
          >
            FULLSTACK DEVELOPER
          </span>
          <span
            style={{
              color: '#ffffff',
              fontSize: '64px',
              fontWeight: 900,
              letterSpacing: '-1px',
              lineHeight: 1.1,
              marginBottom: '20px',
            }}
          >
            NGUYỄN GIA KHANG
          </span>
          <span
            style={{
              color: '#94a3b8',
              fontSize: '24px',
              maxWidth: '850px',
              lineHeight: 1.4,
            }}
          >
            Building systems, products and digital experiences with Python, FastAPI, React, Next.js, and AI.
          </span>
        </div>

        {/* Bottom Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            {['SYSTEMS', 'ENTERPRISE ERP', 'AI AGENTS', '3D WEBGL'].map((tag) => (
              <div
                key={tag}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  color: '#cbd5e1',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          <span
            style={{
              color: '#34d399',
              fontSize: '16px',
              fontFamily: 'monospace',
            }}
          >
            FPT POLYTECHNIC 12/2023
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
