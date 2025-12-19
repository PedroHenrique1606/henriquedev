'use client'
import PedroLogo from "@/assets/logo-petrus.svg";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSelector } from "./LanguageSelector";
import { useMemo, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const StaggeredMenu = dynamic(() => import("./StaggeredMenu").then(mod => ({ default: mod.StaggeredMenu })), {
  ssr: false,
  loading: () => null
});

const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = useMemo(() => [
    {
      label: t("nav.home"),
      ariaLabel: t("nav.home"),
      link: "#home"
    },
    {
      label: t("nav.about"),
      ariaLabel: t("nav.about"),
      link: "#about"
    },
    {
      label: t("nav.experience"),
      ariaLabel: t("nav.experience"),
      link: "#experience"
    },
    {
      label: t("nav.projects"),
      ariaLabel: t("nav.projects"),
      link: "#projects"
    },
    {
      label: "Blog",
      ariaLabel: "Blog",
      link: "https://blogpetrus.netlify.app/"
    }
  ], [t]);

  const socialItems = useMemo(() => [
    {
      label: "GitHub",
      link: "https://github.com/PedroHenrique1606"
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/pedro-henrique-melo-a7a700231"
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/pedrohenrique.trc/"
    }
  ], []);

  if (!mounted) {
    return null;
  }

  return (
    <StaggeredMenu
      isFixed={true}
      position="right"
      colors={['#0E1B31', '#102048', '#614FD0']}
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      logoUrl={PedroLogo.src}
      menuButtonColor="#ffffff"
      openMenuButtonColor="#614FD0"
      accentColor="#614FD0"
      changeMenuColorOnOpen={true}
      closeOnClickAway={true}
      className="custom-theme-staggered-menu"
      customFooterContent={
        <div className="sm-language-selector">
          <LanguageSelector />
        </div>
      }
    />
  );
};

export default Navbar;
