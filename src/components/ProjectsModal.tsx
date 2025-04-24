import { Button } from "@/components/Button";
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

interface ProjectsModalProps {
  coverImage: string;
  titleModalHover: string;
  sourceVideo: string;
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
        <div className="relative group hover:cursor-pointer w-full sm:w-96">
          <div className="rounded-lg w-full transition duration-300 ease-in-out filter group-hover:brightness-50">
            <Image
              src={coverImage}
              alt="Project cover"
              width={384} // Defina um tamanho base para a imagem
              height={216}
              className="rounded-lg w-full h-auto"
            />
          </div>
          <p className="absolute bottom-0 left-0 w-full text-center text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-3 bg-black bg-opacity-50">
            {titleModalHover}
          </p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-customBlue max-w-[95%] sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-white font-semibold text-lg sm:text-xl">
            {titleModalHover}
          </DialogTitle>
          <DialogDescription className="text-white text-sm sm:text-base">
            {descriptionProject}
          </DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <VideoPlayer
            posterImage={linkCoverVideo}
            sourceVideo={sourceVideo}
            titleOfVideo={titleOfVideo}
            subtitleOfVideo={subtitleOfVideo}
          />
        </div>
        <DialogFooter className="flex flex-col sm:flex-row gap-2">
          {destinateLinkButtonWeb && (
            <Button
              text="See Project"
              destineLink={destinateLinkButtonWeb}
            />
          )}
          <Button
            text="See Repository"
            destineLink={destinateLinkButtonGithub}
          />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}