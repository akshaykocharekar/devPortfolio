import React from "react";
import { FloatingDock } from "../components/FloatingDock";
import ContactForm from "../components/ContactForm";
import { FaEnvelope } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import img from "../Assets/chillguy.jpg";
// 👉 put your resume in public folder
// example: public/resume.pdf

const Home = () => {
  return (
    <>
      <div className="mb-10"></div>

      <div className="min-h-screen bg-black text-zinc-200 px-6 py-8 space-y-10">
        {/* Header */}
        <div className="flex items-center gap-4">
          <img
            src={img}
            alt="avatar"
            className="w-14 h-14 rounded-full object-cover border border-zinc-700"
          />
          <div>
            <h1 className="text-xl font-semibold text-white">
              Akshay Kocharekar
            </h1>
            <p className="text-sm text-zinc-400">Full-Stack Developer</p>
          </div>
        </div>

        {/* Resume CTA */}
        <div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 bg-zinc-900/60 text-sm text-white hover:border-blue-500 hover:bg-zinc-800 transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10"
          >
            <FiDownload className="text-base" />
            Download Resume
          </a>
        </div>

        {/* Hero Statement */}
        <section className="space-y-3">
          <h2 className="text-lg font-medium">
            <span className="text-blue-500">&gt;</span> summary
          </h2>

          <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
            Full-stack developer with a strong focus on building scalable web
            applications using React, Node.js, and modern backend technologies.
            Passionate about continuous learning, clean code practices, and
            creating solutions that make a real impact.
          </p>
        </section>

        {/* Socials */}
        <div className="flex gap-5 items-center pt-2">
          <a
            href="https://www.linkedin.com/in/akshay-kocharekar-859829321"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-xl hover:text-blue-400 transition" />
          </a>

          <a href="mailto:akshaykocharekar20@gmail.com">
            <FaEnvelope className="text-xl hover:text-blue-400 transition" />
          </a>
        </div>

        {/* Contact */}
        <ContactForm />

        <FloatingDock />
      </div>
    </>
  );
};

export default Home;
