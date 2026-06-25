import React from "react";
import Celebracion from "./componentes-encabezado/ubicacion";
import Vestimenta from "./componentes-encabezado/vestimenta";
import Intinerario2 from "./componentes-encabezado/itinerario2";
import Novios from "./componentes-encabezado/novios";

export default function Itinerario() {

  return (
    <div>

{/* SECCIÓN VESTIMENTA */}
      <Novios />
      {/* SECCIÓN CELEBRACIONES */}
      <div className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">

        <Celebracion
          titulo="Ceremonia"
          dia="Jueves"
          fecha="11"
          mesAnio="Junio 2026"
          hora="4:30 PM"
          lugar="Salón Event Center"
          direccion="Puebla, Puebla"
          ubicacion="https://maps.app.goo.gl/TsSDUBKAractwi8F8"
        />

        <Celebracion
          titulo="Recepción"
          hora="8:00 PM"
          lugar="Jardín Magnolia"
          direccion="Atlixco, Puebla"
          ubicacion="https://maps.app.goo.gl/TsSDUBKAractwi8F8"
        />

      </div>

      {/* SECCIÓN VESTIMENTA */}
      <Vestimenta />

      {/* SECCIÓN ITINERARIO */}
      <Intinerario2/>

      {/* CONFIRMACIÓN */}

      {/* IMAGEN FINAL */}
      <div className="flex flex-col items-center justify-center bg-[#F7F4ED]">

        <img
          src="/finalboda.webp"
          alt="acepto"
          className="w-full max-w-5xl object-cover"
        />

      </div>
      <div className="flex flex-col items-center justify-center gap-3 py-24 px-6 bg-[#5E6650] text-white">

        <h1 className="text-xl sm:text-3xl font-bold font-playfair text-center">
          CONFIRMAR ASISTENCIA
        </h1>

        <img
          className="h-24 w-24 sm:h-28 sm:w-28 p-3"
          src="/anillos-de-boda.png"
          alt="dress code"
        />

        <p className="text-lg sm:text-2xl text-center font-cursiveDancing max-w-xl">
          Confirma tu asistencia antes del 20 de diciembre
        </p>

        <button
          className="
            mt-4 bg-[#B89B5E]
            rounded-full px-8 py-4
            flex items-center justify-center
            text-lg text-white
            hover:scale-105 transition
            shadow-lg
          "
          onClick={() =>
            window.location.href =
              "https://docs.google.com/forms/d/e/1FAIpQLSdWWDOUbW7aS_g6uzvas71apTg0ub0Aw8DG5GQf9_9a9jaJZA/viewform?usp=header"
          }
        >
          Confirmar Asistencia
        </button>

      </div>

    </div>
  );
}