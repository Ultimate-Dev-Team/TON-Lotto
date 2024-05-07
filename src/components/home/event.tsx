import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { type EmblaOptionsType } from "embla-carousel";

interface EventProps {
  slides: number[];
  options?: EmblaOptionsType;
}

export function Event(props: EventProps) {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);

  return (
    <section className="embla w-full border">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide bg-red-900">
            <div className="embla__slide__number">1</div>
          </div>
          <div className="embla__slide bg-green-900">
            <div className="embla__slide__number">2</div>
          </div>
        </div>
      </div>
    </section>
  );
}
