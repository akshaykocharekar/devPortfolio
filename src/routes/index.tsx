import { createFileRoute } from "@tanstack/react-router";
import { Cover } from "@/components/Cover";
import { Intro } from "@/components/Intro";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Education } from "@/components/Education";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";
import { CurrentRoadmap } from "@/components/CurrentRoadmap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "🥢 Akshay" },
      {
        name: "description",
        content:
          "Portfolio of Akshay Kocharekar, a full-stack developer working in DevOps: AWS EC2, Docker, Linux, Bash automation, Node.js and React.",
      },
      { property: "og:title", content: "🥢 Akshay" },
      {
        property: "og:description",
        content:
          "AWS EC2, Docker, Linux and Bash automation, paired with Node.js and React product work. Projects, experience and contact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="page-rails min-h-screen py-0 sm:py-10">
      <main className="mx-auto w-full max-w-3xl overflow-hidden border-border bg-card sm:rounded-2xl sm:border">
        <Cover />
        <Intro />
        <Experience />
        <Projects />
         <CurrentRoadmap/>
        <Stack />
        <Education />
        <Connect />
        <Footer />
      </main>
    </div>
  );
}
