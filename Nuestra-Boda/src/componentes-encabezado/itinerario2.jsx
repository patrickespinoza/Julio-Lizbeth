import React from "react";
import { motion } from "framer-motion";

const Itinerario2 = () => {
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const eventosIzquierda = [
    {
      titulo: "Drink para amenizar",
      imagen: "/Cocteleria.png",
      hora: "1:00 pm - 2:00 pm",
    },
    {
      titulo: "Comida",
      imagen: "/cena-romantica.png",
      hora: "3:00 pm - 4:00 pm",
    },
  ];

  const eventosDerecha = [
    {
      titulo: "Boda",
      imagen: "/arco-de-la-boda.png",
      hora: "2:00 pm - 3:00 pm",
    },
    {
      titulo: "Fiesta",
      imagen: "/bola-de-disco.png",
      hora: "4:00 pm - 12:00 pm",
    },
  ];

  return (
    <div className="w-full bg-[#050505] py-6 px-0 flex items-center justify-center overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          max-w-6xl mx-auto
          bg-gradient-to-br from-[#090909] via-[#111111] to-[#1A1207]
          border border-[#D6B46A]/50
          rounded-tl-[4rem]
          rounded-br-[4rem]
          rounded-tr-[1rem]
          rounded-bl-[1rem]
          shadow-[0_20px_70px_rgba(0,0,0,0.75)]
          p-10 sm:p-16
        "
      >
        {/* TÍTULO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.3em] text-[#D6B46A] text-sm font-light">
            Nuestro Día
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair text-[#F8F1DC] mt-4 drop-shadow-[0_5px_18px_rgba(214,180,106,0.22)]">
            Itinerario
          </h1>

          <div className="w-28 h-[1px] bg-[#D6B46A] mx-auto mt-6"></div>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative mt-20">
          {/* Línea central desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-[#D6B46A]/60 -translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* IZQUIERDA */}
            <div className="flex flex-col gap-14">
              {eventosIzquierda.map((evento, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="
                    bg-[#0B0B0B]/90
                    rounded-3xl
                    p-6
                    shadow-[0_15px_40px_rgba(0,0,0,0.5)]
                    border border-[#D6B46A]/45
                    text-center
                    hover:scale-[1.02]
                    hover:border-[#D6B46A]
                    transition duration-300
                  "
                >
                  <img
                    src={evento.imagen}
                    alt={evento.titulo}
                    className="h-20 w-20 md:h-24 md:w-24 mx-auto brightness-0 invert"
                  />

                  <h2 className="mt-5 text-2xl font-playfair text-[#F8F1DC]">
                    {evento.titulo}
                  </h2>

                  <p className="mt-3 text-[#D6B46A] font-cursiveDancing text-2xl">
                    {evento.hora}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* DERECHA */}
            <div className="flex flex-col gap-14 md:mt-20">
              {eventosDerecha.map((evento, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="
                    bg-[#0B0B0B]/90
                    rounded-3xl
                    p-6
                    shadow-[0_15px_40px_rgba(0,0,0,0.5)]
                    border border-[#D6B46A]/45
                    text-center
                    hover:scale-[1.02]
                    hover:border-[#D6B46A]
                    transition duration-300
                  "
                >
                  <img
                    src={evento.imagen}
                    alt={evento.titulo}
                    className="h-20 w-20 md:h-24 md:w-24 mx-auto brightness-0 invert"
                  />

                  <h2 className="mt-5 text-2xl font-playfair text-[#F8F1DC]">
                    {evento.titulo}
                  </h2>

                  <p className="mt-3 text-[#D6B46A] font-cursiveDancing text-2xl">
                    {evento.hora}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Itinerario2;