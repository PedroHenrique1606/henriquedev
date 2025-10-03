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
const CELL_SIZE = 15;
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
          snake: newSnake,
          direction: direction
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
    
    // Debug temporário (remover depois)
    console.log('Key pressed:', { key: e.key, code: e.code });

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

  // Memoized values para otimizar re-renders
  const gridStyle = useMemo(() => ({
    width: `${GRID_SIZE * CELL_SIZE}px`,
    height: `${GRID_SIZE * CELL_SIZE}px`
  }), []);

  const currentLang = useMemo(() => 
    (localStorage.getItem('language') as 'en' | 'pt') || 'pt', []
  );

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      {/* Header do jogo */}
      <div className="flex justify-between items-center w-full max-w-md">
        <div className="text-white font-bold">
          {currentLang === 'pt' ? 'Pontuação' : 'Score'}: 
          <span className="text-purplePrimary ml-1">{gameState.score}</span>
          <span className="text-xs text-slate-400 ml-2">
            ({currentLang === 'pt' ? 'Velocidade' : 'Speed'}: {Math.round((INITIAL_SPEED - gameState.speed) / SPEED_INCREMENT + 1)})
          </span>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition-colors text-xl hover:scale-110"
        >
          ✕
        </button>
      </div>

      {/* Grid do jogo com melhor performance */}
      <div 
        className="relative bg-slate-900 border-2 border-purplePrimary/50 rounded-lg overflow-hidden shadow-lg"
        style={gridStyle}
      >
        {/* Cobra renderizada de forma otimizada */}
        {gameState.snake.map((segment, index) => (
          <div
            key={`${segment.x}-${segment.y}-${index}`}
            className={`absolute transition-all duration-75 ${
              index === 0 
                ? 'bg-purplePrimary shadow-sm shadow-purplePrimary/50' 
                : 'bg-purple-400'
            } ${index === 0 ? 'border-2 border-purple-300' : 'border border-purple-300/50'}`}
            style={{
              left: `${segment.x * CELL_SIZE}px`,
              top: `${segment.y * CELL_SIZE}px`,
              width: `${CELL_SIZE}px`,
              height: `${CELL_SIZE}px`,
              borderRadius: index === 0 ? '3px' : '2px',
              zIndex: gameState.snake.length - index
            }}
          />
        ))}

        {/* Comida com animação pulsante */}
        <div
          className="absolute bg-red-500 rounded-full border-2 border-red-300 animate-pulse shadow-sm shadow-red-500/50"
          style={{
            left: `${gameState.food.x * CELL_SIZE}px`,
            top: `${gameState.food.y * CELL_SIZE}px`,
            width: `${CELL_SIZE}px`,
            height: `${CELL_SIZE}px`
          }}
        />

        {/* Overlay de estado melhorado */}
        {(!gameState.gameStarted || gameState.isPaused || gameState.gameOver) && (
          <div className="absolute inset-0 bg-black/85 backdrop-blur-sm flex flex-col items-center justify-center text-white text-center">
            {!gameState.gameStarted && (
              <>
                <h3 className="text-xl font-bold mb-2">🐍 SNAKE GAME</h3>
                <p className="text-sm mb-4 animate-pulse">
                  {currentLang === 'pt' ? 'Pressione ESPAÇO para começar' : 'Press SPACE to start'}
                </p>
                
                {/* Controles visuais */}
                <div className="flex flex-col items-center space-y-3 mb-4">
                  <div className="text-xs text-slate-300">
                    {currentLang === 'pt' ? 'Controles de movimento:' : 'Movement controls:'}
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {/* Setas */}
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-slate-400 mb-1">
                        {currentLang === 'pt' ? 'Setas' : 'Arrows'}
                      </div>
                      <div className="grid grid-cols-3 gap-1">
                        <div></div>
                        <div className="bg-slate-700 rounded px-2 py-1 text-xs">↑</div>
                        <div></div>
                        <div className="bg-slate-700 rounded px-2 py-1 text-xs">←</div>
                        <div className="bg-slate-700 rounded px-2 py-1 text-xs">↓</div>
                        <div className="bg-slate-700 rounded px-2 py-1 text-xs">→</div>
                      </div>
                    </div>

                    <div className="text-slate-500">OU</div>

                    {/* WASD */}
                    <div className="flex flex-col items-center">
                      <div className="text-xs text-slate-400 mb-1">WASD</div>
                      <div className="grid grid-cols-3 gap-1">
                        <div></div>
                        <div className="bg-slate-700 rounded px-2 py-1 text-xs">W</div>
                        <div></div>
                        <div className="bg-slate-700 rounded px-2 py-1 text-xs">A</div>
                        <div className="bg-slate-700 rounded px-2 py-1 text-xs">S</div>
                        <div className="bg-slate-700 rounded px-2 py-1 text-xs">D</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-400 space-y-1">
                  <p>P {currentLang === 'pt' ? 'para pausar' : 'to pause'} | ESC {currentLang === 'pt' ? 'para sair' : 'to exit'}</p>
                </div>
              </>
            )}
            
            {gameState.isPaused && !gameState.gameOver && (
              <>
                <h3 className="text-xl font-bold mb-2 animate-pulse">⏸️ {currentLang === 'pt' ? 'PAUSADO' : 'PAUSED'}</h3>
                <p className="text-sm">
                  {currentLang === 'pt' ? 'Pressione P para continuar' : 'Press P to continue'}
                </p>
              </>
            )}
            
            {gameState.gameOver && (
              <div className="animate-in slide-in-from-bottom duration-300">
                <h3 className="text-xl font-bold mb-2">💀 GAME OVER</h3>
                <p className="text-sm mb-2">
                  {currentLang === 'pt' ? 'Pontuação Final' : 'Final Score'}: 
                  <span className="text-purplePrimary font-bold ml-1">{gameState.score}</span>
                </p>
                <p className="text-xs text-slate-300 animate-pulse">
                  {currentLang === 'pt' ? 'Pressione R para jogar novamente' : 'Press R to play again'}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Controles aprimorados */}
      <div className="text-xs text-slate-400 text-center max-w-md">
        <p>🎮 {currentLang === 'pt' ? 'Controles' : 'Controls'}: ↑↓←→ / WASD | P {currentLang === 'pt' ? '(pausar)' : '(pause)'} | ESC {currentLang === 'pt' ? '(sair)' : '(exit)'}</p>
        {gameState.gameStarted && (
          <p className="text-xs text-slate-500 mt-1">
            {currentLang === 'pt' ? 'A velocidade aumenta a cada comida!' : 'Speed increases with each food!'}
          </p>
        )}
      </div>
    </div>
  );
};