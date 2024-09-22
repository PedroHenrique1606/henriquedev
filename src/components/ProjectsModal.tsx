import { Button } from "@/components/Button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import VideoPlayer from "./VideoPlayer"
import Image from "next/image";

interface ProjectsModalProps {
    coverImage: string;
    titleModalHover: string;
    sourceVideo: string;
    descriptionProject: string;
    titleOfVideo: string;
    subtitleOfVideo: string;
    linkCoverVideo: string;
    destinateLinkButtonWeb: string;
    destinateLinkButtonGithub: string;
}

export function ProjectsModal({ coverImage, titleModalHover, descriptionProject, sourceVideo, titleOfVideo, subtitleOfVideo, linkCoverVideo, destinateLinkButtonWeb, destinateLinkButtonGithub }: ProjectsModalProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="relative group hover:cursor-pointer w-96">
                    <div className="rounded-lg w-full transition duration-300 ease-in-out filter group-hover:brightness-50">
                        <Image src={coverImage} alt="dasda" className="rounded-lg" />
                    </div>
                    <p
                        className="absolute bottom-0 left-0 w-full text-center text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-3 bg-black bg-opacity-50"
                    >
                        {titleModalHover}
                    </p>
                </div>
            </DialogTrigger>
            <DialogContent className="bg-customBlue">
                <DialogHeader>
                    <DialogTitle className="text-white font-semibold text-xl">{titleModalHover}</DialogTitle>
                    <DialogDescription className="text-white">
                        {descriptionProject}
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full">
                    <VideoPlayer posterImage={linkCoverVideo} sourceVideo={sourceVideo} titleOfVideo={titleOfVideo} subtitleOfVideo={subtitleOfVideo} />
                </div>
                <DialogFooter>
                    <Button text="See Project" destineLink={destinateLinkButtonWeb} />
                    <Button text="See Repository" destineLink={destinateLinkButtonGithub} />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
