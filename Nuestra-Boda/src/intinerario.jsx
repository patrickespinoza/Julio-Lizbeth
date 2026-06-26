import React, { useRef, useState } from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Vestimenta from "./componentes-encabezado/vestimenta";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Confirmacion from "./componentes-encabezado/Confirmacion";

export default function Itinerario() {
  const audioRef = useRef(null);
  const [mostrarModal, setMostrarModal] = useState(true);
  const [musicaActiva, setMusicaActiva] = useState(false);

  const activarMusica = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir música:", error);
      });
    }

    setMusicaActiva(true);
    setMostrarModal(false);
  };

  const rechazarMusica = () => {
    setMostrarModal(false);
    setMusicaActiva(false);
  };

  const toggleMusica = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setMusicaActiva(true);
    } else {
      audioRef.current.pause();
      setMusicaActiva(false);
    }
  };

  return (
    <div className="relative bg-[#050505]">
      <audio ref={audioRef} src="/musica.mp3" loop />

      {mostrarModal && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center px-6">
          <div
            className="
              w-full max-w-md
              bg-gradient-to-br from-[#090909] via-[#111111] to-[#1A1207]
              border border-[#D6B46A]/60
              rounded-tl-[4rem]
              rounded-br-[4rem]
              rounded-tr-[1rem]
              rounded-bl-[1rem]
              shadow-[0_20px_70px_rgba(0,0,0,0.85)]
              p-8 text-center
            "
          >
            <p className="uppercase tracking-[0.35em] text-[#D6B46A] text-xs font-light">
              Experiencia con música
            </p>

            <h2 className="font-playfair text-[#F8F1DC] text-4xl mt-5">
              ¿Deseas activar la música?
            </h2>

            <div className="w-24 h-px bg-[#D6B46A] mx-auto my-6"></div>

            <p className="text-white/70 leading-relaxed text-base">
              Esta invitación contiene música para disfrutar mejor la
              experiencia.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <button
                onClick={activarMusica}
                className="
                  bg-[#D6B46A] text-black
                  border border-[#D6B46A]
                  rounded-full px-6 py-3
                  uppercase tracking-[0.18em]
                  text-xs
                  hover:bg-transparent hover:text-[#D6B46A]
                  transition duration-300
                "
              >
                Activar
              </button>

              <button
                onClick={rechazarMusica}
                className="
                  bg-transparent text-[#D6B46A]
                  border border-[#D6B46A]/60
                  rounded-full px-6 py-3
                  uppercase tracking-[0.18em]
                  text-xs
                  hover:bg-[#D6B46A] hover:text-black
                  transition duration-300
                "
              >
                No activar
              </button>
            </div>
          </div>
        </div>
      )}

      {!mostrarModal && (
        <button
          onClick={toggleMusica}
          className="
            fixed bottom-5 right-5 z-[9998]
            w-12 h-12 rounded-full
            bg-[#D6B46A] text-black
            border border-[#D6B46A]
            shadow-[0_10px_30px_rgba(214,180,106,0.35)]
            flex items-center justify-center
            text-lg
            hover:bg-black hover:text-[#D6B46A]
            transition duration-300
          "
        >
          {musicaActiva ? "♪" : "×"}
        </button>
      )}

      <div className="overflow-hidden">
        <Celebracion
          titulo="Ceremonia"
          dia="Sabado"
          fecha="03"
          mesAnio="Octubre 2026"
          hora="2:00 PM"
          lugar="Mariscos/Terraza Neptuno"
          direccion="ORQUIDEA 550-69 SANTA CRUZ DE LAS FLORES, 45640 Tlajomulco de Zúñiga, Jal."
          ubicacion="https://maps.app.goo.gl/AGLwJH2TzsHSRzM88"
        />
      </div>

      <Vestimenta />

      <Intinerario2 />

      <div className="relative w-full flex justify-center bg-[#050505] overflow-hidden">
        <img
          src="/final.jpg"
          alt="Final"
          className="w-full max-w-6xl object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute inset-0 flex items-end justify-center pb-12 sm:pb-20 px-8 text-center">
          <div className="max-w-xl">
            <p className="uppercase tracking-[0.45em] text-[#D6B46A] text-xs sm:text-sm mb-6">
              Gracias por acompañarnos
            </p>

            <h2
              className="
                font-playfair
                text-white
                text-3xl
                sm:text-2xl
                md:text-3xl
                leading-tight
                drop-shadow-[0_5px_18px_rgba(0,0,0,0.6)]
              "
            >
              "Esta historia llena de amor y
              <br />
              felicidad que estamos por iniciar,
              <br />
              queremos que seas parte de ella."
            </h2>
          </div>
        </div>
      </div>

      <Confirmacion />
    </div>
  );
}