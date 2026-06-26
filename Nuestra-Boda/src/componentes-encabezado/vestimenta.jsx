import React from "react";
import { motion } from "framer-motion";

const Vestimenta = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="w-full bg-[#050505] py-6 px-0 flex items-center justify-center overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          relative max-w-6xl w-full
          bg-gradient-to-br from-[#090909] via-[#111111] to-[#1A1207]
          rounded-tl-[3rem] sm:rounded-tl-[4rem]
          rounded-br-[3rem] sm:rounded-br-[4rem]
          rounded-tr-[1rem]
          rounded-bl-[1rem]
          shadow-[0_20px_70px_rgba(0,0,0,0.75)]
          border border-[#D6B46A]/50
          overflow-hidden
          grid grid-cols-1 lg:grid-cols-2
        "
      >
        {/* Línea dorada superior */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-[1px] bg-[#D6B46A] z-20"></div>

        {/* IMAGEN - SIN TOCAR */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            relative
            h-[280px]
            sm:h-[420px]
            md:h-[500px]
            lg:h-full
            min-h-[300px]
          "
        >
          <img
            src="/dresscode.png"
            alt="Vestimenta"
            className="
              w-full h-full
              object-cover
              object-center
            "
          />

          {/* Overlay elegante */}
          <div className="absolute inset-0 bg-black/10"></div>
        </motion.div>

        {/* TEXTO */}
        <div
          className="
            relative
            flex flex-col items-center justify-center
            text-center
            p-8
            sm:p-12
            lg:p-16
          "
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.28em" }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="
              uppercase
              text-[11px]
              sm:text-sm
              tracking-[0.28em]
              text-[#D6B46A]
              font-light
            "
          >
            Código de Vestimenta
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-playfair
              text-[#F8F1DC]
              mt-5
              leading-tight
              drop-shadow-[0_5px_18px_rgba(214,180,106,0.22)]
            "
          >
            Vestimenta Formal
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "7rem" }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-[1px] bg-[#D6B46A] mt-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="
              mt-6 sm:mt-8
              text-xl
              sm:text-2xl
              md:text-3xl
              text-[#D6B46A]
              leading-relaxed
              max-w-md
              font-cursiveDancing
            "
          >
            Hemos decidido que esta celebración sea exclusivamente para adultos.
            Agradecemos tu comprensión.
          </motion.p>

          <div className="w-20 h-[1px] bg-[#D6B46A]/70 mt-8"></div>
        </div>

        {/* Línea dorada inferior */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-28 h-[1px] bg-[#D6B46A] z-20"></div>
      </motion.div>
    </div>
  );
};

export default Vestimenta;