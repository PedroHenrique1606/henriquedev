import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
  return (
    <footer className="bg-purpleSecondary px-40 py-12 flex flex-col space-y-20">
      <div className="flex justify-between">
        <div className="leading-3 space-y-4">
          <h3 className="text-5xl font-semibold text-gray-200">Pedro</h3>
          <p className="text-sm font-medium text-gray-300">Web Developer</p>
        </div>
        <div className="flex items-center justify-center flex-col space-y-5">
          <p className="font-medium text-gray-200 tracking-wider">About More</p>
          <div className="flex gap-3">
            <a
              className="font-medium no-underline text-gray-200"
              href="/"
              target="_blank"
            >
              Home
            </a>
            <a
              className="font-medium no-underline text-gray-200"
              href="/"
              target="_blank"
            >
              About
            </a>
            <a
              className="font-medium no-underline text-gray-200"
              href="/"
              target="_blank"
            >
              Experience
            </a>
            <a
              className="font-medium no-underline text-gray-200"
              href="/"
              target="_blank"
            >
              Portfolio
            </a>
            <a
              className="font-medium no-underline text-gray-200"
              href="https://blogpetrus.netlify.app/"
              target="_blank"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col space-y-5">
          <p className="font-medium text-gray-200 tracking-wider">Follow Me</p>
          <div className="flex gap-8">
            <a target="_blank" href="https://github.com/PedroHenrique1606">
              <GithubLogo size={28} className="text-white" weight="fill" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/pedrohenrique.trc/"
            >
              <InstagramLogo size={28} className="text-white" weight="fill" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/pedro-henrique-melo-da-silva-a7a700231/"
            >
              <LinkedinLogo size={28} className="text-white" weight="fill" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-gray-200 tracking-wider">
          © 2024 by Pedro Henrique. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
