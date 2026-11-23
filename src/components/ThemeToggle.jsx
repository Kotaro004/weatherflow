import React from 'react';
export default function ThemeToggle({theme,onToggle}) {
  const label = theme === 'system' ? 'Tema automático' : theme === 'dark' ? 'Modo oscuro' : 'Modo claro';
  return <button className="theme-toggle" onClick={onToggle} aria-label={label + '; cambiar tema'} title={label}>{theme === 'system' ? '◐' : theme === 'dark' ? '☼' : '☾'}</button>;
}