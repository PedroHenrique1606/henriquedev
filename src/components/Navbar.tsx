import Image from "next/image";
import PedroLogo from "@/assets/logo-petrus.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-customBlueSecondary p-5 fixed top-0 w-full z-[9999]">
      <div className="container mx-auto flex justify-evenly items-center">
        <div className="text-white text-xl font-bold flex items-center gap-4">
          <a href="/" className="no-underline flex gap-2">
            <Image
              src={PedroLogo}
              alt="Logo of Pedro Henrique"
              className="w-7"
            />
            <p>Pedro H</p>
          </a>
        </div>

        <div className="flex space-x-16 font-medium">
          <a
            href="/"
            className="text-white transition-all duration-150 hover:text-indigo-600"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white transition-all duration-150 hover:text-indigo-600"
          >
            About
          </a>
          <a
            href="#"
            className="text-white transition-all duration-150 hover:text-indigo-600"
          >
            Experience
          </a>
          <a
            href="#"
            className="text-white transition-all duration-150 hover:text-indigo-600"
          >
            Projects
          </a>
          <a
            href="https://blogpetrus.netlify.app/"
            target="_blank"
            className="text-white transition-all duration-150 hover:text-indigo-600"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
