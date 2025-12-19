"use client";

import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/contexts/LanguageContext";
import GradientText from "@/components/GradientText";
import GlareHover from "@/components/GlareHover";

const actualDate = new Date().getFullYear()

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="relative bg-customBlueSecondary px-6 md:px-20 lg:px-40 py-16 md:py-20 flex flex-col space-y-16 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between w-full space-y-12 md:space-y-0 relative z-10">
        <div className="leading-3 space-y-4 text-center md:text-left">
          <GradientText
            colors={['#ffffff', '#614FD0', '#ffffff']}
            animationSpeed={6}
            className="text-4xl md:text-5xl font-bold"
          >
            Pedro
          </GradientText>
          <p className="text-slate-400 text-sm md:text-base font-medium">{t("footer.role")}</p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-5">
          <p className="font-semibold text-white tracking-wider text-sm md:text-base uppercase">{t("footer.aboutMore")}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a 
              className="font-medium no-underline text-slate-400 hover:text-white transition-colors duration-300 relative group" 
              href="/"
            >
              {t("nav.home")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              className="font-medium no-underline text-slate-400 hover:text-white transition-colors duration-300 relative group" 
              href="/"
            >
              {t("nav.about")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              className="font-medium no-underline text-slate-400 hover:text-white transition-colors duration-300 relative group" 
              href="/"
            >
              {t("nav.experience")}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              className="font-medium no-underline text-slate-400 hover:text-white transition-colors duration-300 relative group" 
              href="https://pedrohenriquedev.netlify.app/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              className="font-medium no-underline text-slate-400 hover:text-white transition-colors duration-300 relative group" 
              href="https://blogpetrus.netlify.app/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-5">
          <p className="font-semibold text-white tracking-wider text-sm md:text-base uppercase">{t("footer.followMe")}</p>
          <div className="flex gap-4">
            <GlareHover
              width="56px"
              height="56px"
              background="transparent"
              borderRadius="12px"
              borderColor="#ffffff"
              glareColor="#ffffff"
              glareOpacity={0.2}
              transitionDuration={400}
              className="group"
            >
              <a 
                target="_blank" 
                href="https://github.com/PedroHenrique1606"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full rounded-xl bg-customBlue/50 hover:bg-white/10 transition-colors duration-300"
              >
                <GithubLogo size={24} className="text-slate-300 group-hover:text-white transition-colors duration-300" weight="fill" />
              </a>
            </GlareHover>
            
            <GlareHover
              width="56px"
              height="56px"
              background="transparent"
              borderRadius="12px"
              borderColor="#ffffff"
              glareColor="#ffffff"
              glareOpacity={0.2}
              transitionDuration={400}
              className="group"
            >
              <a 
                target="_blank" 
                href="https://www.instagram.com/pedrohenrique.trc/"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full rounded-xl bg-customBlue/50 hover:bg-white/10 transition-colors duration-300"
              >
                <InstagramLogo size={24} className="text-slate-300 group-hover:text-white transition-colors duration-300" weight="fill" />
              </a>
            </GlareHover>
            
            <GlareHover
              width="56px"
              height="56px"
              background="transparent"
              borderRadius="12px"
              borderColor="#ffffff"
              glareColor="#ffffff"
              glareOpacity={0.2}
              transitionDuration={400}
              className="group"
            >
              <a 
                target="_blank" 
                href="https://www.linkedin.com/in/pedro-henrique-melo-da-silva-a7a700231/"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full rounded-xl bg-customBlue/50 hover:bg-white/10 transition-colors duration-300"
              >
                <LinkedinLogo size={24} className="text-slate-300 group-hover:text-white transition-colors duration-300" weight="fill" />
              </a>
            </GlareHover>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-center relative z-10">
        <div className="px-6 py-4 border-t border-white/10 w-full">
          <p className="text-slate-400 tracking-wider text-xs md:text-sm">
            © {actualDate} by <span className="text-white font-semibold">Pedro Henrique</span>. {t("footer.copyright")}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
