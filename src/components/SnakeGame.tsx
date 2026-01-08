"use client";

import { useEffect, useState, useCallback, useRef, useMemo } from 'react';

interface Position {
  x: number;
  y: number;
}

interface GameState {
  snake: Position[];
  food: Position;
  direction: Position;
  score: number;
  gameOver: boolean;
  gameStarted: boolean;
  isPaused: boolean;
  speed: number;
}

interface SnakeGameProps {
  onClose: () => void;
}

// Constantes do jogo
const GRID_SIZE = 20;
const CELL_SIZE = 30;
const INITIAL_SPEED = 150;
const MIN_SPEED = 80;
const SPEED_INCREMENT = 5;

const INITIAL_STATE: GameState = {
  snake: [{ x: 10, y: 10 }],
  food: { x: 15, y: 15 },
  direction: { x: 0, y: -1 },
  score: 0,
  gameOver: false,
  gameStarted: false,
  isPaused: false,
  speed: INITIAL_SPEED
};

// Direções válidas (setas + WASD)
const DIRECTIONS = {
  // Setas
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
  // WASD (códigos de tecla)
  KeyW: { x: 0, y: -1 },
  KeyS: { x: 0, y: 1 },
  KeyA: { x: -1, y: 0 },
  KeyD: { x: 1, y: 0 },
  // WASD (caracteres - fallback)
  w: { x: 0, y: -1 },
  s: { x: 0, y: 1 },
  a: { x: -1, y: 0 },
  d: { x: 1, y: 0 },
  W: { x: 0, y: -1 },
  S: { x: 0, y: 1 },
  A: { x: -1, y: 0 },
  D: { x: 1, y: 0 }
} as const;

