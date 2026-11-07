import React from 'react';

export default function Projects() {
  const list = [
    {
      title: "Academic Document Request System",
      desc: "Automated student record requesting platform with registrar management.",
      tech: "React, Laravel, PostgreSQL",
    },
    {
      title: "Custom Metal Keychain & Print Order System",
      desc: "Turn your photos into memories.",
      tech: "React, Vite, Node.js",
    },
  ];

  return (
    <section>
      <h2 style={{ fontSize: '1.8rem', color: '#f8fafc', marginBottom: '20px' }}>Projects</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {list.map((proj, idx) => (
          <div key={idx} style={{ backgroundColor: '#1e293b', padding: '20px', borderRadius: '8px', border: '1px solid #334155' }}>
            <h3 style={{ margin: '0 0 8px 0', color: '#38bdf8' }}>{proj.title}</h3>
            <p style={{ color: '#94a3b8', margin: '0 0 12px 0' }}>{proj.desc}</p>
            <span style={{ fontSize: '0.8rem', color: '#cbd5e1', backgroundColor: '#0f172a', padding: '4px 8px', borderRadius: '4px' }}>
              {proj.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}