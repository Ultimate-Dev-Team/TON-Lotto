import React from "react";
import Link from "next/link";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { type EmblaOptionsType } from "embla-carousel";

interface HeroProps {
  slides: number[];
  options?: EmblaOptionsType;
}

export function Hero(props: HeroProps) {
  const { slides, options } = props;

  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <section className="embla w-full">
      <div className="line-clamp-1 px-2 text-xl font-bold capitalize">Game</div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container grid-flow-row">
          <div className="embla__slide w-1/2">
            <div className="embla__slide__number p-2">
              <Link
                href={"/lottery/pepe"}
                className="flex h-full flex-1 rounded-lg border-t shadow-md"
              >
                Pepe
              </Link>
            </div>
          </div>
          <div className="embla__slide w-1/2">
            <div className="embla__slide__number p-2">
              <div className="text-md flex h-full flex-1 rounded-lg border-t shadow-md">
                Doge
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
