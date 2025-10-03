"use client";

import { useEffect, useState, useCallback } from 'react';
import { Trophy, GameController } from '@phosphor-icons/react/dist/ssr';
import { SnakeGame } from './SnakeGame';

interface EasterEggModalProps {
  isActive: boolean;
  onClose: () => void;
}

export const EasterEggModal = ({ isActive, onClose }: EasterEggModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  // Controle de fechamento
  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => onClose(), 300); // Delay para animação
  }, [onClose]);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  // Controle de teclas
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, handleClose]);

  useEffect(() => {
    if (isActive) {
      setIsVisible(true);
      setShowIntro(true);
      
      // Mostrar intro por 3 segundos, depois mostrar jogo
      const introTimer = setTimeout(() => {
        setShowIntro(false);
      }, 3000);

      return () => clearTimeout(introTimer);
    } else {
      setIsVisible(false);
    }
  }, [isActive]);

  if (!isVisible) return null;

  const currentLang = localStorage.getItem('language') as 'en' | 'pt' || 'pt';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-gradient-to-br from-purplePrimary/20 to-blue-600/20 backdrop-blur-xl border-2 border-purplePrimary/50 rounded-2xl p-6 mx-4 max-w-2xl w-full animate-in slide-in-from-bottom duration-500">
        
        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-r from-purplePrimary/20 via-transparent to-blue-600/20 rounded-2xl animate-pulse"></div>
        
        {showIntro ? (
          // Tela de introdução
          <div className="relative z-10 text-center space-y-6 py-8">
            {/* Ícones flutuantes */}
            <div className="absolute -top-4 -right-4 animate-bounce delay-100">
              <div className="bg-purplePrimary rounded-full p-2">
                <Trophy size={24} className="text-white" />
              </div>
            </div>
            
            <div className="absolute -top-4 -left-4 animate-bounce delay-300">
              <div className="bg-blue-600 rounded-full p-2">
                <GameController size={24} className="text-white" />
              </div>
            </div>
            
            <div className="animate-pulse">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                🎮 {currentLang === 'pt' ? 'EASTER EGG DESBLOQUEADO!' : 'EASTER EGG UNLOCKED!'} 🎮
              </h2>
            </div>
            
            <div className="animate-in slide-in-from-bottom delay-200">
              <p className="text-white font-semibold text-lg leading-relaxed">
                {currentLang === 'pt' 
                  ? '🎉 Você descobriu o segredo! Prepare-se para jogar Snake! 🐍'
                  : '🎉 You found the secret! Get ready to play Snake! 🐍'
                }
              </p>
            </div>

            <div className="animate-in slide-in-from-bottom delay-400">
              <div className="flex justify-center gap-2 text-sm text-slate-300">
                <span>↑↑↓↓←→←→</span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                {currentLang === 'pt' ? 'Sequência de Ativação' : 'Activation Sequence'}
              </p>
            </div>

            <div className="animate-in slide-in-from-bottom delay-600">
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-purplePrimary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>

            {/* Partículas brilhantes */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          // Tela do jogo
          <div className="relative z-10">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                🐍 {currentLang === 'pt' ? 'JOGO DA COBRINHA' : 'SNAKE GAME'} 🐍
              </h2>
            </div>
            <SnakeGame onClose={handleClose} />
          </div>
        )}
      </div>
    </div>
  );
};