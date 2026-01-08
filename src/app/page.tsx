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
import PedroLogo from "@/assets/logo-petrus.svg";
import { Button } from "@/components/Button";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import ProfileCard from "@/components/ProfileCard";
import { EasterEggConfetti } from "@/components/EasterEggConfetti";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Topic } from "@/components/Topic";
import { LogoLoop } from "@/components/LogoLoop";
import AnimatedContent from "@/components/AnimatedContent";
import GradientText from "@/components/GradientText";
import GlareHover from "@/components/GlareHover";
import CountUp from "@/components/CountUp";
import { TextAnimate } from "@/components/ui/text-animate";
import { useLanguage } from "@/contexts/LanguageContext";
import { useKonamiCode } from "@/hooks/useKonamiCode";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
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
  useKonamiCode();
  useSmoothScroll();
  
  return (
    <div className="overflow-x-hidden" data-scroll-container>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-purplePrimary focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white"
      >
        Pular para o conteúdo principal
      </a>
      <div className="space-y-16 md:space-y-40">
        <div id="home" className="flex items-center justify-center">
          <Navbar />
        </div>
        <main id="main-content">
        <section className="flex items-center justify-center mx-8 pt-0 pb-12 md:pb-0">
          <div className="hidden md:flex flex-col space-y-7 mx-8">
            <a 
              target="_blank" 
              href="https://github.com/PedroHenrique1606" 
              rel="noopener noreferrer"
              aria-label="Visitar perfil no GitHub"
              className="animate-in slide-in-from-left delay-300 transition-all duration-300 ease-in-out hover:bg-purplePrimary hover:scale-110 hover:rotate-12 p-2 rounded-full group"
            >
              <GithubLogo size={28} className="text-purplePrimary group-hover:text-white transition-all duration-300 ease-in-out" aria-hidden="true" />
            </a>
            <a 
              target="_blank" 
              href="https://www.instagram.com/pedrohenrique.trc/" 
              rel="noopener noreferrer"
              aria-label="Visitar perfil no Instagram"
              className="animate-in slide-in-from-left delay-500 transition-all duration-300 ease-in-out hover:bg-purplePrimary hover:scale-110 hover:-rotate-12 p-2 rounded-full group"
            >
              <InstagramLogo size={28} className="text-purplePrimary group-hover:text-white transition-all duration-300 ease-in-out" aria-hidden="true" />
            </a>
            <a 
              target="_blank" 
              href="https://www.linkedin.com/in/pedro-henrique-melo-a7a700231" 
              rel="noopener noreferrer"
              aria-label="Visitar perfil no LinkedIn"
              className="animate-in slide-in-from-left delay-700 transition-all duration-300 ease-in-out hover:bg-purplePrimary hover:scale-110 hover:rotate-12 p-2 rounded-full group"
            >
              <LinkedinLogo size={28} className="text-purplePrimary group-hover:text-white transition-all duration-300 ease-in-out" aria-hidden="true" />
            </a>
          </div>
          <div className="space-y-6 md:space-y-6 md:mr-16">
            <div className="flex md:hidden items-center justify-center relative mb-4">
              <ProfileCard
                avatarUrl={PedroProfile.src}
                iconUrl={PedroLogo.src}
                innerGradient="linear-gradient(145deg, rgba(97, 79, 208, 0.3) 0%, rgba(97, 79, 208, 0.1) 100%)"
                behindGlowEnabled={true}
                behindGlowColor="#614FD0"
                behindGlowSize="120%"
                enableTilt={true}
                enableMobileTilt={true}
                showUserInfo={true}
                name="Pedro Henrique"
                title={t("hero.role")}
                handle="pedrohenrique1606"
                status="Available"
                contactText={t("hero.contact")}
                onContactClick={() => window.location.href = "mailto:pedromelo.dev.contato@gmail.com"}
                className="w-auto scale-75"
              />
            </div>
            <TextAnimate className="font-semibold text-white text-3xl md:text-6xl" animation="blurInUp" by="character" once>
              {t("hero.greeting")}
            </TextAnimate>
            <h3 className="text-slate-400 font-semibold text-sm md:text-lg">
              {t("hero.role")}
            </h3>
            <p className="text-slate-400 leading-6 text-sm md:text-base">
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
            <ProfileCard
              avatarUrl={PedroProfile.src}
              iconUrl={PedroLogo.src}
              innerGradient="linear-gradient(145deg, rgba(97, 79, 208, 0.3) 0%, rgba(97, 79, 208, 0.1) 100%)"
              behindGlowEnabled={true}
              behindGlowColor="#614FD0"
              behindGlowSize="120%"
              enableTilt={true}
              enableMobileTilt={true}
              showUserInfo={true}
              name="Pedro Henrique"
              title={t("hero.role")}
              handle="pedrohenrique"
              status="Available"
              contactText={t("hero.contact")}
              onContactClick={() => window.location.href = "mailto:pedromelo.dev.contato@gmail.com"}
              className="w-auto"
            />
          </div>
        </section>
        <div className="flex items-center justify-center gap-3 py-12 md:py-8" aria-label="Indicador de scroll">
          <p className="text-white font-medium">{t("hero.scrollDown")}</p>
          <ArrowDown size={24} className="text-purplePrimary animate-bounce" aria-hidden="true" />
        </div>
        <div className="mb-16 md:mb-8">
          <Topic title={t("about.title")} titleabsolute="About" titledecoration="Me" />
        </div>
        <section id="about" className="flex flex-col items-center justify-center mx-4 md:mx-16 lg:mx-32 py-12 md:py-12" data-scroll data-scroll-speed="0.5">
          <div className="max-w-5xl w-full relative">
            <div className="space-y-8 md:space-y-12">
              <AnimatedContent
                direction="vertical"
                reverse={false}
                distance={40}
                duration={0.8}
                delay={0}
                container="[data-scroll-container]"
                className="text-center md:text-left"
              >
                <GradientText
                  colors={['#ffffff', '#614FD0', '#ffffff']}
                  animationSpeed={6}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  {t("about.subtitle")} <span className="text-purplePrimary">{t("about.name")}</span>
                </GradientText>
                <p className="text-slate-400 text-base md:text-lg mt-2 font-medium">
                  {t("about.role")}
                </p>
              </AnimatedContent>

              <div className="relative">
                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={30}
                  duration={0.7}
                  delay={0.2}
                  container="[data-scroll-container]"
                  className="space-y-4 text-slate-300 leading-relaxed text-base md:text-lg"
                >
                  <p className="opacity-90">
                    {t("about.paragraph1")}
                  </p>
                  <p className="opacity-90">
                    {t("about.paragraph2")}
                  </p>
                  <p className="opacity-90">
                    {t("about.paragraph3")}
                  </p>
                  <p className="opacity-90">
                    {t("about.paragraph4")}
                  </p>
                </AnimatedContent>
              </div>

              <AnimatedContent
                direction="horizontal"
                reverse={false}
                distance={50}
                duration={0.8}
                delay={0.4}
                container="[data-scroll-container]"
                className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 pt-6"
              >
                <GlareHover
                  width="220px"
                  height="160px"
                  background="transparent"
                  borderRadius="16px"
                  borderColor="#614FD0"
                  glareColor="#614FD0"
                  glareOpacity={0.2}
                  transitionDuration={400}
                >
                  <div className="bg-gradient-to-br from-customBlueSecondary/90 to-customBlueSecondary/70 p-6 rounded-2xl backdrop-blur-sm hover:from-purplePrimary/20 hover:to-customBlueSecondary transition-all duration-300 w-full h-full flex flex-col items-center justify-center text-center space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-purplePrimary">
                      <CountUp to={25} duration={2} delay={0.2} className="inline" />
                      <span className="text-purplePrimary">+</span>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-white font-semibold text-sm md:text-base">{t("about.certificates")}</p>
                      <p className="text-slate-400 text-xs md:text-sm">and certifications</p>
                    </div>
                  </div>
                </GlareHover>
                
                <GlareHover
                  width="220px"
                  height="160px"
                  background="transparent"
                  borderRadius="16px"
                  borderColor="#614FD0"
                  glareColor="#614FD0"
                  glareOpacity={0.2}
                  transitionDuration={400}
                >
                  <div className="bg-gradient-to-br from-customBlueSecondary/90 to-customBlueSecondary/70 p-6 rounded-2xl backdrop-blur-sm hover:from-purplePrimary/20 hover:to-customBlueSecondary transition-all duration-300 w-full h-full flex flex-col items-center justify-center text-center space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-purplePrimary">
                      <CountUp to={30} duration={2} delay={0.4} className="inline" />
                      <span className="text-purplePrimary">+</span>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-white font-semibold text-sm md:text-base">{t("about.projects")}</p>
                      <p className="text-slate-400 text-xs md:text-sm">on GitHub</p>
                    </div>
                  </div>
                </GlareHover>
                
                <GlareHover
                  width="220px"
                  height="160px"
                  background="transparent"
                  borderRadius="16px"
                  borderColor="#614FD0"
                  glareColor="#614FD0"
                  glareOpacity={0.2}
                  transitionDuration={400}
                >
                  <div className="bg-gradient-to-br from-customBlueSecondary/90 to-customBlueSecondary/70 p-6 rounded-2xl backdrop-blur-sm hover:from-purplePrimary/20 hover:to-customBlueSecondary transition-all duration-300 w-full h-full flex flex-col items-center justify-center text-center space-y-2">
                    <div className="text-4xl md:text-5xl font-bold text-purplePrimary">
                      <span className="text-purplePrimary">∞</span>
                      <span className="text-purplePrimary">+</span>
                    </div>
                    <div className="space-y-0.5">
                      <p className="text-white font-semibold text-sm md:text-base">Coffee</p>
                      <p className="text-slate-400 text-xs md:text-sm">of coffee</p>
                    </div>
                  </div>
                </GlareHover>
              </AnimatedContent>

              <AnimatedContent
                direction="vertical"
                reverse={false}
                distance={30}
                duration={0.7}
                delay={0.6}
                container="[data-scroll-container]"
                className="flex justify-center md:justify-start pt-4"
              >
                <Button
                  text={t("about.downloadCV")}
                  destineLink="https://drive.google.com/file/d/1Pq262EN6xO34nEXClkfh9CP0atQylNKi/view?usp=sharing"
                  icon={ArrowLineDown}
                />
              </AnimatedContent>
            </div>
          </div>
        </section>

        <section className="w-full py-8 px-4 md:px-16 lg:px-32 overflow-x-hidden" data-scroll data-scroll-speed="0.5">
          <div className="w-full animate-in fade-in duration-700 delay-300 overflow-x-hidden">
            <div className="w-full overflow-x-hidden">
              <LogoLoop
                logos={[
                  { node: <Image src={HTMLLogo} alt="HTML" width={20} height={20} loading="lazy" />, title: "HTML", ariaLabel: "HTML" },
                  { node: <Image src={CSSLogo} alt="CSS" width={20} height={20} loading="lazy" />, title: "CSS", ariaLabel: "CSS" },
                  { node: <Image src={JavaScriptLogo} alt="JavaScript" width={20} height={20} loading="lazy" />, title: "JavaScript", ariaLabel: "JavaScript" },
                  { node: <Image src={TailwindCSSLogo} alt="Tailwind CSS" width={20} height={20} loading="lazy" />, title: "Tailwind CSS", ariaLabel: "Tailwind CSS" },
                  { node: <Image src={ReactLogo} alt="React JS" width={20} height={20} loading="lazy" />, title: "React", ariaLabel: "React" },
                  { node: <Image src={AngularLogo} alt="Angular" width={20} height={20} loading="lazy" />, title: "Angular", ariaLabel: "Angular" },
                  { node: <Image src={ReactNativeLogo} alt="React Native" width={20} height={20} loading="lazy" />, title: "React Native", ariaLabel: "React Native" },
                  { node: <Image src={NextJsLogo} alt="Next JS" width={20} height={20} loading="lazy" />, title: "Next.js", ariaLabel: "Next.js" },
                  { node: <Image src={NodeJsLogo} alt="Node JS" width={20} height={20} loading="lazy" />, title: "Node.js", ariaLabel: "Node.js" },
                  { node: <Image src={FastifyLogo} alt="Fastify" width={20} height={20} loading="lazy" />, title: "Fastify", ariaLabel: "Fastify" },
                  { node: <Image src={TypeScriptLogo} alt="TypeScript" width={20} height={20} loading="lazy" />, title: "TypeScript", ariaLabel: "TypeScript" },
                ]}
                speed={50}
                direction="left"
                logoHeight={40}
                gap={16}
                pauseOnHover={true}
                fadeOut={true}
                fadeOutColor="#0E1B31"
                scaleOnHover={true}
                className="py-4"
                width="100%"
                ariaLabel="Technologies"
                renderItem={(item) => {
                  interface TechItem {
                    title?: string;
                    node?: React.ReactNode;
                  }
                  
                  const techData: Record<string, { logo: typeof HTMLLogo; name: string }> = {
                    HTML: { logo: HTMLLogo, name: "HTML" },
                    CSS: { logo: CSSLogo, name: "CSS" },
                    JavaScript: { logo: JavaScriptLogo, name: "JavaScript" },
                    "Tailwind CSS": { logo: TailwindCSSLogo, name: "Tailwind CSS" },
                    React: { logo: ReactLogo, name: "React" },
                    Angular: { logo: AngularLogo, name: "Angular" },
                    "React Native": { logo: ReactNativeLogo, name: "React Native" },
                    "Next.js": { logo: NextJsLogo, name: "Next.js" },
                    "Node.js": { logo: NodeJsLogo, name: "Node.js" },
                    Fastify: { logo: FastifyLogo, name: "Fastify" },
                    TypeScript: { logo: TypeScriptLogo, name: "TypeScript" },
                  };
                  
                  const title = (item as TechItem).title || "";
                  const tech = techData[title] || { logo: HTMLLogo, name: title };
                  
                  return (
                    <div className="flex items-center gap-2 bg-customBlueSecondary/80 hover:bg-customBlueSecondary px-4 py-2.5 rounded-full border border-purplePrimary/20 hover:border-purplePrimary/50 transition-all duration-300 group">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-purplePrimary/20 transition-colors duration-300">
                        <Image src={tech.logo} alt={tech.name} width={20} height={20} className="object-contain" />
                      </div>
                      <span className="text-white text-sm font-medium whitespace-nowrap">{tech.name}</span>
                    </div>
                  );
                }}
              />
            </div>
          </div>
        </section>

        <Topic title={t("experience.title")} titledecoration="Experience" />
        <section id="experience" className="flex items-center justify-center space-y-12 flex-col mx-4 md:mx-8 lg:mx-16 py-12">
          <AnimatedContent
            direction="vertical"
            reverse={true}
            distance={30}
            duration={0.8}
            delay={0}
            className="space-y-4 text-center max-w-3xl"
          >
            <h4 className="font-bold text-white text-4xl md:text-5xl bg-gradient-to-r from-white to-purplePrimary bg-clip-text text-transparent">
              {t("experience.subtitle")}
            </h4>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t("experience.description.line1")}
              {t("experience.description.line2")}
              <br />
              {t("experience.description.line3")}
            </p>
          </AnimatedContent>
          
          <div className="w-full max-w-4xl space-y-12">
            {/* Experiência Profissional */}
            <div>
              <AnimatedContent
                direction="horizontal"
                reverse={true}
                distance={30}
                duration={0.6}
                delay={0.2}
                className="mb-8"
              >
                <div className="inline-block">
                  <span className="text-purplePrimary text-sm font-bold uppercase tracking-widest px-4 py-2 bg-purplePrimary/10 rounded-full border border-purplePrimary/30">
                    {t("experience.professional")}
                  </span>
                </div>
              </AnimatedContent>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-scroll data-scroll-speed="0.5">
                <div data-scroll data-scroll-speed="0.3">
                  <AnimatedContent
                    direction="vertical"
                    reverse={false}
                    distance={40}
                    duration={0.7}
                    delay={0.3}
                  >
                    <Experience
                      dateRange={`2025 - ${t("date.currently")}`}
                      role={t("experience.mobileDeveloper")}
                      company="SGBR SISTEMAS"
                    />
                  </AnimatedContent>
                </div>
                
                <div data-scroll data-scroll-speed="0.3">
                  <AnimatedContent
                    direction="vertical"
                    reverse={false}
                    distance={40}
                    duration={0.7}
                    delay={0.4}
                  >
                    <Experience
                      dateRange={`2023 - 2025`}
                      role={`${t("education.developer")} - ${t("experience.senior")}`}
                      company="ArgoTech"
                    />
                  </AnimatedContent>
                </div>
              </div>
            </div>

            {/* Educação */}
            <div>
              <AnimatedContent
                direction="horizontal"
                reverse={true}
                distance={30}
                duration={0.6}
                delay={0.5}
                className="mb-8"
              >
                <div className="inline-block">
                  <span className="text-purplePrimary text-sm font-bold uppercase tracking-widest px-4 py-2 bg-purplePrimary/10 rounded-full border border-purplePrimary/30">
                    {t("experience.education")}
                  </span>
                </div>
              </AnimatedContent>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={40}
                  duration={0.7}
                  delay={0.6}
                >
                  <Education
                    dateRange={`2025 - ${t("date.inProgress")}`}
                    course={t("education.bachelor")}
                    institution="Estácio"
                  />
                </AnimatedContent>
                
                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={40}
                  duration={0.7}
                  delay={0.7}
                >
                  <Education
                    dateRange={`2024 - ${t("date.onHold")}`}
                    course={t("education.telecom")}
                    institution="IFCE"
                  />
                </AnimatedContent>
                
                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={40}
                  duration={0.7}
                  delay={0.8}
                >
                  <Education
                    dateRange="2021 - 2023"
                    course={t("education.network")}
                    institution="EEEP Leonel de Moura Brizola"
                  />
                </AnimatedContent>
                
                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={40}
                  duration={0.7}
                  delay={0.9}
                >
                  <Education
                    dateRange="2023 - 2023"
                    course={t("education.networking")}
                    institution="IBSEC"
                  />
                </AnimatedContent>
                
                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={40}
                  duration={0.7}
                  delay={1.0}
                >
                  <Education
                    dateRange="2022 - 2022"
                    course={t("education.assembly")}
                    institution="EEEP Leonel de Moura Brizola"
                  />
                </AnimatedContent>
                
                <AnimatedContent
                  direction="vertical"
                  reverse={false}
                  distance={40}
                  duration={0.7}
                  delay={1.1}
                >
                  <Education
                    dateRange="2021 - 2021"
                    course={t("education.programming")}
                    institution="EEEP Leonel de Moura Brizola"
                  />
                </AnimatedContent>
              </div>
            </div>
          </div>
        </section>
        <Topic title={t("projects.title")} titledecoration="Projects" />
        <section id="projects" className="px-4 md:px-8 lg:px-16 py-12" data-scroll data-scroll-speed="0.3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProjectCard
              coverImage={LogoBlog}
              title={t("projects.blog.title")}
              description={t("projects.blog.description")}
              linkCoverVideo="https://hospedage.vercel.app/blog-cover.png"
              destinateLinkButtonGithub="https://github.com/PedroHenrique1606/blog-petrus"
              destinateLinkButtonWeb="https://blogpetrus.netlify.app/"
            />

            <ProjectCard
              coverImage={PlannerWebCapa}
              title={t("projects.planner.title")}
              description={t("projects.planner.description")}
              linkCoverVideo="https://hospedandodnv.vercel.app/thumb-plannerweb.png"
              destinateLinkButtonGithub="https://github.com/PedroHenrique1606/planner-web"
            />

            <ProjectCard
              coverImage={LogoTravelling}
              title={t("projects.travelling.title")}
              description={t("projects.travelling.description")}
              linkCoverVideo="https://hospedage.vercel.app/travelcover.png"
              destinateLinkButtonGithub="https://github.com/PedroHenrique1606/travelling"
              destinateLinkButtonWeb="https://travelling-page.vercel.app/"
            />

            <ProjectCard
              coverImage={sacrosanctumLogo}
              title={t("projects.sacrosanctum.title")}
              description={t("projects.sacrosanctum.description")}
              linkCoverVideo={sacrosanctumPage}
              destinateLinkButtonWeb="https://sacrosanctum.vercel.app/"
              destinateLinkButtonGithub="https://github.com/PedroHenrique1606/sacrosanctum"
            />

            <ProjectCard
              coverImage={PlannerAppCapa}
              title={t("projects.plannerApp.title")}
              description={t("projects.plannerApp.description")}
              linkCoverVideo="https://hospedandodnv.vercel.app/plannerapp.png"
              destinateLinkButtonGithub="https://github.com/PedroHenrique1606/plannerapp"
            />
          </div>
        </section>
        </main>
        <Footer />
      </div>
      
      {/* 🎮 EASTER EGG - Konami Code */}
    </div>
  );
}
