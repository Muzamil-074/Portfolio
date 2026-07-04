import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Ambient mouse glow aura - interacts perfectly with glass cards */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, rgba(139, 92, 246, 0.08), transparent 80%)`,
        }}
      />

      {/* Floating ring cursor */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-75 -translate-x-1/2 -translate-y-1/2 hidden md:block border border-violet-500/30 bg-violet-500/5 mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isClicking ? '20px' : '40px',
          height: isClicking ? '20px' : '40px',
          transition: 'width 0.2s, height 0.2s, background-color 0.2s, border-color 0.2s',
          boxShadow: isClicking ? '0 0 15px rgba(139, 92, 246, 0.4)' : '0 0 8px rgba(139, 92, 246, 0.1)',
        }}
      />
    </>
  );
}
