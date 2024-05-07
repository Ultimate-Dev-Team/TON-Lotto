"use client";

import { Event } from "~/components/home/event";
import { type EmblaOptionsType } from "embla-carousel";
import { Hero } from "./hero";
import { Nav } from "../layouts/nav";

export function Box() {
  const OPTIONS: EmblaOptionsType = { dragFree: true };
  const SLIDE_COUNT = 2;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="py-2">
      {/* <Event slides={SLIDES} options={OPTIONS} /> */}
      <Hero slides={SLIDES} options={OPTIONS} />
      <Nav />
    </div>
  );
}
