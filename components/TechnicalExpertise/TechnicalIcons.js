import React from 'react';

export const TechIcon = ({ name, className = '' }) => {
  switch (name) {
    // Category Header Icons
    case 'code':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case 'server':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="2" y="3" width="20" height="7" rx="2" />
          <rect x="2" y="14" width="20" height="7" rx="2" />
          <line x1="6" y1="6.5" x2="6.01" y2="6.5" strokeWidth="3" />
          <line x1="10" y1="6.5" x2="10.01" y2="6.5" strokeWidth="3" />
          <line x1="6" y1="17.5" x2="6.01" y2="17.5" strokeWidth="3" />
          <line x1="10" y1="17.5" x2="10.01" y2="17.5" strokeWidth="3" />
        </svg>
      );
    case 'database':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
    case 'robot':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="8.5" cy="16" r="1.5" fill="currentColor" />
          <circle cx="15.5" cy="16" r="1.5" fill="currentColor" />
          <path d="M12 2v4" />
          <path d="M9 2h6" />
          <path d="M2 15h1" />
          <path d="M21 15h1" />
        </svg>
      );
    case 'wrench':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );

    // 1. Frontend Skills
    case 'react':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <circle cx="12" cy="12" r="2.2" fill="#00d8ff" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#00d8ff" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" stroke="#00d8ff" strokeWidth="1.5" />
        </svg>
      );
    case 'nextjs':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <circle cx="12" cy="12" r="11" fill="#000000" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8" />
          <path d="M7.5 7.5v9h2v-5.2l5.5 5.2h1.5v-9h-2v5.2L9 7.5H7.5z" fill="#ffffff" />
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
          <path d="M7 17.5c.8.6 1.8.8 2.6.4.8-.4 1.2-1.3 1.2-2.8V9H9.2v6c0 .7-.3 1-.7 1.1-.3 0-.7-.1-1-.3l-.5 1.7zm6.7-.1c1 .6 2.2.7 3.2.3.9-.4 1.4-1.2 1.4-2.1 0-1.1-.7-1.8-1.9-2.2l-.7-.3c-.7-.3-.9-.6-.9-1 0-.4.3-.8.9-.8.6 0 1.2.2 1.7.5l.5-1.5c-.7-.4-1.5-.5-2.2-.5-1 0-1.8.3-2.3.8-.5.5-.8 1.2-.8 2 0 1.2.8 1.9 1.8 2.3l.7.3c.7.3 1 .6 1 1 0 .5-.4.8-1 .8-.7 0-1.5-.3-2-.7l-.5 1.6z" fill="#000000" />
        </svg>
      );
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M2.5 2l1.7 18.5 7.8 2.2 7.8-2.2L21.5 2H2.5z" fill="#E34F26" />
          <path d="M12 3.6v17.4l6.4-1.8 1.4-15.6H12z" fill="#EF652A" />
          <path d="M12 7.7H7.4l.2 2.6H12v-2.6zm0 5.2h-2.2l-.2-1.9h2.4v-2.6H6.9l.7 7.1H12v-2.6zm0 5.2l-3.3-.9-.2-2.3H6.2l.4 4.5 5.4 1.5v-2.8z" fill="#EBEBEB" />
          <path d="M12 7.7h4.6l-.4 5.2H12v2.6h3.9l-.4 4.3-3.5 1v2.8l5.4-1.5 1-11.8H12v-2.6z" fill="#FFFFFF" />
        </svg>
      );
    case 'css3':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M2.5 2l1.7 18.5 7.8 2.2 7.8-2.2L21.5 2H2.5z" fill="#1572B6" />
          <path d="M12 3.6v17.4l6.4-1.8 1.4-15.6H12z" fill="#33A9DC" />
          <path d="M12 7.7H7.4l.2 2.6H12v-2.6zm0 5.2h-2.2l-.2-1.9h2.4v-2.6H6.9l.7 7.1H12v-2.6zm0 5.2l-3.3-.9-.2-2.3H6.2l.4 4.5 5.4 1.5v-2.8z" fill="#EBEBEB" />
          <path d="M12 7.7h4.6l-.4 5.2H12v2.6h3.9l-.4 4.3-3.5 1v2.8l5.4-1.5 1-11.8H12v-2.6z" fill="#FFFFFF" />
        </svg>
      );
    case 'bootstrap':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <rect width="24" height="24" rx="4.5" fill="#7952B3" />
          <path d="M7.5 6.5h4.6c1.8 0 2.9.8 2.9 2.1 0 1-.6 1.7-1.5 2 1.2.3 1.9 1.1 1.9 2.3 0 1.5-1.2 2.6-3.2 2.6H7.5V6.5zm2.3 3.6h2c.7 0 1.1-.3 1.1-.9 0-.6-.4-.9-1.1-.9H9.8v1.8zm0 3.6h2.2c.8 0 1.3-.4 1.3-1 0-.6-.5-1-1.3-1H9.8v2z" fill="#FFFFFF" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case 'responsive':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
        </svg>
      );

    // 2. Backend Skills
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M12 2l9 5.2v10.4L12 22.8 3 17.6V7.2L12 2z" fill="#539E43" />
          <path d="M12 5.5l6.2 3.6v7.2L12 19.9l-6.2-3.6V9.1L12 5.5z" fill="#2B2B2B" />
          <path d="M9.8 15.5V8.5l4.4 7V8.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'express':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <rect width="24" height="24" rx="4" fill="#000000" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
          <text x="3.5" y="16.5" fill="#FFFFFF" fontFamily="system-ui, -apple-system, Arial, sans-serif" fontWeight="bold" fontSize="13px" letterSpacing="-0.5px">ex</text>
        </svg>
      );
    case 'restapi':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5" cy="6" r="3" />
          <circle cx="5" cy="18" r="3" />
          <circle cx="19" cy="12" r="3" />
          <path d="M8 6h3a3 3 0 0 1 3 3v3m0 0v3a3 3 0 0 1-3 3H8" />
        </svg>
      );
    case 'jwt':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="7.5" cy="15.5" r="4.5" />
          <path d="m11 12 8.5-8.5" />
          <path d="M16 4.5l3 3" />
          <path d="M18.5 7l2-2" />
        </svg>
      );
    case 'api':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 10h-2.5a2.5 2.5 0 0 0-2.5 2.5v0a2.5 2.5 0 0 0 2.5 2.5H18" />
          <path d="M6 14h2.5A2.5 2.5 0 0 0 11 11.5v0A2.5 2.5 0 0 0 8.5 9H6" />
          <path d="M3 11.5h3m12 0h3" />
        </svg>
      );

    // 3. Database Skills
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M12 2C11.5 2.5 7 7.5 7 13c0 4.5 3.5 7.8 5 8.5 1.5-.7 5-4 5-8.5 0-5.5-4.5-10.5-5-11z" fill="#47A248" />
          <path d="M12 2.5v19c-.3-.2-5-3.3-5-8.5 0-5.2 4.7-10.1 5-10.5z" fill="#3FA037" />
          <path d="M12 22.5c-.3.5-.8 1-.8 1.5.8-.3 1.3-.9 1.6-1.5h-.8z" fill="#7F7F7F" />
        </svg>
      );
    case 'mysql':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <circle cx="12" cy="12" r="11" fill="#00758F" />
          <path d="M6.5 14c2-4 6-6 10-4.5-1.5.5-2.5 1.8-2.5 3 2-.5 3.5-.2 4.5 1-2.5 2-6.5 1.5-8.5.5l-3.5 0z" fill="#F29111" />
          <circle cx="14.5" cy="10" r="1.2" fill="#FFFFFF" />
        </svg>
      );
    case 'supabase':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M13.4 22.4c-.6.8-1.9.4-1.9-.6V13H3.6c-.9 0-1.4-1-.8-1.7L12 .9c.6-.8 1.9-.4 1.9.6V11h8.1c.9 0 1.4 1 .8 1.7l-9.4 9.7z" fill="#3ECF8E" />
        </svg>
      );

    // 4. CMS Skills
    case 'wordpress':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <circle cx="12" cy="12" r="11" fill="#21759B" />
          <path d="M3.2 12c0 3.9 2.5 7.2 6 8.4L4.8 8.8C3.8 9.7 3.2 10.8 3.2 12zm14.1-.3c0-1.4-.5-2.3-1-3.1-.6-.9-1.2-1.7-1.2-2.6 0-1 .8-1.9 1.9-1.9.1 0 .2 0 .3.02C15.6 3.4 13.9 3 12 3c-3 0-5.7 1.4-7.4 3.7.3.01.6.02.8.02 1.3 0 3.3-.2 3.3-.2.7-.04.8.9.1 1 0 0-.7.08-1.5.12l4.7 13.9 2.8-8.4-2-5.5c-.7-.04-1.4-.12-1.4-.12-.7-.05-.6-1 .1-1 0 0 2.1.2 3.3.2 1.3 0 3.3-.2 3.3-.2.7-.04.8.9.1 1 0 0-.7.08-1.5.12l4.6 13.7c1.7-1.7 2.7-4 2.7-6.5zm-8.3 8.3l-3.3-9.5 3.3 9.5zm6.8-.7c-.3-1-.8-2.6-1.5-4.8l2.1 5.9c-.2-.4-.4-.8-.6-1.1z" fill="#FFFFFF" />
        </svg>
      );
    case 'woocommerce':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <rect width="24" height="20" y="2" rx="4.5" fill="#96588A" />
          <text x="3.2" y="14.8" fill="#FFFFFF" fontFamily="system-ui, -apple-system, Arial, sans-serif" fontWeight="bold" fontSize="9px" letterSpacing="-0.5px">Woo</text>
        </svg>
      );
    case 'php':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <ellipse cx="12" cy="12" rx="11" ry="7.5" fill="#777BB4" />
          <text x="3.6" y="15.2" fill="#FFFFFF" fontFamily="system-ui, -apple-system, Arial, sans-serif" fontWeight="bold" fontSize="9.5px">php</text>
        </svg>
      );
    case 'elementor':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <circle cx="12" cy="12" r="11" fill="#D63384" />
          <path d="M8 7v10m4-10v10m4-10v3.5m0 3v3.5" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case 'plugin':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4m0 12v4M2 12h4m12 0h4" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );

    // 5. AI Tools Skills
    case 'chatgpt':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <circle cx="12" cy="12" r="11" fill="#10A37F" />
          <path d="M12 5.5a3 3 0 0 1 2.8 2l.3.9 1.8.3a3 3 0 0 1 2.4 3.4l-.3.9.8 1.6a3 3 0 0 1-1.3 4l-.9.4v1.8a3 3 0 0 1-3.6 2.3l-.9-.3-1.6.8a3 3 0 0 1-4-1.3l-.4-.9-1.8-.3a3 3 0 0 1-2.4-3.4l.3-.9-.8-1.6a3 3 0 0 1 1.3-4l.9-.4V7a3 3 0 0 1 3.6-2.3l.9.3L12 5.5z" stroke="#FFFFFF" strokeWidth="1.3" fill="none" />
        </svg>
      );
    case 'codex':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <rect width="24" height="24" rx="4" fill="#6366F1" />
          <path d="m8 9-3 3 3 3m8-6 3 3-3 3m-5 1 2-8" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'figma':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#F24E1E" />
          <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262" />
          <path d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#A259FF" />
          <circle cx="14.5" cy="9.5" r="2.5" fill="#1ABCFE" />
          <path d="M8 12h4v5a2.5 2.5 0 1 1-4-2.5V12z" fill="#0ACF83" />
        </svg>
      );
    case 'antigravity':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
          <rect x="3" y="6" width="18" height="14" rx="4" fill="#3B82F6" />
          <circle cx="8.5" cy="12" r="2" fill="#FFFFFF" />
          <circle cx="15.5" cy="12" r="2" fill="#FFFFFF" />
          <path d="M12 2v4M8 2h8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
          <line x1="8.5" y1="16" x2="15.5" y2="16" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'prompt':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="#F43F5E">
          <path d="M12 2l1.8 5.7L19.5 9.5l-5.7 1.8L12 17l-1.8-5.7L4.5 9.5l5.7-1.8L12 2z" />
          <circle cx="19" cy="19" r="2.5" fill="#FB7185" />
          <circle cx="5" cy="18" r="1.8" fill="#FDA4AF" />
        </svg>
      );
    case 'aiassisted':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="12" r="3" fill="#A855F7" />
          <circle cx="18" cy="6" r="3" fill="#A855F7" />
          <circle cx="18" cy="18" r="3" fill="#A855F7" />
          <path d="M8.7 10.7l6.6-3.4m-6.6 6.1l6.6 3.4" />
        </svg>
      );

    // 6. Tools Skills
    case 'git':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <rect width="17" height="17" x="3.5" y="3.5" rx="3" transform="rotate(45 12 12)" fill="#F05032" />
          <circle cx="9" cy="15" r="1.8" fill="#FFFFFF" />
          <circle cx="15" cy="9" r="1.8" fill="#FFFFFF" />
          <circle cx="9" cy="9" r="1.8" fill="#FFFFFF" />
          <path d="M9 10.8V13.2M10.5 9.5l3.2-0.2" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" className="tp-theme-adaptive-icon">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill="currentColor" />
        </svg>
      );
    case 'postman':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <circle cx="12" cy="12" r="11" fill="#FF6C37" />
          <path d="M13.5 4.5l5 7.5-5 7.5-3-3 2-4.5-2.5-1.5z" fill="#FFFFFF" opacity="0.4" />
          <circle cx="12" cy="9.5" r="2.8" fill="#FFFFFF" />
          <path d="M7 16.5c0-2.8 2.5-4.5 5-4.5s5 1.7 5 4.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'vscode':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <path d="M18.5 2.2l-9.8 8.8L3.5 7.2 2 8.4l4.5 3.6-4.5 3.6 1.5 1.2 5.2-3.8 9.8 8.8 3.5-1.6V3.8l-3.5-1.6z" fill="#007ACC" />
          <path d="M18.5 2.2l-9.8 8.8 9.8 9.2V2.2z" fill="#1F9CF0" />
          <path d="M22 3.8l-3.5-1.6v19.6l3.5-1.6V3.8z" fill="#0065A9" />
        </svg>
      );
    case 'xampp':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <rect width="24" height="24" rx="4.5" fill="#FB7A24" />
          <path d="M5.5 5.5l13 13M18.5 5.5L5.5 18.5" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <rect x="8.5" y="8.5" width="7" height="7" rx="1.5" fill="#FB7A24" stroke="#FFFFFF" strokeWidth="1.8" />
        </svg>
      );
    case 'vercel':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" className="tp-theme-adaptive-icon">
          <path d="M12 3L22 20H2L12 3z" fill="currentColor" />
        </svg>
      );
    case 'netlify':
      return (
        <svg viewBox="0 0 24 24" width="22" height="22">
          <circle cx="12" cy="12" r="11" fill="#00C7B7" />
          <path d="M12 4l6 8-6 8-6-8 6-8z" fill="#FFFFFF" />
          <circle cx="12" cy="12" r="2.5" fill="#00C7B7" />
        </svg>
      );

    default:
      return null;
  }
};
