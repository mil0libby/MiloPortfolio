import { useState, useEffect } from "react";
import "./style.css";
import BackgroundLines from "../BackgroundLines";
import WorkCard from "../WorkCard";
import ScrambleText from "../ScrambleText";
import ParaWriting from "../ParaWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import work1 from "../../assets/Images/work1.png";
import work2 from "../../assets/Images/workMAI.png";
import work3 from "../../assets/Images/workQuiz.png";

export default function Projects() {
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

  const works = [
    {
      client: "QuizMaster (click image for live demo)",
      year: "2025",
      img: work3,
      title: "personal project",
      link: "https://www.youtube.com/watch?v=cdKRRlEK5rY",
      detail:
        "Full-Stack AI Quiz Platform with Real-Time Multiplayer and Live Hosting using OPENAI api and Socket.io.",
    },
    {
      client: "Motivation.ai (click image for live demo)",
      year: "2025",
      img: work2,
      title: "personal project",
      link: "https://www.youtube.com/watch?v=GAMVKLabJlo",
      detail:
        "Responsive web app that uses AI to simulate motivational chats with 30 unique AI characters modeled after iconic figures",
    },

    {
      client: "Front End Simplified (click image to go to project)",
      year: "2024",
      img: work1,
      title: "Internship",
      link: "https://milo-internship.vercel.app/",
      detail:
        "Developed a website for an NFT marketplace e-commerce platform during an internship, gaining hands-on experience in web development and e-commerce.",
    },
  ];

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 0.5 }}
          className="projects--grid--title"
        >
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              03
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Expertise
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <a href={item.link} target="_">
                  <WorkCard
                    item={item}
                    key={index}
                    // delay={0.1 * index + 1}
                    // controls={controls}
                  />
                </a>
              );
            })}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 1 }}
          onAnimationComplete={() => handleComplete()}
          className="projects--grid--detail"
        >
          <p className="theme--detail">
            <ScrambleText delay={1}>
              Discover a curated portfolio of projects where each line of code
              tells a story of problem-solving, creativity, and technical
              finesse.
            </ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
