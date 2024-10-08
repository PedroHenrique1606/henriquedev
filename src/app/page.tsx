import AngularLogo from "@/assets/angularlogo.svg";
import LogoBlog from "@/assets/blogcapa.svg";
import CSSLogo from "@/assets/csslogo.svg";
import FastifyLogo from "@/assets/fastifylogo.svg";
import HTMLLogo from "@/assets/htmllogo.svg";
import JavaScriptLogo from "@/assets/javascriptlogo.svg";
import NextJsLogo from "@/assets/nextjslogo.svg";
import NodeJsLogo from "@/assets/nodejslogo.svg";
import PedroProfileVariant from "@/assets/pedro-profile-variant.svg";
import PedroProfile from "@/assets/pedro-profile.svg";
import PlannerAppCapa from "@/assets/plannerapp.svg";
import PlannerWebCapa from "@/assets/plannerwebcapa.svg";
import ReactLogo from "@/assets/reactjs.svg";
import ReactNativeLogo from "@/assets/reactnativelogo.svg";
import TailwindCSSLogo from "@/assets/tailwindcsslogo.svg";
import LogoTravelling from "@/assets/travellingcapa.svg";
import TypeScriptLogo from "@/assets/typescriptlogo.svg";
import { Button } from "@/components/Button";
import { Education } from "@/components/Education";
import Footer from "@/components/Footer";
import { Indicators } from "@/components/Indicators";
import Navbar from "@/components/Navbar";
import { ProjectsModal } from "@/components/ProjectsModal";
import { Skills } from "@/components/Skills";
import { Topic } from "@/components/Topic";
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
  return (
    <div className="space-y-36">
      <div className="flex items-center justify-center">
        <Navbar />
      </div>
      <section className="flex items-center justify-center mx-20">
        <div className="flex flex-col space-y-7 mx-8">
          <a target="_blank" href="https://github.com/PedroHenrique1606">
            <GithubLogo size={28} className="text-purplePrimary" />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/pedrohenrique.trc/"
          >
            <InstagramLogo size={28} className="text-purplePrimary" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/pedro-henrique-melo-da-silva-a7a700231/"
          >
            <LinkedinLogo size={28} className="text-purplePrimary" />
          </a>
        </div>
        <div className="space-y-6 md:mr-16">
          <h1 className="font-semibold text-white text-6xl">
            Hi! I&apos;m Pedro
            <br /> Henrique
          </h1>
          <h3 className="text-slate-400 font-semibold text-lg">
            Web Developer
          </h3>
          <p className="text-slate-400 leading-6">
            Hi, my name is Pedro Henrique!
            <br /> I&apos;m able to develop modern, responsive websites, <br />
            with scalability, clean code and easy maintenance.
            <br /> I&apos;m looking for new opportunities and I also freelance.
          </p>
          <Button
            text="Contact Me"
            destineLink="mailto:pedromelo.dev.contato@gmail.com"
            icon={ArrowCircleRight}
          />
        </div>
        <Image
          src={PedroProfile}
          alt="Profile Picture of Pedro Henrique"
          className="w-3/12 m-5"
        />
      </section>
      <div className="flex items-center justify-center gap-3">
        <p className="text-white font-medium">Scroll Down</p>
        <ArrowDown size={24} className="text-purplePrimary animate-bounce" />
      </div>
      <Topic title="About Me" titleabsolute="About" titledecoration="Me" />
      <section className="flex items-center justify-center mx-20 space-x-8">
        <Image
          src={PedroProfileVariant}
          alt="Profile Picture of Pedro Henrique"
          className="w-3/12 m-5"
        />
        <div className="space-y-6 md:mr-16">
          <h4 className="font-semibold text-white text-3xl">Know Me</h4>
          <h4 className="font-medium text-white text-xl flex gap-2">
            I&apos;m a <p className="text-purplePrimary">Pedro Henrique</p>
          </h4>
          <h3 className="text-slate-400 font-semibold text-lg">
            Web Developer
          </h3>
          <p className="text-slate-400 leading-6">
            Hello, my name is Pedro Henrique! I&apos;m a computer network
            <br /> technician and self-taught front-end developer living in
            Brazil.
            <br />I am able to develop modern, responsive websites, with
            <br />
            scalability, clean code and easy maintenance. Since I was a <br />
            child, I have always had a passion for technology and curiosity in{" "}
            <br />
            discovering new areas and how everything works, which is how
            <br /> the desire to continue being a web developer awakened in me.
          </p>
          <div className="flex gap-2">
            <Indicators
              numberIndicator="25"
              titleIndicator="Certificates"
              conectiveIndicator="and"
              predicateIndicator="certifications"
            />
            <Indicators
              numberIndicator="30"
              titleIndicator="Projects"
              conectiveIndicator="on"
              predicateIndicator="GitHub"
            />
            <Indicators
              numberIndicator="∞"
              titleIndicator="GitHub"
              conectiveIndicator="of"
              predicateIndicator="coffee"
            />
          </div>
          <Button
            text="Download CV"
            destineLink="https://drive.google.com/file/d/1ieh6-wcPqhM11TVWQ12wH5UDJDIf7Jry/view?usp=sharing"
            icon={ArrowLineDown}
          />
        </div>
      </section>
      <Topic title="Experience" titledecoration="Experience" />
      <section className="flex items-center justify-center space-y-8 flex-col mx-3">
        <div className="space-y-4">
          <h4 className="font-semibold text-white text-3xl">
            Experience &amp; Skills
          </h4>
          <p className="text-white">
            I&apos;m looking for new opportunities and challenges in the area of
            front-end development.
            <br />
            Check out some of my skills below.
          </p>
        </div>
        <div className="flex space-x-5 w-full md:w-2/5">
          <div className="flex-col space-y-5 w-full">
            <p className="text-white font-semibold py-2 px-3 bg-purplePrimary rounded-md min-w-max">
              Education
            </p>
            <Education
              dateRange="2021 - 2023"
              course="Computer Network"
              institution="EEEP Leonel de Moura Brizola"
            />
            <Education
              dateRange="2021 - 2021"
              course="Analysis and Programming Monitoring"
              institution="EEEP Leonel de Moura Brizola"
            />
            <Education
              dateRange="2022 - 2022"
              course="Monitoring of Assembly and Installation of Systems "
              institution="EEEP Leonel de Moura Brizola"
            />
            <Education
              dateRange="2023 - 2023"
              course="Certification in Computer Networking Fundamentals"
              institution="IBSEC"
            />
            <Education
              dateRange="2023 - 2023"
              course="Front End Intern"
              institution="ArgoTech"
            />
            <Education
              dateRange="2024 - At the moment"
              course="Web Developer"
              institution="ArgoTech"
            />
            <Education
              dateRange="2024 - In progress"
              course="Telecomunication Engeneering"
              institution="IFCE"
            />
          </div>
          <div className="flex-col space-y-5 w-full">
            <p className="text-white font-semibold py-2 px-3 bg-purplePrimary rounded-md min-w-max">
              Skills
            </p>
            <Skills text="HTML" icon={HTMLLogo} />
            <Skills text="CSS" icon={CSSLogo} />
            <Skills text="JAVASCRIPT" icon={JavaScriptLogo} />
            <Skills text="TAILWIND CSS" icon={TailwindCSSLogo} />
            <Skills text="REACT JS" icon={ReactLogo} />
            <Skills text="ANGULAR" icon={AngularLogo} />
            <Skills text="REACT NATIVE" icon={ReactNativeLogo} />
            <Skills text="NEXT JS" icon={NextJsLogo} />
            <Skills text="NODE JS" icon={NodeJsLogo} />
            <Skills text="FASTIFY" icon={FastifyLogo} />
            <Skills text="TYPESCRIPT" icon={TypeScriptLogo} />
          </div>
        </div>
      </section>
      <Topic title="Portfolio" titledecoration="Portfolio" />
      <section className="flex items-center justify-center space-x-5">
        <div className="flex flex-col space-y-5">
          <ProjectsModal
            coverImage={LogoBlog}
            sourceVideo="https://hospedage.vercel.app/blog.mp4"
            titleModalHover="Blog Petrus"
            descriptionProject="Blog make with Astro"
            titleOfVideo="Blog Petrus"
            subtitleOfVideo="Your developer Blog"
            linkCoverVideo="https://hospedage.vercel.app/blog-cover.png"
            destinateLinkButtonGithub="https://github.com/PedroHenrique1606/blog-petrus"
            destinateLinkButtonWeb="https://blogpetrus.netlify.app/"
          />
          <ProjectsModal
            coverImage={PlannerWebCapa}
            sourceVideo="https://hospedandodnv.vercel.app/plannerwebedited.mp4"
            titleModalHover="Planner Web"
            descriptionProject="Your app to plan trips with friends"
            titleOfVideo="Planner Web"
            subtitleOfVideo="Your app for planning trips"
            linkCoverVideo="https://hospedandodnv.vercel.app/thumb-plannerweb.png"
            destinateLinkButtonGithub="https://github.com/PedroHenrique1606/planner-web"
          />
        </div>
        <div className="flex flex-col space-y-5">
          <ProjectsModal
            coverImage={LogoTravelling}
            sourceVideo="https://hospedage.vercel.app/travelling.mp4"
            titleModalHover="Travelling"
            descriptionProject="Landing Page from travel enterprise with NextJS, TypeScript, Tailwind and StoryBook"
            titleOfVideo="Travelling"
            subtitleOfVideo="Travelling landing page"
            linkCoverVideo="https://hospedage.vercel.app/travelcover.png"
            destinateLinkButtonGithub="https://github.com/PedroHenrique1606/travelling"
            destinateLinkButtonWeb="https://travelling-ivory.vercel.app/"
          />
          <ProjectsModal
            coverImage={PlannerAppCapa}
            sourceVideo="https://hospedandodnv.vercel.app/olannerappedited2.mp4"
            titleModalHover="Planner App"
            descriptionProject="Your app to plan trips with friends"
            titleOfVideo="Planner App"
            subtitleOfVideo="Your App trip"
            linkCoverVideo="https://hospedandodnv.vercel.app/plannerapp.png"
            destinateLinkButtonGithub="https://github.com/PedroHenrique1606/plannerapp"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}
