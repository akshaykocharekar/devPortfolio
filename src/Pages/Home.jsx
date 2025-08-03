import React from "react";
import { FloatingDock } from "../components/FloatingDock";
import ContactForm from "../components/ContactForm";
import { FaEnvelope } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import StarAppreciation from "../components/StarAppreciation";
import img from "../Assets/chillguy.jpg";

const Home = () => {
  return (
    <>
      <div className="mb-22">
        <StarAppreciation />
      </div>
      <div className="min-h-screen bg-black text-white px-6 py-6 relative space-y-8">
        {/* Avatar & Username */}
        <div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-700 bg-zinc-900/60 backdrop-blur-sm">
          <img
            src={img}
            alt="avatar"
            className="w-12 h-12 rounded-full object-cover border border-zinc-700"
          />
          <div>
            <h1 className="font-bold text-lg">Akshay Kocharekar</h1>
            <p className="text-zinc-400 text-sm">@akshaycodes</p>
          </div>
        </div>

        {/* About */}
        <section>
          <h2 className="text-lg font-semibold mb-2">
            <span className="text-blue-500">&gt;</span>about me
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            hey, i'm Akshay
            <br />
            student & self-taught developer on a mission to build, break, and
            rebuild.
            <br />
            currently exploring react, node, and system design.
            <br />
            i’m passionate about clean code, great design, and persistent
            learning.
          </p>
        </section>

        {/* Socials */}
        <div className="flex gap-5 items-center">
          <a
            href="https://www.linkedin.com/in/akshay-kocharekar-859829321"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-2xl text-white hover:text-blue-400" />
          </a>
          <a
            href="https://www.instagram.com/akshay.45__/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-2xl text-white hover:text-pink-400" />
          </a>
          <a href="mailto:akshaykocharekar20@gmail.com">
            <FaEnvelope className="text-2xl text-white hover:text-blue-400" />
          </a>
        </div>

        <ContactForm />

        {/* Floating Dock */}
        <FloatingDock />
      </div>
    </>
  );
};

export default Home;
