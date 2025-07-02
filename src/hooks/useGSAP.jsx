import { gsap } from "gsap";
import { useEffect } from "react";

export const useGSAP = (callback, dependencies = []) => {
  const gsapRef = useGSAP();

  useEffect(() => {
    if (gsapRef) {
      callback(gsapRef);
    }
  }, [gsapRef, dependencies, callback]);

  return gsapRef;
};

export const useGSAPAnimation = (element, animation) => {
  useEffect(() => {
    if (element) {
      const tl = gsap.timeline({
        defaults: { duration: 0.5, ease: "power2.inOut" },
      });
      tl.fromTo(element, { ...animation.from }, { ...animation.to });
      return () => {
        tl.kill();
      };
    }
  }, [element, animation]);
};
