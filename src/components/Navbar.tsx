import Image from "next/image";
import PedroLogo from "@/assets/logo-petrus.svg"

const Navbar: React.FC = () => {
    return (
        <nav className="bg-customBlueSecondary p-5 fixed top-0 w-full z-[9999]">
            <div className="container mx-auto flex justify-evenly items-center">
                <div className="text-white text-xl font-bold flex items-center gap-4">
                    <Image src={PedroLogo} alt="Logo of Pedro Henrique" className="w-7" />
                    <p>
                        Pedro H
                    </p>
                </div>

                <div className="flex space-x-16 font-medium">
                    <a href="#" target="_blank" className="text-white hover:text-indigo-600">
                        Home
                    </a>
                    <a href="#" target="_blank" className="text-white hover:text-indigo-600">
                        About
                    </a>
                    <a href="#" target="_blank" className="text-white hover:text-indigo-600">
                        Skills
                    </a>
                    <a href="#" target="_blank" className="text-white hover:text-indigo-600">
                        Projects
                    </a>
                    <a href="https://blogpetrus.netlify.app/" target="_blank" className="text-white hover:text-indigo-600">
                        Blog
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
