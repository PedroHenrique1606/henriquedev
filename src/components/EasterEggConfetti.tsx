"use client";

import { useEffect, useState, useRef, useCallback, useMemo } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  size: number;
  shape: 'circle' | 'square';
  velocity: {
    x: number;
    y: number;
    rotation: number;
  };
  opacity: number;
}

const COLORS = [
  '#614FD0', // purplePrimary
  '#FF6B6B',
  '#4ECDC4', 
  '#45B7D1',
  '#96CEB4',
  '#FFEAA7',
  '#DDA0DD',
  '#98D8C8',
  '#F7DC6F',
  '#BB8FCE'
];

const PHYSICS = {
  gravity: 0.15,
  friction: 0.98,
  maxParticles: 80,
  spawnRate: 3,
  fadeRate: 0.02
} as const;

export const EasterEggConfetti = ({ isActive }: { isActive: boolean }) => {
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  const createConfettiPiece = useCallback((id: number): ConfettiPiece => ({
    id,
    x: Math.random() * (window.innerWidth || 1200),
    y: -20,
    rotation: Math.random() * 360,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    size: Math.random() * 6 + 3,
    shape: Math.random() > 0.5 ? 'circle' : 'square',
    opacity: 1,
    velocity: {
      x: (Math.random() - 0.5) * 6,
      y: Math.random() * 4 + 2,
      rotation: (Math.random() - 0.5) * 8
    }
  }), []);

  // Animação otimizada com requestAnimationFrame
  const animate = useCallback((currentTime: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = currentTime;
    const deltaTime = currentTime - lastTimeRef.current;
    lastTimeRef.current = currentTime;

    // Atualizar apenas se passou tempo suficiente (60fps)
    if (deltaTime < 16) {
      animationFrameRef.current = requestAnimationFrame(animate);
      return;
    }

    setConfettiPieces(prev => {
      if (!isActive) return [];

      const pieces = prev.map(piece => {
        const newPiece = {
          ...piece,
          x: piece.x + piece.velocity.x,
          y: piece.y + piece.velocity.y,
          rotation: piece.rotation + piece.velocity.rotation,
          opacity: Math.max(0, piece.opacity - PHYSICS.fadeRate),
          velocity: {
            x: piece.velocity.x * PHYSICS.friction,
            y: piece.velocity.y + PHYSICS.gravity,
            rotation: piece.velocity.rotation * PHYSICS.friction
          }
        };

        return newPiece;
      }).filter(piece => 
        piece.y < (window.innerHeight || 800) + 50 && 
        piece.opacity > 0.1 &&
        piece.x > -50 && 
        piece.x < (window.innerWidth || 1200) + 50
      );

      // Adicionar novas partículas gradualmente
      if (pieces.length < PHYSICS.maxParticles && Math.random() < 0.3) {
        for (let i = 0; i < PHYSICS.spawnRate; i++) {
          pieces.push(createConfettiPiece(Date.now() + i));
        }
      }

      return pieces;
    });

    if (isActive) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  }, [isActive, createConfettiPiece]);

  useEffect(() => {
    if (isActive) {
      // Criar partículas iniciais
      const initialPieces = Array.from(
        { length: Math.min(30, PHYSICS.maxParticles) }, 
        (_, i) => createConfettiPiece(i)
      );
      setConfettiPieces(initialPieces);
      
      // Iniciar animação
      lastTimeRef.current = 0;
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      // Limpar quando inativo
      setConfettiPieces([]);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, animate, createConfettiPiece]);

  // Memoized styles para melhor performance
  const containerStyle = useMemo(() => ({
    position: 'fixed' as const,
    inset: '0',
    pointerEvents: 'none' as const,
    zIndex: 50,
    overflow: 'hidden'
  }), []);

  if (!isActive || confettiPieces.length === 0) return null;

  return (
    <div style={containerStyle}>
      {confettiPieces.map(piece => (
        <div
          key={piece.id}
          className="absolute will-change-transform"
          style={{
            left: `${piece.x}px`,
            top: `${piece.y}px`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg) scale(${piece.opacity})`,
            borderRadius: piece.shape === 'circle' ? '50%' : '20%',
            opacity: piece.opacity,
            boxShadow: `0 0 ${piece.size / 2}px ${piece.color}40`,
            transition: 'none'
          }}
        />
      ))}
    </div>
  );
};