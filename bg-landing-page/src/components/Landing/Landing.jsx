import "./Landing.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

import Marquee from "./Marquee";

gsap.registerPlugin(ScrollTrigger);

const Landing = (props) => {
  const timelines = useRef({});

  const $section = useRef(null);
  const $background = useRef(null);
  const $content = useRef(null);
  const $heading = useRef(null);
  const $paragraph = useRef(null);
  const $marqueeBack = useRef(null);
  const $marqueeFront = useRef(null);

  /**
   *
   * This will happen after the html
   * is rendered in the DOM (your laptop).
   *
   */
  useEffect(() => {
    /**
     *
     * Transition
     * initial.
     */

    gsap.set($heading.current, { color: "white" });
    gsap.set($paragraph.current, { alpha: 0.0 });
    gsap.set($background.current, { alpha: 0.0 });

    /**
     *
     * Scroll
     * animation.
     * */

    if (!timelines.current.scroll) {
      const scrollTriggerConfig = {
        trigger: $section.current,
        pin: true,
        scrub: true,
        end: "bottom+=200vh",
      };

      console.log($marqueeBack);
      timelines.current.scroll = new gsap.timeline({ scrollTrigger: scrollTriggerConfig });
      timelines.current.scroll.to($background.current, { alpha: 1, duration: 1.0, ease: "none" }, 0.0);
      timelines.current.scroll.to($heading.current, { color: "black", duration: 1.0, ease: "none" }, 0.0);
      timelines.current.scroll.to($paragraph.current, { alpha: 1.0, duration: 1.0, ease: "none" }, 0.0);
      timelines.current.scroll.to($marqueeFront.current, { y: "100%", duration: 0.75, ease: "none" }, 0.0);
      timelines.current.scroll.to($marqueeBack.current, { y: "100%", duration: 0.75, ease: "none" }, 0.1);
    }
  }, []); // 2 bracket very important!

  return (
    <section className="landing" ref={$section}>
      <span className="landing__background landing__background--black"></span>
      <span className="landing__background landing__background--red" ref={$background}></span>
      <div className="landing__content" ref={$content}>
        <h2 className="landing__heading" ref={$heading}>
          <span>Bierens</span>
          <span>Heroes</span>
        </h2>
        <p className="landing__paragraph" ref={$paragraph}>
        Your Network, Your Rewards: Become a Bierens Hero!
        </p>
      </div>

      <Marquee speed={-1} images={["src/assets/pic1.png", "src/assets/pic2.png", "src/assets/pic3.png", "src/assets/pic1.png", "src/assets/pic2.png", "src/assets/pic3.png"]} className="landing__marquee-back" ref={$marqueeBack} />
      <Marquee speed={1} images={["src/assets/pic1.png", "src/assets/pic2.png", "src/assets/pic3.png", "src/assets/pic1.png", "src/assets/pic2.png", "src/assets/pic3.png"]} className="landing__marquee" ref={$marqueeFront} />
    </section>
  );
};

export default Landing;
