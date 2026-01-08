import { useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp', 
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight'
];

export const useKonamiCode = () => {
  const router = useRouter();

  const activateEasterEgg = useCallback(() => {
    router.push('/snake');
  }, [router]);

  useEffect(() => {
    let keySequence: string[] = [];

    const handleKeyDown = (event: KeyboardEvent) => {
      // Previne ativação acidental durante digitação em inputs
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      keySequence = [...keySequence, event.code];
      
      // Mantém apenas as últimas teclas necessárias
      if (keySequence.length > KONAMI_CODE.length) {
        keySequence.shift();
      }

      // Verifica se a sequência está correta
      const isCorrectSequence = keySequence.length === KONAMI_CODE.length && 
        keySequence.every((key, index) => key === KONAMI_CODE[index]);

      if (isCorrectSequence) {
        activateEasterEgg();
        keySequence = [];
        return;
      }

      // Reset se a sequência atual não corresponde ao início do código
      const isValidStart = KONAMI_CODE.slice(0, keySequence.length).every((key, index) => key === keySequence[index]);
      
      if (!isValidStart) {
        keySequence = [event.code]; // Começa nova sequência
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      keySequence = [];
    };
  }, [activateEasterEgg]);

  return {};
};