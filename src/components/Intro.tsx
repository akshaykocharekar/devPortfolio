import { MapPin } from "lucide-react";
import { profile, learning } from "@/data/portfolio";
import { Block } from "./Block";
import { Reveal } from "./Reveal";

/** Opening statement, location, and a "currently learning" strip. */
export function Intro() {
  return (
    <Block id="about">
      <Reveal className="space-y-4">
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          <span className="font-medium text-foreground">{profile.hook}</span> {profile.summary}
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-subtle">
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-3.5" aria-hidden />
            {profile.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden />
            Currently learning {learning.join(" · ")}
          </span>
        </div>
      </Reveal>
    </Block>
  );
}
