import { createFileRoute } from "@tanstack/react-router";
import { Cover } from "@/components/Cover";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";

import { Stack } from "@/components/Stack";
import { Education } from "@/components/Education";
import { Connect } from "@/components/Connect";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { Documentation } from "@/components/Documentation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "🥢 Akshay" },
      {
        name: "description",
        content:
          "Portfolio of Akshay Kocharekar, building modern software with React, Node.js, AWS, Linux, and DevOps through hands-on projects.",
      },
      { property: "og:title", content: "🥢 Akshay" },
      {
        property: "og:description",
        content:
          "Full-stack projects, cloud infrastructure, Linux, and DevOps engineering journey.",
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
      <CommandPalette />

      <main className="mx-auto w-full max-w-3xl overflow-hidden border-border bg-card sm:rounded-2xl sm:border">
        <Cover />
        <Intro />
        <Projects />
        <Documentation />
        <Stack />
        <Education />
        <Connect />
        <Footer />
      </main>
    </div>
  );
}