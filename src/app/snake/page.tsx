"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { SnakeGame } from '@/components/SnakeGame';
import { Play, Settings, HelpCircle, Home } from 'lucide-react';

export default function SnakePage() {
  const router = useRouter();
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'instructions'>('menu');
  const [currentLang, setCurrentLang] = useState<'en' | 'pt'>('pt');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setCurrentLang((localStorage.getItem('language') as 'en' | 'pt') || 'pt');
    setIsMounted(true);
  }, []);

  const handleClose = () => {
    setGameState('menu');
  };

  const handleExit = () => {
    router.back();
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purplePrimary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-4">
        
        {!isMounted ? null : (
          <>
        {/* MENU PRINCIPAL */}
        {gameState === 'menu' && (
          <div className="w-full max-w-md space-y-8 text-center">
            {/* Logo/Title */}
            <div className="space-y-4 mb-12">
              <div className="text-7xl animate-bounce">🐍</div>
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purplePrimary via-blue-500 to-purple-500 bg-clip-text text-transparent">
                SNAKE
              </h1>
              <p className="text-slate-400 text-lg">
                {currentLang === 'pt' ? 'Jogo Clássico' : 'Classic Game'}
              </p>
            </div>

            {/* Menu Buttons */}
            <div className="space-y-4">
              {/* Play Button */}
              <button
                onClick={() => setGameState('playing')}
                className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purplePrimary to-blue-600 p-1 transition-all duration-300 hover:shadow-2xl hover:shadow-purplePrimary/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purplePrimary to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-black rounded-xl px-8 py-4 flex items-center justify-center gap-3 group-hover:bg-gradient-to-r group-hover:from-purplePrimary/20 group-hover:to-blue-600/20 transition-all duration-300">
                  <Play size={24} className="text-purplePrimary group-hover:text-white transition-colors" fill="currentColor" />
                  <span className="text-white font-bold text-lg group-hover:text-white transition-colors">
                    {currentLang === 'pt' ? 'JOGAR' : 'PLAY'}
                  </span>
                </div>
              </button>

              {/* Instructions Button */}
              <button
                onClick={() => setGameState('instructions')}
                className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-700 to-slate-600 p-1 transition-all duration-300 hover:shadow-xl hover:shadow-slate-600/50"
              >
                <div className="relative bg-black rounded-xl px-8 py-4 flex items-center justify-center gap-3 group-hover:bg-gradient-to-r group-hover:from-slate-700/20 group-hover:to-slate-600/20 transition-all duration-300">
                  <HelpCircle size={24} className="text-slate-400 group-hover:text-white transition-colors" />
                  <span className="text-slate-300 font-bold text-lg group-hover:text-white transition-colors">
                    {currentLang === 'pt' ? 'INSTRUÇÕES' : 'HOW TO PLAY'}
                  </span>
                </div>
              </button>

              {/* Settings Button */}
              <button
                onClick={() => setGameState('instructions')}
                className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-700 to-slate-600 p-1 transition-all duration-300 hover:shadow-xl hover:shadow-slate-600/50"
              >
                <div className="relative bg-black rounded-xl px-8 py-4 flex items-center justify-center gap-3 group-hover:bg-gradient-to-r group-hover:from-slate-700/20 group-hover:to-slate-600/20 transition-all duration-300">
                  <Settings size={24} className="text-slate-400 group-hover:text-white transition-colors" />
                  <span className="text-slate-300 font-bold text-lg group-hover:text-white transition-colors">
                    {currentLang === 'pt' ? 'CONFIGURAÇÕES' : 'SETTINGS'}
                  </span>
                </div>
              </button>

              {/* Back Button */}
              <button
                onClick={handleExit}
                className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-900/50 to-red-800/50 p-1 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/50"
              >
                <div className="relative bg-black rounded-xl px-8 py-4 flex items-center justify-center gap-3 group-hover:bg-gradient-to-r group-hover:from-red-900/30 group-hover:to-red-800/30 transition-all duration-300">
                  <Home size={24} className="text-red-400 group-hover:text-red-300 transition-colors" />
                  <span className="text-red-300 font-bold text-lg group-hover:text-red-200 transition-colors">
                    {currentLang === 'pt' ? 'VOLTAR' : 'BACK'}
                  </span>
                </div>
              </button>
            </div>

            {/* Footer Info */}
            <div className="pt-8 border-t border-slate-700/50 space-y-2">
              <p className="text-xs text-slate-500">
                {currentLang === 'pt' ? 'Aperte ESC para voltar ao site' : 'Press ESC to return to website'}
              </p>
              <p className="text-xs text-slate-600">
                v1.0 • {currentLang === 'pt' ? 'Desenvolvido com ❤️' : 'Built with ❤️'}
              </p>
            </div>
          </div>
        )}

        {/* INSTRUCTIONS */}
        {gameState === 'instructions' && (
          <div className="w-full max-w-2xl max-h-96 overflow-y-auto space-y-6">
            {/* Header */}
            <div className="text-center space-y-2">
              <h2 className="text-4xl font-bold text-white">
                {currentLang === 'pt' ? '📖 COMO JOGAR' : '📖 HOW TO PLAY'}
              </h2>
            </div>

            {/* Instructions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Objetivo */}
              <div className="bg-gradient-to-br from-green-900/30 to-teal-900/30 border border-green-600/50 rounded-xl p-4">
                <h3 className="text-green-400 font-bold mb-2">🎯 {currentLang === 'pt' ? 'OBJETIVO' : 'OBJECTIVE'}</h3>
                <p className="text-sm text-slate-300">
                  {currentLang === 'pt' 
                    ? 'Coma a comida vermelha para crescer e ganhar pontos. Evite colidir com as paredes e com sua própria cauda.'
                    : 'Eat the red food to grow and score points. Avoid hitting the walls and your own tail.'}
                </p>
              </div>

              {/* Controles */}
              <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-600/50 rounded-xl p-4">
                <h3 className="text-blue-400 font-bold mb-2">🎮 {currentLang === 'pt' ? 'CONTROLES' : 'CONTROLS'}</h3>
                <p className="text-sm text-slate-300">
                  {currentLang === 'pt' 
                    ? '↑↓←→ ou WASD para mover'
                    : '↑↓←→ or WASD to move'}
                </p>
              </div>

              {/* Pontuação */}
              <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-600/50 rounded-xl p-4">
                <h3 className="text-yellow-400 font-bold mb-2">⭐ {currentLang === 'pt' ? 'PONTUAÇÃO' : 'SCORING'}</h3>
                <p className="text-sm text-slate-300">
                  {currentLang === 'pt' 
                    ? '+10 pontos por comida. A velocidade aumenta a cada comida.'
                    : '+10 points per food. Speed increases with each food.'}
                </p>
              </div>

              {/* Dicas */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-600/50 rounded-xl p-4">
                <h3 className="text-purple-400 font-bold mb-2">💡 {currentLang === 'pt' ? 'DICAS' : 'TIPS'}</h3>
                <p className="text-sm text-slate-300">
                  {currentLang === 'pt' 
                    ? 'Planeje seus movimentos. Ficar nos cantos é perigoso!'
                    : 'Plan your moves. Staying in corners is dangerous!'}
                </p>
              </div>
            </div>

            {/* Teclas especiais */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-600/50 rounded-xl p-4 space-y-2">
              <h3 className="text-slate-300 font-bold">⌨️ {currentLang === 'pt' ? 'TECLAS ESPECIAIS' : 'SPECIAL KEYS'}</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
                <div><span className="text-purple-400 font-bold">SPACE</span> - {currentLang === 'pt' ? 'Começar' : 'Start'}</div>
                <div><span className="text-purple-400 font-bold">P</span> - {currentLang === 'pt' ? 'Pausar' : 'Pause'}</div>
                <div><span className="text-purple-400 font-bold">R</span> - {currentLang === 'pt' ? 'Reiniciar' : 'Reset'}</div>
                <div><span className="text-purple-400 font-bold">ESC</span> - {currentLang === 'pt' ? 'Menu' : 'Menu'}</div>
              </div>
            </div>

            {/* Back Button */}
            <button
              onClick={() => setGameState('menu')}
              className="w-full bg-gradient-to-r from-purplePrimary to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              {currentLang === 'pt' ? '← VOLTAR AO MENU' : '← BACK TO MENU'}
            </button>
          </div>
        )}

        {/* GAME SCREEN */}
        {gameState === 'playing' && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            {/* Header */}
            <div className="w-full flex items-center justify-between mb-6 px-4">
              <h1 className="text-3xl font-bold text-white flex items-center gap-2">
                <span>🐍</span>
                <span className="bg-gradient-to-r from-purplePrimary to-blue-500 bg-clip-text text-transparent">
                  SNAKE GAME
                </span>
              </h1>
              <button
                onClick={() => setGameState('menu')}
                className="bg-red-900/50 hover:bg-red-800 text-red-300 font-bold py-2 px-4 rounded-lg transition-all duration-300"
              >
                {currentLang === 'pt' ? 'MENU' : 'MENU'}
              </button>
            </div>

            {/* Game Component */}
            <SnakeGame onClose={handleClose} />
          </div>
        )}
          </>
        )}
      </div>
    </div>
  );
}
