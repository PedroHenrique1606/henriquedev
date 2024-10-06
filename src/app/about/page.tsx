"use client";
import { Button } from "@/components/Button";
import Footer from "@/components/Footer";
import { Indicators } from "@/components/Indicators";
import Navbar from "@/components/Navbar";
import { OrbitingCirclesDemo } from "@/components/OrbitCircles";
import { Topic } from "@/components/Topic";
import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  ArrowCircleRight,
  ArrowLineDown,
} from "@phosphor-icons/react";
import { ArrowDown } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-36">
      <div className="flex items-center justify-center">
        <Navbar />
      </div>
      <section className="flex items-center justify-center mx-20">
        <div className="space-y-6">
          <h1 className="font-semibold text-white text-6xl">
            Hi! I&apos;m Pedro
            <br /> Henrique
          </h1>
          <h3 className="text-slate-400 font-semibold text-lg">
            Web Developer
          </h3>
          <p className="text-slate-400 leading-6">
            Hi, my name is Pedro Henrique! I specialize in developing modern,
            responsive websites with a focus on scalability, clean code, and
            ease of maintenance. With a passion for creating intuitive and
            visually appealing user experiences, I continuously stay updated on
            the latest web development trends and technologies. I &#39;m
            actively seeking new opportunities to collaborate on exciting
            projects, and I also offer freelance services to bring innovative
            ideas to life. Let &#39;s work together to create something
            exceptional!
          </p>
        </div>
      </section>
      <OrbitingCirclesDemo />
      <Footer />
    </div>
  );
}
