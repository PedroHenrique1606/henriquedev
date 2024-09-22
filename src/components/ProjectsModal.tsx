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

export function ProjectsModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="relative group hover:cursor-pointer w-96">
                    <img
                        className="rounded-lg w-full transition duration-300 ease-in-out filter group-hover:brightness-50"
                        src="https://pedrofolio.vercel.app/assets/habits.png"
                        alt="Logo this project"
                    />
                    <p
                        className="absolute bottom-0 left-0 w-full text-center text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out p-3 bg-black bg-opacity-50"
                    >
                        Habits
                    </p>
                </div>
            </DialogTrigger>
            <DialogContent className="bg-customBlue">
                <DialogHeader>
                    <DialogTitle className="text-white font-semibold text-xl">Project</DialogTitle>
                    <DialogDescription className="text-white">
                        This project consists of helping you to make a checklist of your day-to-day life, recording the habits made and accurately tracking your daily habits.
                    </DialogDescription>
                </DialogHeader>
                <VideoPlayer />
                <DialogFooter>
                    <Button text="See the Project" destineLink="https://habits-omega.vercel.app/" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
