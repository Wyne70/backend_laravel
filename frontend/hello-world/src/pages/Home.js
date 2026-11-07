import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#f8fafc', marginBottom: '16px' }}>
        Welcome to My Portfolio
      </h1>
      <h1> Erwyne Pogi
        
      </h1>
      <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto 30px' }}>
        This application demonstrates a clean parent-child layout routing architecture in React using JavaScript files.
      </p>
      <Link
        to="/projects"
        style={{
          backgroundColor: '#f838f8',
          color: '#0f172a',
          padding: '10px 20px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: '600',
        }}
      >
        View Projects &rarr;
      </Link>
    </section>
  );
}