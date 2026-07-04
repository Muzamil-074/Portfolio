import React, { useState } from 'react';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { skills } from '../data/portfolioData';
import { Skill } from '../types';

const SKILL_THEME: Record<string, {
  gradient: string;
  glow: string;
  bgGlow: string;
  badge: string;
  text: string;
  icon: React.ReactNode;
}> = {
  html: {
    gradient: 'from-orange-600 to-amber-500',
    glow: 'group-hover:shadow-orange-500/20 dark:group-hover:shadow-orange-500/10',
    bgGlow: 'bg-orange-500/5 text-orange-500 dark:bg-orange-500/10',
    badge: 'bg-orange-500/5 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 border border-orange-500/10',
    text: 'text-orange-500',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M1.5 0h21l-1.9 21.56L12 24l-8.6-2.44L1.5 0zm14.8 5.5H7.72l.24 2.72h8.1l-.28 3.12H8.2l.18 2.11H13.6l-.3 3.09-2.3.62-2.3-.62-.15-1.72H6.5l.28 3.12 5.22 1.45 5.22-1.45.72-8.11.23-2.61.12-1.72z" />
      </svg>
    )
  },
  css: {
    gradient: 'from-blue-600 to-cyan-500',
    glow: 'group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-500/10',
    bgGlow: 'bg-blue-500/5 text-blue-500 dark:bg-blue-500/10',
    badge: 'bg-blue-500/5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-500/10',
    text: 'text-blue-500',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M1.5 0h21l-1.9 21.56L12 24l-8.6-2.44L1.5 0zm14.8 5.5H7.72l.24 2.72h8.1l-.28 3.12H8.2l.18 2.11H13.6l-.3 3.09-2.3.62-2.3-.62-.15-1.72H6.5l.28 3.12 5.22 1.45 5.22-1.45.72-8.11.23-2.61.12-1.72z" />
      </svg>
    )
  },
  js: {
    gradient: 'from-amber-400 to-yellow-500',
    glow: 'group-hover:shadow-yellow-500/20 dark:group-hover:shadow-yellow-500/10',
    bgGlow: 'bg-yellow-500/5 text-yellow-600 dark:bg-yellow-500/10 dark:text-yellow-400',
    badge: 'bg-yellow-500/5 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400 border border-yellow-500/10',
    text: 'text-yellow-500',
    icon: (
      <div className="font-black text-[11px] leading-none bg-yellow-400 text-neutral-900 px-1 py-0.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.15)]">JS</div>
    )
  },
  ts: {
    gradient: 'from-[#3178c6] to-blue-400',
    glow: 'group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-500/10',
    bgGlow: 'bg-blue-500/5 text-[#3178c6] dark:bg-blue-500/10',
    badge: 'bg-[#3178c6]/5 text-[#3178c6] dark:bg-[#3178c6]/10 dark:text-blue-400 border border-[#3178c6]/10',
    text: 'text-[#3178c6]',
    icon: (
      <div className="font-black text-[11px] leading-none bg-[#3178c6] text-white px-1 py-0.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.15)]">TS</div>
    )
  },
  react: {
    gradient: 'from-cyan-400 to-blue-500',
    glow: 'group-hover:shadow-cyan-400/20 dark:group-hover:shadow-cyan-400/10',
    bgGlow: 'bg-cyan-500/5 text-cyan-500 dark:bg-cyan-500/10',
    badge: 'bg-cyan-500/5 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400 border border-cyan-500/10',
    text: 'text-cyan-500',
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 stroke-current fill-none animate-[spin_12s_linear_infinite]" strokeWidth="1.2">
        <circle cx="0" cy="0" r="2" className="fill-current" />
        <g stroke="currentColor">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    )
  },
  next: {
    gradient: 'from-neutral-800 to-neutral-500 dark:from-white dark:to-neutral-400',
    glow: 'group-hover:shadow-black/20 dark:group-hover:shadow-white/10',
    bgGlow: 'bg-neutral-500/5 text-neutral-800 dark:text-neutral-200 dark:bg-white/10',
    badge: 'bg-neutral-500/5 text-neutral-800 dark:bg-white/5 dark:text-white border border-neutral-500/10 dark:border-white/10',
    text: 'text-neutral-900 dark:text-white',
    icon: (
      <svg viewBox="0 0 180 180" className="w-5 h-5 fill-current">
        <path d="M90 0a90 90 0 1090 90A90 90 0 0090 0zM43 90h14v22h-14zm43.3-15h25v5h-10v20h10v5h-25zm47.7 5.1L120.4 90l13.6 15h-8l-9.6-11v11h-7v-30h7v13l9-13z" />
      </svg>
    )
  },
  tailwind: {
    gradient: 'from-cyan-400 to-teal-400',
    glow: 'group-hover:shadow-cyan-400/20 dark:group-hover:shadow-cyan-400/10',
    bgGlow: 'bg-cyan-500/5 text-cyan-500 dark:bg-cyan-500/10',
    badge: 'bg-cyan-500/5 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-400 border border-cyan-500/10',
    text: 'text-cyan-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 6.036c-2.402 0-3.606 1.201-3.606 3.604 0 2.403 1.204 3.603 3.606 3.603 2.402 0 3.605-1.2 3.605-3.603 0-2.403-1.203-3.604-3.605-3.604zm0 10.32c-3.132 0-5.83-1.564-5.83-4.694 0-3.13 2.698-4.693 5.83-4.693 3.131 0 5.83 1.563 5.83 4.693 0 3.13-2.699 4.694-5.83 4.694z" />
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.8 14.5c-1.91 0-3.46-1.55-3.46-3.46 0-1.91 1.55-3.46 3.46-3.46s3.46 1.55 3.46 3.46c0 1.91-1.55 3.46-3.46 3.46z" />
      </svg>
    )
  },
  bootstrap: {
    gradient: 'from-purple-600 to-indigo-500',
    glow: 'group-hover:shadow-purple-500/20 dark:group-hover:shadow-purple-500/10',
    bgGlow: 'bg-purple-500/5 text-purple-600 dark:bg-purple-500/10',
    badge: 'bg-purple-500/5 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 border border-purple-500/10',
    text: 'text-purple-500',
    icon: (
      <div className="font-black text-[12px] bg-purple-600 text-white w-5 h-5 flex items-center justify-center rounded">B</div>
    )
  },
  node: {
    gradient: 'from-green-500 to-emerald-400',
    glow: 'group-hover:shadow-green-500/20 dark:group-hover:shadow-green-500/10',
    bgGlow: 'bg-green-500/5 text-green-600 dark:bg-green-500/10',
    badge: 'bg-green-500/5 text-green-600 dark:bg-green-500/10 dark:text-green-400 border border-green-500/10',
    text: 'text-green-500',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 1.63L3.48 6.55v9.84L12 21.31l8.52-4.92V6.55L12 1.63zm6.81 13.93l-6.81 3.93-6.81-3.93V8.19l6.81-3.93 6.81 3.93v7.37z" />
      </svg>
    )
  },
  express: {
    gradient: 'from-neutral-600 to-neutral-400 dark:from-neutral-400 dark:to-neutral-600',
    glow: 'group-hover:shadow-neutral-500/20 dark:group-hover:shadow-neutral-500/10',
    bgGlow: 'bg-neutral-500/5 text-neutral-600 dark:text-neutral-300 dark:bg-neutral-500/10',
    badge: 'bg-neutral-500/5 text-neutral-600 dark:bg-neutral-500/10 dark:text-neutral-300 border border-neutral-500/10',
    text: 'text-neutral-600 dark:text-neutral-300',
    icon: <Icons.Terminal size={18} />
  },
  rest: {
    gradient: 'from-teal-500 to-cyan-400',
    glow: 'group-hover:shadow-teal-500/20 dark:group-hover:shadow-teal-500/10',
    bgGlow: 'bg-teal-500/5 text-teal-600 dark:bg-teal-500/10',
    badge: 'bg-teal-500/5 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400 border border-teal-500/10',
    text: 'text-teal-500',
    icon: <Icons.Network size={18} />
  },
  mongodb: {
    gradient: 'from-emerald-600 to-green-500',
    glow: 'group-hover:shadow-emerald-500/20 dark:group-hover:shadow-emerald-500/10',
    bgGlow: 'bg-emerald-500/5 text-emerald-600 dark:bg-emerald-500/10',
    badge: 'bg-emerald-500/5 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-500/10',
    text: 'text-emerald-500',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M12 0C10.14 0 7.2 4.41 7.2 8.78c0 3.39 1.95 6.01 4.8 6.54V24h1v-8.68c2.85-.53 4.8-3.15 4.8-6.54C17.8 4.41 14.86 0 13 0h-1z" />
      </svg>
    )
  },
  firebase: {
    gradient: 'from-amber-500 to-orange-500',
    glow: 'group-hover:shadow-orange-500/20 dark:group-hover:shadow-orange-500/10',
    bgGlow: 'bg-orange-500/5 text-orange-500 dark:bg-orange-500/10',
    badge: 'bg-orange-500/5 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 border border-orange-500/10',
    text: 'text-orange-500',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M3.877 18.236l8.118-14.81a.526.526 0 01.921 0l1.69 3.091-10.729 11.72zM19.034 16.32L14.39 7.843l-1.953-3.568a.526.526 0 00-.921 0L3.385 19.34a.526.526 0 00.732.695l14.917-3.715zm0 0a.526.526 0 00.32-.444L17.202 3.091a.526.526 0 00-.965-.184L12 12.015l7.034 4.305z" />
      </svg>
    )
  },
  mysql: {
    gradient: 'from-blue-500 to-orange-400',
    glow: 'group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-500/10',
    bgGlow: 'bg-blue-500/5 text-blue-500 dark:bg-blue-500/10',
    badge: 'bg-blue-500/5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-500/10',
    text: 'text-blue-500',
    icon: <Icons.Database size={18} />
  },
  python: {
    gradient: 'from-blue-500 to-yellow-400',
    glow: 'group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-500/10',
    bgGlow: 'bg-blue-500/5 text-blue-500 dark:bg-blue-500/10',
    badge: 'bg-blue-500/5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-500/10',
    text: 'text-blue-500',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M11.97 0C5.35 0 5.48 2.87 5.48 2.87v2.33h6.58V6.1H5.48S3 5.92 3 11.23c0 5.3 2.16 5.11 2.16 5.11h1.29v-1.8c0-2.48 2-4.46 4.47-4.46h6.59V3.53S17.42 0 11.97 0zM8.38 1.8c.4 0 .72.32.72.72a.72.72 0 11-.72-.72zm3.59 22.2c6.62 0 6.49-2.87 6.49-2.87v-2.33h-6.58V17.9h6.58s2.48.18 2.48-5.13c0-5.3-2.16-5.11-2.16-5.11h-1.29v1.8c0 2.48-2 4.46-4.47 4.46H8.44V20.4s.09 3.53 5.53 3.53zm3.59-1.8c-.4 0-.72-.32-.72-.72a.72.72 0 11.72.72z" />
      </svg>
    )
  },
  cpp: {
    gradient: 'from-blue-600 to-indigo-500',
    glow: 'group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-500/10',
    bgGlow: 'bg-blue-500/5 text-blue-600 dark:bg-blue-500/10',
    badge: 'bg-blue-500/5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-500/10',
    text: 'text-blue-600',
    icon: (
      <div className="font-extrabold text-[10px] leading-none bg-[#00599c] text-white px-1.5 py-0.5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.15)]">C++</div>
    )
  },
  java: {
    gradient: 'from-red-500 to-orange-500',
    glow: 'group-hover:shadow-red-500/20 dark:group-hover:shadow-red-500/10',
    bgGlow: 'bg-red-500/5 text-red-600 dark:bg-red-500/10',
    badge: 'bg-red-500/5 text-red-600 dark:bg-red-500/10 dark:text-red-400 border border-red-500/10',
    text: 'text-red-500',
    icon: <Icons.Coffee size={18} />
  },
  tensorflow: {
    gradient: 'from-orange-500 to-yellow-500',
    glow: 'group-hover:shadow-orange-500/20 dark:group-hover:shadow-orange-500/10',
    bgGlow: 'bg-orange-500/5 text-orange-500 dark:bg-orange-500/10',
    badge: 'bg-orange-500/5 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 border border-orange-500/10',
    text: 'text-orange-500',
    icon: <Icons.Brain size={18} />
  },
  pytorch: {
    gradient: 'from-red-500 to-orange-400',
    glow: 'group-hover:shadow-red-500/20 dark:group-hover:shadow-red-500/10',
    bgGlow: 'bg-red-500/5 text-red-500 dark:bg-red-500/10',
    badge: 'bg-red-500/5 text-red-600 dark:bg-red-500/10 dark:text-red-400 border border-red-500/10',
    text: 'text-red-500',
    icon: <Icons.Cpu size={18} />
  },
  scikit: {
    gradient: 'from-orange-400 to-blue-400',
    glow: 'group-hover:shadow-orange-500/20 dark:group-hover:shadow-orange-500/10',
    bgGlow: 'bg-orange-500/5 text-orange-500 dark:bg-orange-500/10',
    badge: 'bg-orange-500/5 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 border border-orange-500/10',
    text: 'text-orange-400',
    icon: <Icons.Binary size={18} />
  },
  opencv: {
    gradient: 'from-red-500 via-green-500 to-blue-500',
    glow: 'group-hover:shadow-green-500/20 dark:group-hover:shadow-green-500/10',
    bgGlow: 'bg-green-500/5 text-green-500 dark:bg-green-500/10',
    badge: 'bg-green-500/5 text-green-600 dark:bg-green-500/10 dark:text-green-400 border border-green-500/10',
    text: 'text-green-500',
    icon: <Icons.Eye size={18} />
  },
  pandas: {
    gradient: 'from-indigo-900 via-purple-700 to-pink-500',
    glow: 'group-hover:shadow-purple-500/20 dark:group-hover:shadow-purple-500/10',
    bgGlow: 'bg-purple-500/5 text-purple-600 dark:bg-purple-500/10',
    badge: 'bg-purple-500/5 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400 border border-purple-500/10',
    text: 'text-purple-500',
    icon: <Icons.Table size={18} />
  },
  numpy: {
    gradient: 'from-blue-500 to-cyan-400',
    glow: 'group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-500/10',
    bgGlow: 'bg-blue-500/5 text-blue-500 dark:bg-blue-500/10',
    badge: 'bg-blue-500/5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-500/10',
    text: 'text-blue-500',
    icon: <Icons.Hash size={18} />
  },
  langchain: {
    gradient: 'from-emerald-500 to-teal-400',
    glow: 'group-hover:shadow-emerald-500/20 dark:group-hover:shadow-emerald-500/10',
    bgGlow: 'bg-emerald-500/5 text-emerald-600 dark:bg-emerald-500/10',
    badge: 'bg-emerald-500/5 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-500/10',
    text: 'text-emerald-500',
    icon: <Icons.Link size={18} />
  },
  openai: {
    gradient: 'from-emerald-600 to-green-500',
    glow: 'group-hover:shadow-emerald-500/20 dark:group-hover:shadow-emerald-500/10',
    bgGlow: 'bg-emerald-500/5 text-emerald-600 dark:bg-emerald-500/10',
    badge: 'bg-emerald-500/5 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-500/10',
    text: 'text-emerald-600',
    icon: <Icons.Sparkles size={18} />
  },
  git: {
    gradient: 'from-orange-600 to-red-500',
    glow: 'group-hover:shadow-orange-500/20 dark:group-hover:shadow-orange-500/10',
    bgGlow: 'bg-orange-500/5 text-orange-500 dark:bg-orange-500/10',
    badge: 'bg-orange-500/5 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 border border-orange-500/10',
    text: 'text-orange-500',
    icon: <Icons.GitBranch size={18} />
  },
  github: {
    gradient: 'from-neutral-800 to-neutral-600 dark:from-neutral-300 dark:to-neutral-500',
    glow: 'group-hover:shadow-black/20 dark:group-hover:shadow-white/10',
    bgGlow: 'bg-neutral-500/5 text-neutral-800 dark:text-neutral-200 dark:bg-white/10',
    badge: 'bg-neutral-500/5 text-neutral-800 dark:bg-white/5 dark:text-white border border-neutral-500/10 dark:border-white/10',
    text: 'text-neutral-800 dark:text-neutral-200',
    icon: <Icons.Github size={18} />
  },
  docker: {
    gradient: 'from-blue-500 to-cyan-400',
    glow: 'group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-500/10',
    bgGlow: 'bg-blue-500/5 text-blue-500 dark:bg-blue-500/10',
    badge: 'bg-blue-500/5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-500/10',
    text: 'text-blue-500',
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M13.983 8.871h4.753c.272 0 .491-.225.491-.5v-1.7c0-.276-.219-.5-.491-.5h-4.753c-.27 0-.491.224-.491.5v1.7c0 .275.221.5.491.5zm-5.251 0h4.753c.272 0 .491-.225.491-.5v-1.7c0-.276-.219-.5-.491-.5H8.732c-.27 0-.491.224-.491.5v1.7c0 .275.221.5.491.5zM3.48 8.871h4.753c.272 0 .491-.225.491-.5v-1.7c0-.276-.219-.5-.491-.5H3.48c-.27 0-.491.224-.491.5v1.7c0 .275.221.5.491.5zM13.983 3.6h4.753c.272 0 .491-.225.491-.5v-1.7c0-.276-.219-.5-.491-.5h-4.753c-.27 0-.491.224-.491.5v1.7c0 .275.221.5.491.5zm-5.251 0h4.753c.272 0 .491-.225.491-.5v-1.7c0-.276-.219-.5-.491-.5H8.732c-.27 0-.491.224-.491.5v1.7c0 .275.221.5.491.5zM3.48 3.6h4.753c.272 0 .491-.225.491-.5v-1.7c0-.276-.219-.5-.491-.5H3.48c-.27 0-.491.224-.491.5v1.7c0 .275.221.5.491.5zM3.48 14.143h4.753c.272 0 .491-.225.491-.5v-1.7c0-.276-.219-.5-.491-.5H3.48c-.27 0-.491.224-.491.5v1.7c0 .275.221.5.491.5zm5.251 0h4.753c.272 0 .491-.225.491-.5v-1.7c0-.276-.219-.5-.491-.5H8.732c-.27 0-.491.224-.491.5v1.7c0 .275.221.5.491.5zM3.48 19.414h4.753c.272 0 .491-.225.491-.5v-1.7c0-.276-.219-.5-.491-.5H3.48c-.27 0-.491.224-.491.5v1.7c0 .275.221.5.491.5z" />
      </svg>
    )
  },
  postman: {
    gradient: 'from-orange-500 to-amber-500',
    glow: 'group-hover:shadow-orange-500/20 dark:group-hover:shadow-orange-500/10',
    bgGlow: 'bg-orange-500/5 text-orange-500 dark:bg-orange-500/10',
    badge: 'bg-orange-500/5 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 border border-orange-500/10',
    text: 'text-orange-500',
    icon: <Icons.Send size={18} />
  },
  vscode: {
    gradient: 'from-blue-500 to-cyan-500',
    glow: 'group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-500/10',
    bgGlow: 'bg-blue-500/5 text-blue-500 dark:bg-blue-500/10',
    badge: 'bg-blue-500/5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-500/10',
    text: 'text-blue-500',
    icon: <Icons.Layers size={18} />
  },
  linux: {
    gradient: 'from-neutral-800 to-amber-500',
    glow: 'group-hover:shadow-amber-500/20 dark:group-hover:shadow-amber-500/10',
    bgGlow: 'bg-neutral-500/5 text-neutral-800 dark:text-amber-500 dark:bg-white/10',
    badge: 'bg-amber-500/5 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-500/10',
    text: 'text-amber-500',
    icon: <Icons.Terminal size={18} />
  }
};

