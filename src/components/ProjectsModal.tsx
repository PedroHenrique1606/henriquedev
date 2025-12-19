import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import VideoPlayer from "./VideoPlayer";
import Image from "next/image";
import { ArrowSquareOut, GithubLogo } from "@phosphor-icons/react/dist/ssr";

interface ProjectsModalProps {
  coverImage: string;
  titleModalHover: string;
  sourceVideo?: string;  // Tornar 'sourceVideo' opcional
  descriptionProject: string;
  titleOfVideo: string;
  subtitleOfVideo: string;
  linkCoverVideo: string;
  destinateLinkButtonWeb?: string;
  destinateLinkButtonGithub: string;
}

export function ProjectsModal({
  coverImage,
  titleModalHover,
  descriptionProject,
  sourceVideo,
  titleOfVideo,
  subtitleOfVideo,
  linkCoverVideo,
  destinateLinkButtonWeb,
  destinateLinkButtonGithub,
}: ProjectsModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative group hover:cursor-pointer w-full max-w-sm mx-auto">
          {/* Card Container com glassmorphism */}
          <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm border border-white/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-purplePrimary/20">
            
            {/* Imagem do Projeto */}
            <div className="relative overflow-hidden">
              <Image
                src={coverImage}
                alt={`Capa do projeto ${titleModalHover}`}
                width={384}
                height={216}
                loading="lazy"
                className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110"
              />
              
              {/* Overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
            </div>

            {/* Conteúdo do Card */}
            <div className="p-4">
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-white transition-colors duration-300">
                {titleModalHover}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                {descriptionProject}
              </p>
            </div>

            {/* Efeito de borda animada */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-purplePrimary via-blue-500 to-purplePrimary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"></div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-customBlue/95 backdrop-blur-xl border border-white/20 max-w-[90%] sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <DialogHeader className="space-y-3">
          <DialogTitle className="text-white font-bold text-lg sm:text-xl bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            {titleModalHover}
          </DialogTitle>
          <DialogDescription className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {descriptionProject}
          </DialogDescription>
        </DialogHeader>
        
        {/* Container do vídeo/imagem com bordas arredondadas */}
        <div className="w-full rounded-xl overflow-hidden bg-black/50 border border-white/10">
          {sourceVideo ? (
            <VideoPlayer
              posterImage={linkCoverVideo}
              sourceVideo={sourceVideo}
              titleOfVideo={titleOfVideo}
              subtitleOfVideo={subtitleOfVideo}
            />
          ) : (
            <div className="relative">
              <Image
                src={linkCoverVideo}
                alt={`Preview do projeto ${titleModalHover}`}
                width={800}
                height={450}
                loading="lazy"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          )}
        </div>

        {/* Informações do projeto */}
        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
          <h4 className="text-white font-semibold text-base mb-1">{titleOfVideo}</h4>
          <p className="text-slate-400 text-xs">{subtitleOfVideo}</p>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row gap-2 pt-2">
          {destinateLinkButtonWeb && (
            <div className="flex-1">
              <a 
                href={destinateLinkButtonWeb} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={`Ver projeto ${titleModalHover} na web`}
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-purplePrimary to-blue-600 hover:from-purplePrimary/80 hover:to-blue-600/80 text-white font-medium text-sm rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <ArrowSquareOut size={16} aria-hidden="true" />
                Ver Projeto
              </a>
            </div>
          )}
          <div className="flex-1">
            <a 
              href={destinateLinkButtonGithub} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={`Ver repositório do projeto ${titleModalHover} no GitHub`}
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-medium text-sm rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <GithubLogo size={16} aria-hidden="true" />
              Ver Repositório
            </a>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
