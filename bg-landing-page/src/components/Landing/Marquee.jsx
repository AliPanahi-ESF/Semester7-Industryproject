import "./Marquee.css";
import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

const getWidth = (parent) => {
  const element = [...parent.children];
  return element.reduce((sum, child) => (sum += child.clientWidth), 0);
};

const Marquee = forwardRef((props = {}, ref) => {
  const $section = useRef();
  const $content = useRef();

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const observer = new ResizeObserver(() => {
      setWidth(getWidth($content.current));
    });
    observer.observe($section.current);
    setWidth(getWidth($content.current));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const tween = gsap.to($content.current, { x: width * -0.5, duration: 20.0, repeat: -1, ease: "none" });
    return () => {
      tween.kill();
      gsap.set($content.current, { clearProps: "all" });
    };
  }, [width]);

  return (
    <div
      className={`marquee ${props.className}`}
      ref={(node) => {
        $section.current = node;
        if (ref) {
          ref.current = node;
        }
      }}
    >
      <div className="marquee__content" ref={$content}>
        {props.images.map((image, index) => {
          return (
            <div className="marquee__item" key={index}>
              <img src={image} className="marquee__image" />
            </div>
          );
        })}

        {/* Clone Items: No touchy */}
        {props.images.map((image, index) => {
          return (
            <div className="marquee__item" key={`clone-${index}`}>
              <img src={image} className="marquee__image" />
            </div>
          );
        })}
      </div>
    </div>
  );
});

export default Marquee;
