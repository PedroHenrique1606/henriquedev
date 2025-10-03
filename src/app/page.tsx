"use client";

import AngularLogo from "@/assets/angularlogo.svg";
import LogoBlog from "@/assets/blogcapa.svg";
import CSSLogo from "@/assets/csslogo.svg";
import FastifyLogo from "@/assets/fastifylogo.svg";
import HTMLLogo from "@/assets/htmllogo.svg";
import JavaScriptLogo from "@/assets/javascriptlogo.svg";
import NextJsLogo from "@/assets/nextjslogo.svg";
import NodeJsLogo from "@/assets/nodejslogo.svg";
import sacrosanctumLogo from "@/assets/sacrosanctumlogo.svg";
import PedroProfile from "@/assets/pedro-profile.svg";
import PlannerAppCapa from "@/assets/plannerapp.svg";
import PlannerWebCapa from "@/assets/plannerwebcapa.svg";
import ReactLogo from "@/assets/reactjs.svg";
import ReactNativeLogo from "@/assets/reactnativelogo.svg";
import sacrosanctumPage from "@/assets/sacrosanctumImage.svg";
import TailwindCSSLogo from "@/assets/tailwindcsslogo.svg";
import LogoTravelling from "@/assets/travellingcapa.svg";
import TypeScriptLogo from "@/assets/typescriptlogo.svg";
import { Button } from "@/components/Button";
import { Education } from "@/components/Education";
import { EasterEggConfetti } from "@/components/EasterEggConfetti";
import { EasterEggModal } from "@/components/EasterEggModal";
import Footer from "@/components/Footer";
import { Indicators } from "@/components/Indicators";
import Navbar from "@/components/Navbar";
import { ProjectsModal } from "@/components/ProjectsModal";
import { Skills } from "@/components/Skills";
import { Topic } from "@/components/Topic";
import { Spotlight } from "@/components/ui/spotlight";
import { TextAnimate } from "@/components/ui/text-animate";
import { useLanguage } from "@/contexts/LanguageContext";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import {
  ArrowCircleRight,
  ArrowDown,
  ArrowLineDown,
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Home() {
  const { t } = useLanguage();
  const { isActivated, closeEasterEgg } = useKonamiCode();
  
  return (
    <div>
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="space-y-32 md:space-y-60">
        <div className="flex items-center justify-center">
          <Navbar />
        </div>
        <section className="flex items-center justify-center mx-8">
          <div className="hidden md:flex flex-col space-y-7 mx-8">
            <a target="_blank" href="https://github.com/PedroHenrique1606" className="animate-in slide-in-from-left delay-300 transition-all duration-300 ease-in-out hover:bg-purplePrimary hover:scale-110 hover:rotate-12 p-2 rounded-full group">
              <GithubLogo size={28} className="text-purplePrimary group-hover:text-white transition-all duration-300 ease-in-out" />
            </a>
            <a target="_blank" href="https://www.instagram.com/pedrohenrique.trc/" className="animate-in slide-in-from-left delay-500 transition-all duration-300 ease-in-out hover:bg-purplePrimary hover:scale-110 hover:-rotate-12 p-2 rounded-full group">
              <InstagramLogo size={28} className="text-purplePrimary group-hover:text-white transition-all duration-300 ease-in-out" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/pedro-henrique-melo-a7a700231" className="animate-in slide-in-from-left delay-700 transition-all duration-300 ease-in-out hover:bg-purplePrimary hover:scale-110 hover:rotate-12 p-2 rounded-full group">
              <LinkedinLogo size={28} className="text-purplePrimary group-hover:text-white transition-all duration-300 ease-in-out" />
            </a>
          </div>
          <div className="space-y-6 md:mr-16 ">
            <div className="flex md:hidden items-center justify-center relative">
              <div className="absolute bg-purplePrimary blur-lg rounded-full w-64 h-64 animate-pulse"></div>
              <Image
                src={PedroProfile}
                alt="Profile Picture of Pedro Henrique"
                className="relative w-60 h-60 rounded-full shadow-lg border-4 border-purplePrimary"
              />
            </div>
            <TextAnimate className="font-semibold text-white text-3xl md:text-6xl" animation="blurInUp" by="character" once>
              {t("hero.greeting")}
            </TextAnimate>
            <h3 className="text-slate-400 font-semibold text-sm md:text-lg">
              {t("hero.role")}
            </h3>
            <p className="text-slate-400 leading-6">
              {t("hero.description.line1")}
              <br /> {t("hero.description.line2")} <br />
              {t("hero.description.line3")}
              <br /> {t("hero.description.line4")}
            </p>
            <Button
              text={t("hero.contact")}
              destineLink="mailto:pedromelo.dev.contato@gmail.com"
              icon={ArrowCircleRight}
            />
          </div>
          <div className="hidden md:flex items-center justify-center relative">
            <div className="absolute bg-purplePrimary blur-lg rounded-full w-full h-full animate-pulse"></div>
            <Image
              src={PedroProfile}
              alt="Profile Picture of Pedro Henrique"
              className="relative rounded-full shadow-lg border-4 border-purplePrimary"
              layout="intrinsic"
            />
          </div>
        </section>
        <div className="flex items-center justify-center gap-3">
          <p className="text-white font-medium">{t("hero.scrollDown")}</p>
          <ArrowDown size={24} className="text-purplePrimary animate-bounce" />
        </div>
        <Topic title={t("about.title")} titleabsolute="About" titledecoration="Me" />
        <section className="flex flex-col items-center justify-center mx-4 md:mx-16 lg:mx-32">
          <div className="max-w-4xl w-full">
            <div className="animate-in fade-in duration-700">
              <div className="space-y-5">
                <div className="animate-in slide-in-from-top duration-500 delay-150">
                  <h4 className="font-medium text-white text-lg md:text-xl">
                    {t("about.subtitle")} <span className="text-purplePrimary font-semibold">{t("about.name")}</span>
                  </h4>
                  <p className="text-slate-400 text-sm md:text-base mt-1">{t("about.role")}</p>
                </div>

                <div className="animate-in slide-in-from-bottom duration-500 delay-300 text-slate-300 leading-6 text-sm md:text-base space-y-3">
                  <p>
                    {t("about.paragraph1")}
                  </p>

                  <p>
                    {t("about.paragraph2")}
                  </p>

                  <p>
                    {t("about.paragraph3")}
                  </p>

                  <p>
                    {t("about.paragraph4")}
                  </p>
                </div>

                <div className="animate-in slide-in-from-bottom duration-500 delay-500 flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                  <Indicators
                    numberIndicator="25"
                    titleIndicator={t("about.certificates")}
                    conectiveIndicator="and"
                    predicateIndicator="certifications"
                  />
                  <Indicators
                    numberIndicator="30"
                    titleIndicator={t("about.projects")}
                    conectiveIndicator="on"
                    predicateIndicator="GitHub"
                  />
                  <Indicators
                    numberIndicator="∞"
                    titleIndicator={t("about.coffee")}
                    conectiveIndicator="of"
                    predicateIndicator="coffee"
                  />
                </div>

                <div className="animate-in slide-in-from-bottom duration-500 delay-700 flex justify-center md:justify-start pt-2">
                  <Button
                    text={t("about.downloadCV")}
                    destineLink="https://drive.google.com/file/d/1Pq262EN6xO34nEXClkfh9CP0atQylNKi/view?usp=sharing"
                    icon={ArrowLineDown}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Topic title={t("experience.title")} titledecoration="Experience" />
        <section className="flex items-center justify-center space-y-8 flex-col mx-3">
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-3xl">
              {t("experience.subtitle")}
            </h4>
            <p className="text-white">
              {t("experience.description.line1")}
              {t("experience.description.line2")}
              <br />
              {t("experience.description.line3")}
            </p>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-2/5 md:items-start items-center md:justify-start justify-center gap-5">
            <div className="flex flex-col gap-5 w-full">
              <p className="text-white font-semibold py-2 px-3 bg-purplePrimary rounded-md min-w-max animate-in slide-in-from-left duration-500">
                {t("experience.education")}
              </p>
              <div className="animate-in slide-in-from-left duration-500 delay-100">
                <Education
                  dateRange={`2025 - ${t("date.inProgress")}`}
                  course={t("education.bachelor")}
                  institution="Estácio"
                />
              </div>
              <div className="animate-in slide-in-from-left duration-500 delay-150">
                <Education
                  dateRange={`2023 - 2025`}
                  course={t("education.developer")}
                  institution="ArgoTech"
                />
              </div>
              <div className="animate-in slide-in-from-left duration-500 delay-200">
                <Education
                  dateRange={`2024 - ${t("date.onHold")}`}
                  course={t("education.telecom")}
                  institution="IFCE"
                />
              </div>
              <div className="animate-in slide-in-from-left duration-500 delay-250">
                <Education
                  dateRange="2021 - 2023"
                  course={t("education.network")}
                  institution="EEEP Leonel de Moura Brizola"
                />
              </div>
              <div className="animate-in slide-in-from-left duration-500 delay-300">
                <Education
                  dateRange="2023 - 2023"
                  course={t("education.networking")}
                  institution="IBSEC"
                />
              </div>
              <div className="animate-in slide-in-from-left duration-500 delay-350">
                <Education
                  dateRange="2022 - 2022"
                  course={t("education.assembly")}
                  institution="EEEP Leonel de Moura Brizola"
                />
              </div>
              <div className="animate-in slide-in-from-left duration-500 delay-400">
                <Education
                  dateRange="2021 - 2021"
                  course={t("education.programming")}
                  institution="EEEP Leonel de Moura Brizola"
                />
              </div>
            </div>

            <div className="flex flex-col gap-5 w-full">
              <p className="text-white font-semibold py-2 px-3 bg-purplePrimary rounded-md min-w-max animate-in slide-in-from-right duration-500">
                {t("experience.skills")}
              </p>
              <div className="animate-in slide-in-from-right duration-500 delay-100">
                <Skills text="HTML" icon={HTMLLogo} />
              </div>
              <div className="animate-in slide-in-from-right duration-500 delay-150">
                <Skills text="CSS" icon={CSSLogo} />
              </div>
              <div className="animate-in slide-in-from-right duration-500 delay-200">
                <Skills text="JAVASCRIPT" icon={JavaScriptLogo} />
              </div>
              <div className="animate-in slide-in-from-right duration-500 delay-250">
                <Skills text="TAILWIND CSS" icon={TailwindCSSLogo} />
              </div>
              <div className="animate-in slide-in-from-right duration-500 delay-300">
                <Skills text="REACT JS" icon={ReactLogo} />
              </div>
              <div className="animate-in slide-in-from-right duration-500 delay-350">
                <Skills text="ANGULAR" icon={AngularLogo} />
              </div>
              <div className="animate-in slide-in-from-right duration-500 delay-400">
                <Skills text="REACT NATIVE" icon={ReactNativeLogo} />
              </div>
              <div className="animate-in slide-in-from-right duration-500 delay-450">
                <Skills text="NEXT JS" icon={NextJsLogo} />
              </div>
              <div className="animate-in slide-in-from-right duration-500 delay-500">
                <Skills text="NODE JS" icon={NodeJsLogo} />
              </div>
              <div className="animate-in slide-in-from-right duration-500 delay-550">
                <Skills text="FASTIFY" icon={FastifyLogo} />
              </div>
              <div className="animate-in slide-in-from-right duration-500 delay-600">
                <Skills text="TYPESCRIPT" icon={TypeScriptLogo} />
              </div>
            </div>
          </div>

        </section>
        <Topic title={t("projects.title")} titledecoration="Projects" />
        <section className="px-4 md:px-8 lg:px-16">
          {/* Layout padrão: 1 coluna mobile, 2 colunas tablet, 3 colunas desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Projeto 1: Blog Petrus */}
            <div className="flex justify-center animate-in slide-in-from-bottom duration-700 delay-200">
              <ProjectsModal
                coverImage={LogoBlog}
                sourceVideo="https://hospedage.vercel.app/blog.mp4"
                titleModalHover={t("projects.blog.title")}
                descriptionProject={t("projects.blog.description")}
                titleOfVideo={t("projects.blog.title")}
                subtitleOfVideo={t("projects.blog.subtitle")}
                linkCoverVideo="https://hospedage.vercel.app/blog-cover.png"
                destinateLinkButtonGithub="https://github.com/PedroHenrique1606/blog-petrus"
                destinateLinkButtonWeb="https://blogpetrus.netlify.app/"
              />
            </div>

            {/* Projeto 2: Planner Web */}
            <div className="flex justify-center animate-in slide-in-from-bottom duration-700 delay-300">
              <ProjectsModal
                coverImage={PlannerWebCapa}
                sourceVideo="https://hospedandodnv.vercel.app/plannerwebedited.mp4"
                titleModalHover={t("projects.planner.title")}
                descriptionProject={t("projects.planner.description")}
                titleOfVideo={t("projects.planner.title")}
                subtitleOfVideo={t("projects.planner.subtitle")}
                linkCoverVideo="https://hospedandodnv.vercel.app/thumb-plannerweb.png"
                destinateLinkButtonGithub="https://github.com/PedroHenrique1606/planner-web"
              />
            </div>

            {/* Projeto 3: Travelling */}
            <div className="flex justify-center animate-in slide-in-from-bottom duration-700 delay-400">
              <ProjectsModal
                coverImage={LogoTravelling}
                sourceVideo="https://hospedage.vercel.app/travelling.mp4"
                titleModalHover={t("projects.travelling.title")}
                descriptionProject={t("projects.travelling.description")}
                titleOfVideo={t("projects.travelling.title")}
                subtitleOfVideo={t("projects.travelling.subtitle")}
                linkCoverVideo="https://hospedage.vercel.app/travelcover.png"
                destinateLinkButtonGithub="https://github.com/PedroHenrique1606/travelling"
                destinateLinkButtonWeb="https://travelling-page.vercel.app/"
              />
            </div>

            {/* Projeto 4: Sacrosanctum */}
            <div className="flex justify-center animate-in slide-in-from-bottom duration-700 delay-500">
              <ProjectsModal
                coverImage={sacrosanctumLogo}
                titleModalHover={t("projects.sacrosanctum.title")}
                descriptionProject={t("projects.sacrosanctum.description")}
                titleOfVideo={t("projects.sacrosanctum.title")}
                subtitleOfVideo={t("projects.sacrosanctum.subtitle")}
                linkCoverVideo={sacrosanctumPage}
                destinateLinkButtonWeb="https://sacrosanctum.vercel.app/"
                destinateLinkButtonGithub="https://github.com/PedroHenrique1606/sacrosanctum"
              />
            </div>

            {/* Projeto 5: Planner App */}
            <div className="flex justify-center animate-in slide-in-from-bottom duration-700 delay-600">
              <ProjectsModal
                coverImage={PlannerAppCapa}
                sourceVideo="https://hospedandodnv.vercel.app/olannerappedited2.mp4"
                titleModalHover={t("projects.plannerApp.title")}
                descriptionProject={t("projects.plannerApp.description")}
                titleOfVideo={t("projects.plannerApp.title")}
                subtitleOfVideo={t("projects.plannerApp.subtitle")}
                linkCoverVideo="https://hospedandodnv.vercel.app/plannerapp.png"
                destinateLinkButtonGithub="https://github.com/PedroHenrique1606/plannerapp"
              />
            </div>

          </div>
        </section>
        <Footer />
      </div>
      
      {/* 🎮 EASTER EGG - Konami Code */}
      <EasterEggConfetti isActive={isActivated} />
      <EasterEggModal isActive={isActivated} onClose={closeEasterEgg} />
    </div>
  );
}
