import React, { useRef } from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// emailjs
import emailjs from "@emailjs/browser";

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
    <section className="py-16 lg:section" id="contact">
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
              <h2 className="text-[45px] lg:text-[40px] leading-none mb-12">
                Une idée ? Un projet ? <br /> N'hésitez pas à demander <br /> un
                devis gratuit !
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
            <button className="btn btn-lg" type="submit" value="Envoyer">
              Envoyer
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
