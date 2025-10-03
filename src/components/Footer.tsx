"use client";

import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/contexts/LanguageContext";

const actualDate = new Date().getFullYear()

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-purpleSecondary px-6 md:px-20 lg:px-40 py-12 flex flex-col space-y-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between w-full space-y-10 md:space-y-0">
        <div className="leading-3 space-y-4 text-center md:text-left">
          <h3 className="text-4xl md:text-5xl font-semibold text-gray-200">
            Pedro
          </h3>
          <p className="text-sm font-medium text-gray-300">{t("footer.role")}</p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-5">
          <p className="font-medium text-gray-200 tracking-wider">{t("footer.aboutMore")}</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <a className="font-medium no-underline text-gray-200" href="/" target="_blank">
              {t("nav.home")}
            </a>
            <a className="font-medium no-underline text-gray-200" href="/" target="_blank">
              {t("nav.about")}
            </a>
            <a className="font-medium no-underline text-gray-200" href="/" target="_blank">
              {t("nav.experience")}
            </a>
            <a className="font-medium no-underline text-gray-200" href="https://pedrohenriquedev.netlify.app/" target="_blank">
              Portfolio
            </a>
            <a className="font-medium no-underline text-gray-200" href="https://blogpetrus.netlify.app/" target="_blank">
              Blog
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-5">
          <p className="font-medium text-gray-200 tracking-wider">{t("footer.followMe")}</p>
          <div className="flex gap-6">
            <a target="_blank" href="https://github.com/PedroHenrique1606">
              <GithubLogo size={28} className="text-white" weight="fill" />
            </a>
            <a target="_blank" href="https://www.instagram.com/pedrohenrique.trc/">
              <InstagramLogo size={28} className="text-white" weight="fill" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/pedro-henrique-melo-da-silva-a7a700231/">
              <LinkedinLogo size={28} className="text-white" weight="fill" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-center">
        <p className="text-gray-200 tracking-wider text-sm md:text-base">
          © {actualDate} by Pedro Henrique. {t("footer.copyright")}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
