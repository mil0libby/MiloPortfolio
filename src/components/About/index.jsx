import { useState, useEffect } from "react";
import "./style.css";
import BackgroundLines from "../BackgroundLines";
import ScrambleText from "../ScrambleText";
import InteractiveMarquee from "../InteractiveMarquee";
import ParaWriting from "../ParaWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const positionVariant = {
    hidden: { x: "100%" },
    visible: {
      x: "60px",
      transition: {
        ease: [0.5, 1, 0.89, 1],
        duration: 1,
        delay: 0,
      },
    },
  };

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="about" id="about">
      <BackgroundLines light />
      <div ref={ref} className="about--grid">
        <div className="about--bio">
          <h2>
            <ParaWriting
              stagger={0.08}
              text={"I'm a highly motivated software engineer with a strong "}
              sec={"passion for website development"}
            />
          </h2>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 1.5 }}
          className="about--title"
        >
          <h3 className="theme--text--dark">
            <ScrambleText shuffle delay={1.5}>
              02
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={1.5}>
              about
            </ScrambleText>
          </h3>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 2 }}
          onAnimationComplete={() => handleComplete()}
          className="about--detail"
        >
          <p className="theme--detail--dark about--text">
            <ScrambleText delay={2}>
              After five years studying Computer Science and Software
              Engineering at university, I developed a strong passion for using
              technology to benefit society. As an NCAA Division I and II
              student-athlete, I also learned discipline, determination, and
              time management—skills that continue to shape my work ethic.
              During this time, I gained hands-on experience through multiple
              internships, collaborating with diverse teams to build innovative
              projects. I am committed to continuous learning and leveraging
              technology to solve meaningful problems. Thank you for visiting my
              portfolio!
            </ScrambleText>
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={positionVariant}
          className="about--marquee"
        >
          <h1 draggable="false">
            <InteractiveMarquee wheelFactor={0} speed={1.3}>
              <span>ABOUT MILO LIBBY</span>
              <span>ABOUT MILO LIBBY</span>
              <span>ABOUT MILO LIBBY</span>
              <span>ABOUT MILO LIBBY</span>
              <span>ABOUT MILO LIBBY</span>
            </InteractiveMarquee>
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
