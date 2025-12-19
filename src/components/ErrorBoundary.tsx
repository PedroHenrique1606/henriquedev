'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary capturou um erro:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div 
          role="alert" 
          className="min-h-screen flex items-center justify-center p-4 bg-customBlueSecondary"
        >
          <div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-purplePrimary/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              Algo deu errado
            </h2>
            <p className="text-slate-300 mb-4">
              Ocorreu um erro inesperado. Por favor, tente recarregar a página.
            </p>
            {this.state.error && (
              <details className="mb-4">
                <summary className="text-purplePrimary cursor-pointer text-sm mb-2">
                  Detalhes do erro
                </summary>
                <pre className="text-xs text-slate-400 bg-black/20 p-2 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="bg-purplePrimary hover:bg-purplePrimary/90 text-white font-medium px-4 py-2 rounded-lg transition-colors"
              aria-label="Recarregar página"
            >
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

