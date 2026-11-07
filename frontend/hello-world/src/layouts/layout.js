import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <nav style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer style={{ marginTop: '30px', color: '#888' }}>
        <p>&copy; 2026 Portfolio</p>
      </footer>
    </div>
  );
}