const defaultTheme = {
  gradient: 'from-blue-500 to-purple-500',
  glow: 'group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-500/10',
  bgGlow: 'bg-blue-500/5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
  badge: 'bg-blue-500/5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 border border-blue-500/10',
  text: 'text-blue-500',
  icon: <Icons.Code size={18} />
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Programming', 'AI / ML', 'Tools'];

  // Define unique groups to render
  const groupNames = ['Frontend', 'Backend', 'Database', 'Programming', 'AI / ML', 'Tools'];

  // Categories to render based on selection
  const activeGroups = selectedCategory === 'All'
    ? groupNames
    : [selectedCategory];

  return (
    <section
      id="skills"
      className="py-24 bg-neutral-50 dark:bg-neutral-950 transition-colors relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[35rem] h-[35rem] bg-blue-500/5 dark:bg-blue-500/[0.02] rounded-full blur-[130px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-500/5 dark:bg-purple-500/[0.02] rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[10px] font-bold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase mb-3 bg-blue-500/5 dark:bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/10"
          >
            Capabilities
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white"
          >
            Technical Expertise
          </motion.h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-3 max-w-lg mx-auto">
            A comprehensive breakdown of my stack across Full Stack Web Development, Artificial Intelligence, and System Tools.
          </p>
          
          <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-5 rounded-full" />
        </div>

        {/* Filter Navigation buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4.5 py-2 rounded-xl text-[11px] font-bold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-[1.03]'
                  : 'bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-white/5 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grouped Skills Display */}
        <div className="space-y-16">
          {activeGroups.map((group) => {
            const groupSkills = skills.filter(skill => skill.category === group);
            if (groupSkills.length === 0) return null;

            return (
              <div key={group} className="space-y-6">
                {/* Category Section Header */}
                <div className="flex items-center gap-3">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                    {group}
                  </h3>
                  <div className="h-[1px] flex-grow bg-neutral-200/60 dark:bg-neutral-800/50" />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupSkills.map((skill: Skill) => {
                    const theme = SKILL_THEME[skill.id] || defaultTheme;

                    return (
                      <motion.div
                        layout
                        key={skill.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        className="relative p-6 rounded-3xl bg-white/90 dark:bg-neutral-900/95 border border-neutral-100/80 dark:border-white/5 shadow-sm hover:shadow-xl hover:border-neutral-200 dark:hover:border-neutral-800/80 transition-all duration-300 group flex flex-col justify-between overflow-hidden"
                      >
                        {/* Interactive lighting glow card accent */}
                        <div className={`absolute -right-24 -top-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-500 ${theme.text}`} />

                        {/* Top Line: Icon & Name & Percent */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3">
                            <div className={`p-2.5 rounded-2xl transition-transform duration-300 group-hover:rotate-6 ${theme.bgGlow}`}>
                              {theme.icon}
                            </div>
                            <div>
                              <span className="block font-extrabold text-sm text-neutral-950 dark:text-white tracking-tight">
                                {skill.name}
                              </span>
                              <span className="text-[10px] font-mono text-neutral-400">
                                {skill.category}
                              </span>
                            </div>
                          </div>

                          <div className="flex flex-col items-end">
                            <span className="text-base font-black text-neutral-950 dark:text-white tracking-tight">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Middle Line: Animated Progress bar with shimmer and trailing edge glow */}
                        <div className="relative w-full h-2.5 bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden mb-4">
                          {/* Glow underlay behind progress bar */}
                          <motion.div
                            initial={{ width: '0%' }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                            className={`absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r ${theme.gradient} blur-[3px] opacity-65`}
                          />

                          {/* Primary Fill bar with leading edge pulse dot */}
                          <motion.div
                            initial={{ width: '0%' }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                            className={`absolute top-0 bottom-0 left-0 rounded-full bg-gradient-to-r ${theme.gradient} relative`}
                          >
                            {/* Continuously traveling shimmer */}
                            <motion.div
                              initial={{ x: '-100%' }}
                              animate={{ x: '150%' }}
                              transition={{
                                repeat: Infinity,
                                duration: 2.2,
                                ease: 'linear',
                              }}
                              className="absolute top-0 bottom-0 w-2/3 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            />

                            {/* Glow point on the leading edge */}
                            <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#fff,0_0_15px_currentColor] animate-pulse ${theme.text}`} />
                          </motion.div>
                        </div>

                        {/* Bottom Line: Years of experience badge */}
                        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                          <span className={`px-2 py-0.5 rounded-md text-[9px] font-bold ${theme.badge}`}>
                            Active
                          </span>
                          <span>
                            {skill.yearsExp} {skill.yearsExp === 1 ? 'Year' : 'Years'} Experience
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
