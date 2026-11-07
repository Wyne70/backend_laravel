// src/layouts/MainLayout.js
import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.js';

export default function MainLayout() {
  const { colors, isDark, toggleTheme } = useTheme();

  const getNavStyle = ({ isActive }) => ({
    color: isActive ? colors.accent : colors.textSecondary,
    textDecoration: 'none',
    fontWeight: isActive ? '700' : '500',
    fontSize: '0.95rem',
  });

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.bg,
        color: colors.textPrimary,
        fontFamily: 'system-ui, -apple-system, sans-serif',
        transition: 'background-color 0.2s ease, color 0.2s ease',
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 32px',
          borderBottom: `1px solid ${colors.border}`,
          backgroundColor: colors.headerBg,
        }}
      >
        <Link
          to="/"
          style={{
            fontSize: '1.3rem',
            fontWeight: '800',
            color: colors.textPrimary,
            textDecoration: 'none',
          }}
        >
          <span style={{ color: colors.accent }}>E</span>B
        </Link>

        <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <NavLink to="/" style={getNavStyle} end>
            Home
          </NavLink>
          <NavLink to="/projects" style={getNavStyle}>
            Projects
          </NavLink>
          <NavLink to="/contact" style={getNavStyle}>
            Contact
          </NavLink>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: colors.surface,
              color: colors.textPrimary,
              border: `1px solid ${colors.border}`,
              borderRadius: '6px',
              padding: '8px 14px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.85rem',
            }}
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>

          <Link
            to="/contact"
            style={{
              backgroundColor: colors.accent,
              color: '#0f172a',
              padding: '8px 16px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '0.85rem',
            }}
          >
            Contact Me
          </Link>
        </div>
      </header>

      <main
        style={{
          flex: 1,
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Outlet />
      </main>

      <footer
        style={{
          textAlign: 'center',
          padding: '20px',
          borderTop: `1px solid ${colors.border}`,
          backgroundColor: colors.headerBg,
          color: colors.textSecondary,
          fontSize: '0.85rem',
        }}
      >
        &copy; {new Date().getFullYear()} Built with React & Vite.
      </footer>
    </div>
  );
}