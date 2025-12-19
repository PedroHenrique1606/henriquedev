'use client'

import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { ArrowSquareOut, GithubLogo, X } from "@phosphor-icons/react/dist/ssr";

interface ProjectCardProps {
  coverImage: string;
  title: string;
  description: string;
  linkCoverVideo: string;
  destinateLinkButtonWeb?: string;
  destinateLinkButtonGithub: string;
}

export function ProjectCard({
  coverImage,
  title,
  description,
  linkCoverVideo,
  destinateLinkButtonWeb,
  destinateLinkButtonGithub,
}: ProjectCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <div 
          className="cursor-pointer w-full group" 
          role="button" 
          tabIndex={0} 
          aria-label={`Ver detalhes do projeto ${title}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsDialogOpen(true);
            }
          }}
        >
          <div className="bg-gradient-to-br from-customBlueSecondary/90 to-customBlueSecondary backdrop-blur-sm border-2 border-purplePrimary/30 rounded-xl overflow-hidden transition-all duration-200 hover:border-purplePrimary/60 hover:shadow-lg hover:shadow-purplePrimary/20">
            <div className="relative w-full h-64 overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={coverImage}
                  alt={title}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 opacity-80 group-hover:opacity-90 transition-opacity duration-200"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-purplePrimary/10">
                  <div className="text-white text-xl font-bold">Ver Detalhes</div>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <h3 className="text-white font-bold text-xl group-hover:text-purplePrimary transition-colors duration-200">
                {title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed line-clamp-2 group-hover:text-slate-200 transition-colors duration-200">
                {description}
              </p>
              <div className="flex items-center gap-4 pt-2">
                {destinateLinkButtonWeb && (
                <div className="flex items-center gap-2 text-purplePrimary text-xs font-semibold" aria-label="Projeto disponível na web">
                  <ArrowSquareOut size={14} aria-hidden="true" />
                  <span>Web</span>
                </div>
              )}
                <div className="flex items-center gap-2 text-purplePrimary text-xs font-semibold" aria-label="Código disponível no GitHub">
                  <GithubLogo size={14} aria-hidden="true" />
                  <span>GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="bg-customBlueSecondary/98 backdrop-blur-xl border border-purplePrimary/30 max-w-[95%] sm:max-w-4xl p-0 gap-0">
        <div className="relative w-full h-[60vh] max-h-[500px] overflow-hidden">
          <Image
            src={linkCoverVideo}
            alt={title}
            fill
            loading="lazy"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-customBlueSecondary via-transparent to-transparent"></div>
          <button
            onClick={() => setIsDialogOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm text-white transition-all duration-200 hover:scale-110"
            aria-label="Fechar modal de projeto"
            aria-expanded="true"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-white font-bold text-2xl md:text-3xl bg-gradient-to-r from-white via-purplePrimary/80 to-white bg-clip-text text-transparent">
              {title}
            </DialogTitle>
            <DialogDescription className="text-slate-300 text-base md:text-lg leading-relaxed">
              {description}
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
            {destinateLinkButtonWeb && (
              <a 
                href={destinateLinkButtonWeb} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Ver projeto ${title} na web`}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-purplePrimary hover:bg-purplePrimary/90 text-white font-medium text-sm rounded-md transition-colors duration-200"
              >
                <ArrowSquareOut size={16} aria-hidden="true" />
                <span>Ver Projeto</span>
              </a>
            )}
            <a 
              href={destinateLinkButtonGithub} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Ver código do projeto ${title} no GitHub`}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-transparent hover:bg-white/5 text-white font-medium text-sm rounded-md border border-white/20 hover:border-white/30 transition-colors duration-200"
            >
              <GithubLogo size={16} aria-hidden="true" />
              <span>Ver Código</span>
            </a>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}