import React from "react";

const Celebracion = ({
  dia,
  fecha,
  mesAnio,
  hora,
  lugar,
  direccion,
  ubicacion,
  titulo,
}) => {
  return (
    <div className="w-full bg-[#050505] py-20 px-6 flex flex-col items-center justify-center overflow-hidden">

      {/* FECHA */}
      <div className="text-center mb-12">
        <p className="text-[#D6B46A] tracking-[0.4em] uppercase text-sm sm:text-base font-light">
          {dia}
        </p>

        <h1 className="text-7xl sm:text-8xl font-playfair text-white leading-none mt-3 drop-shadow-[0_8px_20px_rgba(214,180,106,0.25)]">
          {fecha}
        </h1>

        <p className="text-[#D6B46A] text-2xl sm:text-3xl tracking-[0.25em] mt-4 font-light">
          {mesAnio}
        </p>
      </div>

      {/* TARJETA */}
      <div
        className="
          relative max-w-xl w-full p-10 sm:p-14
          bg-gradient-to-br from-[#111111] via-[#050505] to-[#16100A]
          shadow-[0_20px_60px_rgba(0,0,0,0.65)]
          border border-[#D6B46A]/40

          rounded-tl-[4rem]
          rounded-br-[4rem]
          rounded-tr-[0.8rem]
          rounded-bl-[0.8rem]
        "
      >
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-[1px] bg-[#D6B46A]"></div>

        <div className="text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-playfair text-white tracking-wide">
            {titulo}
          </h2>

          <div className="w-20 h-[1px] mx-auto bg-[#D6B46A]"></div>
        </div>

        <div className="mt-10 flex flex-col items-center text-center space-y-7">
          <div>
            <p className="text-[#D6B46A] uppercase tracking-[0.3em] text-xs sm:text-sm font-light">
              Hora
            </p>

            <p className="text-2xl sm:text-3xl font-cursiveDancing text-white mt-2">
              {hora}
            </p>
          </div>

          <div>
            <p className="text-[#D6B46A] uppercase tracking-[0.3em] text-xs sm:text-sm font-light">
              Lugar
            </p>

            <p className="text-2xl sm:text-3xl font-cursiveDancing text-white mt-2">
              {lugar}
            </p>

            <p className="text-white/70 mt-4 leading-relaxed text-sm sm:text-base max-w-md">
              {direccion}
            </p>
          </div>

          <a
            href={ubicacion}
            target="_blank"
            rel="noreferrer"
            className="
              mt-4 border border-[#D6B46A]
              bg-[#D6B46A] text-black
              hover:bg-transparent hover:text-[#D6B46A]
              transition duration-300
              px-8 py-3 rounded-full shadow-[0_10px_30px_rgba(214,180,106,0.25)]
              tracking-[0.15em] uppercase text-xs sm:text-sm
            "
          >
            Ver Ubicación
          </a>
        </div>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-28 h-[1px] bg-[#D6B46A]"></div>
      </div>
    </div>
  );
};

export default Celebracion;