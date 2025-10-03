"use client";

import { useEffect, useState } from "react";

interface IndicatorsProps {
    numberIndicator: string;
    titleIndicator: string;
    conectiveIndicator: string;
    predicateIndicator: string;
}

export const Indicators: React.FC<IndicatorsProps> = ({ numberIndicator, titleIndicator, conectiveIndicator, predicateIndicator }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    // Função para animar o contador
    useEffect(() => {
        if (!isVisible) return;

        const isInfinity = numberIndicator === "∞";
        if (isInfinity) {
            setCount(0);
            return;
        }

        const targetNumber = parseInt(numberIndicator);
        if (isNaN(targetNumber)) return;

        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = targetNumber / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= targetNumber) {
                setCount(targetNumber);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [numberIndicator, isVisible]);

    // Observer para detectar quando o componente entra na tela
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById(`indicator-${titleIndicator}`);
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [titleIndicator]);

    return (
        <div 
            id={`indicator-${titleIndicator}`}
            className='flex gap-2 items-center justify-center text-white hover:scale-105 transition-transform duration-300 cursor-default animate-in fade-in slide-in-from-bottom'
        >
            <p className='font-bold text-4xl text-purplePrimary animate-pulse'>
                {numberIndicator === "∞" ? "∞" : count} +
            </p>
            <p className='text-slate-400 leading-6 text-sm hover:text-slate-300 transition-colors duration-300'>
                {titleIndicator} <br />
                {conectiveIndicator} <br />
                {predicateIndicator}
            </p>
        </div>
    )
}