export const SnakeGame = ({ onClose }: SnakeGameProps) => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  const nextDirectionRef = useRef(gameState.direction);

  // Memoized functions para melhor performance
  const generateFood = useCallback((snake: Position[]): Position => {
    let newFood: Position;
    let attempts = 0;
    const maxAttempts = 100;
    
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
      attempts++;
    } while (
      attempts < maxAttempts && 
      snake.some(segment => segment.x === newFood.x && segment.y === newFood.y)
    );
    
    return newFood;
  }, []);

  const checkCollision = useCallback((head: Position, snake: Position[]): boolean => {
    // Verificar colisão com paredes
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    // Verificar auto-colisão (excluir a cabeça atual)
    return snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y);
  }, []);

  const resetGame = useCallback(() => {
    setGameState(INITIAL_STATE);
    nextDirectionRef.current = INITIAL_STATE.direction;
    if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
      gameLoopRef.current = null;
    }
  }, []);

  // Lógica principal do jogo
  const moveSnake = useCallback(() => {
    setGameState(currentState => {
      if (!currentState.gameStarted || currentState.isPaused || currentState.gameOver) {
        return currentState;
      }

      const newSnake = [...currentState.snake];
      const head = { ...newSnake[0] };
      const direction = nextDirectionRef.current;
      
      head.x += direction.x;
      head.y += direction.y;

      // Verificar colisão
      if (checkCollision(head, newSnake)) {
        return { ...currentState, gameOver: true };
      }

      newSnake.unshift(head);

      // Verificar se comeu a comida
      if (head.x === currentState.food.x && head.y === currentState.food.y) {
        const newScore = currentState.score + 10;
        const newSpeed = Math.max(MIN_SPEED, currentState.speed - SPEED_INCREMENT);
        const newFood = generateFood(newSnake);
        
        return {
          ...currentState,
          snake: newSnake,
          score: newScore,
          speed: newSpeed,
          food: newFood
        };
      } else {
        newSnake.pop();
        return {
          ...currentState,
          snake: newSnake
        };
      }
    });
  }, [checkCollision, generateFood]);

  // Função para mudar direção de forma mais responsiva
  const changeDirection = useCallback((newDirection: Position) => {
    setGameState(currentState => {
      // Prevenir movimento na direção oposta
      const currentDir = nextDirectionRef.current;
      if (
        (newDirection.x === -currentDir.x && newDirection.y === -currentDir.y) ||
        !currentState.gameStarted ||
        currentState.gameOver
      ) {
        return currentState;
      }

      nextDirectionRef.current = newDirection;
      return { ...currentState, direction: newDirection };
    });
  }, []);

  // Controles do teclado otimizados
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    e.preventDefault();

    if (e.key === 'Escape') {
      onClose();
      return;
    }

    if (!gameState.gameStarted) {
      if (e.key === ' ') {
        setGameState(prev => ({ ...prev, gameStarted: true }));
        return;
      }
    }

    if (e.key === 'p' || e.key === 'P') {
      setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }));
      return;
    }

    if (gameState.gameOver) {
      if (e.key === 'r' || e.key === 'R') {
        resetGame();
        return;
      }
    }

    // Controles direcionais - verificar tanto e.code quanto e.key
    const checkDirection = (key: string) => {
      if (key in DIRECTIONS) {
        changeDirection(DIRECTIONS[key as keyof typeof DIRECTIONS]);
        return true;
      }
      return false;
    };

    // Tentar primeiro com e.code (WASD), depois e.key (setas e caracteres)
    if (!checkDirection(e.code)) {
      checkDirection(e.key);
    }
  }, [gameState.gameStarted, gameState.gameOver, onClose, resetGame, changeDirection]);

  // useEffect para controles de teclado
  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // Game loop otimizado com velocidade variável
  useEffect(() => {
    if (gameState.gameStarted && !gameState.isPaused && !gameState.gameOver) {
      gameLoopRef.current = setInterval(moveSnake, gameState.speed);
    } else if (gameLoopRef.current) {
      clearInterval(gameLoopRef.current);
      gameLoopRef.current = null;
    }

    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
        gameLoopRef.current = null;
      }
    };
  }, [moveSnake, gameState.gameStarted, gameState.isPaused, gameState.gameOver, gameState.speed]);

  const currentLang = useMemo(() => {
    if (typeof window === 'undefined') return 'pt';
    return (localStorage.getItem('language') as 'en' | 'pt') || 'pt';
  }, []);

  return (
    <div className="w-full h-full flex gap-6 px-6 py-6">
      {/* Left - Game Board (Main) */}
      <div className="flex-1 flex items-center justify-center">
        <div 
          className="relative bg-gradient-to-br from-slate-900 to-black border-4 border-purplePrimary/50 rounded-2xl overflow-hidden shadow-2xl"
          style={{
            width: `${GRID_SIZE * CELL_SIZE}px`,
            height: `${GRID_SIZE * CELL_SIZE}px`
          }}
        >
          {gameState.snake.map((segment, index) => (
            <div
              key={`${segment.x}-${segment.y}-${index}`}
              className={`absolute transition-all duration-75 ${
                index === 0 
                  ? 'bg-gradient-to-br from-purplePrimary to-purple-500 shadow-lg shadow-purplePrimary/50' 
                  : 'bg-gradient-to-br from-purple-400 to-purple-500'
              }`}
              style={{
                left: `${segment.x * CELL_SIZE}px`,
                top: `${segment.y * CELL_SIZE}px`,
                width: `${CELL_SIZE}px`,
                height: `${CELL_SIZE}px`,
                borderRadius: '4px',
                zIndex: gameState.snake.length - index,
                border: index === 0 ? '2px solid rgba(255,255,255,0.3)' : 'none'
              }}
            />
          ))}

          <div
            className="absolute bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-lg shadow-red-500/50 animate-pulse"
            style={{
              left: `${gameState.food.x * CELL_SIZE}px`,
              top: `${gameState.food.y * CELL_SIZE}px`,
              width: `${CELL_SIZE}px`,
              height: `${CELL_SIZE}px`,
              borderRadius: '4px'
            }}
          />

          {(!gameState.gameStarted || gameState.isPaused || gameState.gameOver) && (
            <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/90 to-purplePrimary/10 backdrop-blur-md flex flex-col items-center justify-center text-white text-center z-50">
              {!gameState.gameStarted && (
                <div className="space-y-8 animate-in fade-in duration-500">
                  {/* Gamepad Icon with glow */}
                  <div className="relative flex justify-center">
                    <div className="absolute inset-0 w-32 h-32 bg-purplePrimary/30 rounded-full blur-3xl animate-pulse"></div>
                    <div className="relative text-9xl drop-shadow-2xl animate-bounce" style={{ animationDuration: '2s' }}>
                      🎮
                    </div>
                  </div>

                  {/* Main Text */}
                  <div className="space-y-3">
                    <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purplePrimary via-blue-500 to-purple-400 bg-clip-text text-transparent">
                      {currentLang === 'pt' ? 'Pronto para Jogar?' : 'Ready to Play?'}
                    </h2>
                    
                    {/* Press SPACE indicator */}
                    <div className="flex items-center justify-center gap-2 text-2xl font-bold text-white pt-2">
                      <span className="animate-pulse">▶</span>
                      <span className="bg-gradient-to-r from-slate-200 to-slate-300 bg-clip-text text-transparent inline-block">
                        {currentLang === 'pt' ? 'Pressione ESPAÇO' : 'Press SPACE'}
                      </span>
                      <span className="animate-pulse">◀</span>
                    </div>
                  </div>

                  {/* Quick Tips */}
                  <div className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 backdrop-blur border border-slate-600/30 rounded-xl p-4 max-w-xs text-sm text-slate-300 space-y-2">
                    <p className="flex items-center justify-center gap-2">
                      <span>🕹️</span>
                      <span>{currentLang === 'pt' ? 'Use setas ou WASD para mover' : 'Use arrows or WASD to move'}</span>
                    </p>
                    <p className="flex items-center justify-center gap-2">
                      <span>⭐</span>
                      <span>{currentLang === 'pt' ? 'Ganhe pontos comendo' : 'Score by eating food'}</span>
                    </p>
                  </div>
                </div>
              )}
              
              {gameState.isPaused && !gameState.gameOver && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="relative flex justify-center">
                    <div className="absolute inset-0 w-28 h-28 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="relative text-8xl drop-shadow-2xl">⏸️</div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                      {currentLang === 'pt' ? 'PAUSADO' : 'PAUSED'}
                    </p>
                    <p className="text-slate-400 text-sm">{currentLang === 'pt' ? 'Pressione P para continuar' : 'Press P to resume'}</p>
                  </div>
                </div>
              )}
              
              {gameState.gameOver && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="relative flex justify-center">
                    <div className="absolute inset-0 w-32 h-32 bg-red-600/20 rounded-full blur-3xl"></div>
                    <div className="relative text-9xl drop-shadow-2xl animate-pulse">💀</div>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-5xl font-black bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                      {currentLang === 'pt' ? 'GAME OVER' : 'GAME OVER'}
                    </h2>
                    
                    <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur border border-slate-600/30 rounded-xl p-6 space-y-2">
                      <p className="text-slate-400 text-sm uppercase tracking-wider">{currentLang === 'pt' ? 'Pontuação Final' : 'Final Score'}</p>
                      <p className="text-5xl font-black bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                        {gameState.score}
                      </p>
                    </div>

                    <p className="text-slate-400 text-sm pt-2">{currentLang === 'pt' ? 'Pressione R para jogar novamente' : 'Press R to play again'}</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right - Stats & Controls Panel */}
      <div className="w-80 flex flex-col gap-4 overflow-y-auto pr-2">
        {/* Header Title */}
        <div className="text-center mb-2">
          <h2 className="text-2xl font-black text-white mb-1">🐍 SNAKE</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-purplePrimary to-blue-500 rounded-full mx-auto"></div>
        </div>

        {/* Score Card */}
        <div className="bg-gradient-to-br from-purplePrimary/20 to-blue-600/20 backdrop-blur-xl border border-purplePrimary/50 rounded-xl p-5">
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">{currentLang === 'pt' ? 'Pontuação' : 'Score'}</p>
          <p className="text-5xl font-black bg-gradient-to-r from-purplePrimary to-blue-400 bg-clip-text text-transparent">
            {gameState.score}
          </p>
        </div>

        {/* Speed Card */}
        <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-xl border border-slate-600/50 rounded-xl p-4">
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-3">{currentLang === 'pt' ? 'Velocidade' : 'Speed'}</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-purple-400">{Math.round((INITIAL_SPEED - gameState.speed) / SPEED_INCREMENT + 1)}</span>
              <span className="text-xs text-slate-500">/ 17</span>
            </div>
            <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-purplePrimary to-blue-500 h-full transition-all duration-300"
                style={{ width: `${((INITIAL_SPEED - gameState.speed) / (INITIAL_SPEED - MIN_SPEED)) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Size Card */}
        <div className="bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-xl border border-slate-600/50 rounded-xl p-4">
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">{currentLang === 'pt' ? 'Tamanho da Cobra' : 'Snake Size'}</p>
          <p className="text-4xl font-black text-purple-400">{gameState.snake.length}</p>
        </div>

        {/* Controls Info */}
        <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-xl border border-blue-600/30 rounded-xl p-4">
          <p className="text-blue-300 text-xs uppercase tracking-wider font-bold mb-3">🎮 {currentLang === 'pt' ? 'Controles' : 'Controls'}</p>
          <div className="text-slate-300 text-sm space-y-2">
            <p>• <span className="font-bold">↑↓←→</span> / <span className="font-bold">WASD</span> - {currentLang === 'pt' ? 'Mover' : 'Move'}</p>
            <p>• <span className="font-bold">SPACE</span> - {currentLang === 'pt' ? 'Iniciar/Pausar' : 'Start/Pause'}</p>
            <p>• <span className="font-bold">P</span> - {currentLang === 'pt' ? 'Pausar' : 'Pause'}</p>
            <p>• <span className="font-bold">R</span> - {currentLang === 'pt' ? 'Reiniciar' : 'Reset'}</p>
            <p>• <span className="font-bold">ESC</span> - {currentLang === 'pt' ? 'Menu' : 'Menu'}</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3 mt-auto pt-4 border-t border-slate-700/30">
          <button
            onClick={() => setGameState(prev => ({ ...prev, gameStarted: !prev.gameStarted, isPaused: false }))}
            className="w-full bg-gradient-to-r from-purplePrimary to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {gameState.gameStarted ? (
              <>{currentLang === 'pt' ? '⏸️ PAUSAR' : '⏸️ PAUSE'}</>
            ) : (
              <>{currentLang === 'pt' ? '▶️ INICIAR' : '▶️ START'}</>
            )}
          </button>

          <button
            onClick={resetGame}
            className="w-full bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {currentLang === 'pt' ? '🔄 REINICIAR' : '🔄 RESET'}
          </button>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-red-900/50 to-red-800/50 hover:from-red-800 hover:to-red-700 text-red-100 font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            {currentLang === 'pt' ? '↩️ VOLTAR' : '↩️ BACK'}
          </button>
        </div>
      </div>
    </div>
  );
};