import React from "react";
// coutup
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";
// image
import Image from "../assets/about.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="hidden lg:flex flex-1 h-[640px] mix-blend-lighten bg-top"
          >
            <img src={Image} alt="Img" />
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">À propos.</h2>
            <h3 className="h3 mb-4">
              Je suis Enzo, un développeur web avec 3 ans d'expérience et 7 ans
              d'apprentissage en autodidacte.
            </h3>
            <p className="mb-6">
              Mes compétences incluent différents languages tels que HTML, CSS,
              PHP, JS. Mais aussi des frameworks comme React ou Wordpress. Je
              possède aussi des bases solides en conception graphique avec
              Photoshop, Illustrator et Canva. Mon parcour professionnel m'a
              permis de travailler sur différents projets passionnants, de la
              création du site web a l'optimisation SEO.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Années <br />
                  d'expérience
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={3} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projets <br />
                  complété
                </div>
              </div>
            </div>
            <div className="flex gap-x-8 items-center">
              <a href="#contact">
                <button className="btn btn-lg">Contactez-moi</button>
              </a>
              <a href="#work" className="text-gradient btn-link">
                Mon portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
