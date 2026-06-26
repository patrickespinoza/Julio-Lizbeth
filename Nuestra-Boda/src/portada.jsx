import React, { useRef, useState } from "react";

export default function Portada() {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error al intentar reproducir el audio:", error);
      });
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div>
      <section className="relative w-full h-[calc(110vh-160px)] md:h-screen overflow-hidden flex items-center justify-center text-white bg-[#050505]">

        {/* MOBILE */}
        <img
          src="/portada.jpg"
          alt="Portada"
          className="absolute inset-0 w-[100%] h-[80%] md:hidden"
        />

        {/* DESKTOP */}
        <img
          src="/portada.jpg"
          alt="Portada"
          className="
            hidden
            md:block
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-[center_20%]
          "
        />

        {/* Overlay elegante */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40"></div>

        {/* CONTENIDO */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">

          {/* Título */}
          <p
            className="
              uppercase
              tracking-[0.55em]
              text-[11px]
              sm:text-xs
              md:text-base
              font-light
              text-white/90
              mb-8
            "
          >
            NUESTRA BODA
          </p>

          {/* Nombre 1 */}
          <h1
            className="
              font-serif
              font-light
              leading-none
              text-5xl
              sm:text-6xl
              md:text-8xl
              lg:text-9xl
              drop-shadow-[0_4px_12px_rgba(0,0,0,.55)]
            "
          >
            Julio
          </h1>

          {/* Ampersand */}
          <p
            className="
              font-serif
              italic
              text-4xl
              sm:text-5xl
              md:text-6xl
              text-[#E6D2A2]
              my-3
              drop-shadow-[0_4px_10px_rgba(0,0,0,.45)]
            "
          >
            &
          </p>

          {/* Nombre 2 */}
          <h1
            className="
              font-serif
              font-light
              leading-none
              text-5xl
              sm:text-6xl
              md:text-8xl
              lg:text-9xl
              drop-shadow-[0_4px_12px_rgba(0,0,0,.55)]
            "
          >
            Lizbeth
          </h1>

          {/* Línea */}
          <div className="w-24 md:w-32 h-px bg-[#E6D2A2] my-8"></div>

          {/* Fecha */}
          <p
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              sm:text-sm
              md:text-xl
              text-white
              font-light
            "
          >
            03 · OCTUBRE · 2026
          </p>

        </div>
      </section>
    </div>
  );
}