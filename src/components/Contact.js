import React, { useRef } from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// emailjs
import emailjs from "@emailjs/browser";
// link
import { Link } from "react-scroll";
import PDF from "../assets/Mentions Légales.pdf";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yujdhwa",
        "template_zm805w9",
        form.current,
        "QQnZcYOSLmXUYx7Jr"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Votre message a bien été envoyé !");
        },
        (error) => {
          console.log(error.text);
          alert("Une erreur est survenu.");
        }
      );
  };

  return (
    <>
      <section className="section py-16" id="contact">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* text */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex justify-start items-center"
            >
              <div>
                <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">
                  Reston en contact
                </h4>
                <h2 className="text-[40px] lg:text-[40px] leading-none mb-12">
                  Une idée ? Un projet ? <br /> N'hésitez pas à demander <br />{" "}
                  un devis gratuit !
                </h2>
              </div>
            </motion.div>
            {/* form */}
            <motion.form
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 border rounded-xl flex flex-col gap-y-6 pb-12 p-6 items-start"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                name="user_name"
                placeholder="Votre nom"
                required="required"
              />
              <input
                className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
                type="text"
                name="user_email"
                placeholder="Votre email"
                required="required"
              />
              <textarea
                className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
                placeholder="Votre message"
                name="message"
                required="required"
              ></textarea>
              <div class="flex items-center mb-4">
                <input
                  required="required"
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  En validant ce formulaire j'accepte que les informations
                  saisies soit enregistrés et utilisés pour me recontacter.
                </label>
              </div>
              <button className="btn btn-lg" type="submit" value="Envoyer">
                Envoyer
              </button>
            </motion.form>
          </div>
        </div>
      </section>
      <footer className="pl-10">
        {/* footer div all */}
        <div className="items-center md:items-start">
          {/* socials */}
          <p className="mb-40 lg:mb-20 text-[15px] font-medium text-[#fff]">
            Site crée par{" "}
            <Link
              to="home"
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-200}
              className="text-gradient cursor-pointer"
            >
              EnzoCo
            </Link>{" "}
            | <a href={PDF}>Mentions Légales</a> | <br />©{" "}
            {new Date().getFullYear()} EnzoCo
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
