import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services data
const services = [
  {
    name: "Gestion de projets web",
    description:
      "Site vitrine, portfolio, événementiel etc... Des outils adaptés à votre coeur de métier & solutions personnalisées.",
  },
  {
    name: "Intégration web ",
    description:
      "Des intégrations HTML, CSS respectueuses des standards du web.",
  },
  {
    name: "Référencement Web",
    description:
      "Affichage sémantique des informations des pages propres pour un référencement optimal.",
  },
  {
    name: "Conception graphique et responsive design",
    description:
      "Logo, template web... Compatibilité tous supports, tablette et mobile.",
  },
];

const Services = () => {
  return (
    <div className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Mes services.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Des prestations adaptées à vos besoins.
            </h3>
            <a href="#work">
              <button className="btn btn-sm">Voir mon travail</button>
            </a>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description } = service;

                return (
                  <div
                    className="border-b border-white/20 h-[146px] mb-[38px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
