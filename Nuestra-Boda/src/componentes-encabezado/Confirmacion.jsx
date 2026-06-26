import React, { useState } from "react";

const Confirmacion = () => {
  const [form, setForm] = useState({
    nombre: "",
    asistencia: "",
    mensaje: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwqn92dXHJttWhwoP98B_e07QGczwT1lGMfuYM7AuE4HfC_AdTrN5Cw227nghVnDhwxGQ/exec";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const enviarConfirmacion = async (e) => {
    e.preventDefault();

    if (!form.nombre.trim()) {
      setError("Por favor escribe tu nombre y apellido.");
      return;
    }

    if (!form.asistencia) {
      setError("Por favor confirma tu asistencia.");
      return;
    }

    setEnviando(true);
    setEnviado(false);
    setError("");

    try {
      const respuesta = await fetch(WEB_APP_URL, {
        method: "POST",
        body: JSON.stringify({
          nombre: form.nombre,
          asistencia: form.asistencia,
          mensaje: form.mensaje,
        }),
      });

      const data = await respuesta.json();

      if (data.success) {
        setEnviado(true);
        setForm({
          nombre: "",
          asistencia: "",
          mensaje: "",
        });
      } else {
        setError("No se pudo enviar la confirmación.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Ocurrió un error al enviar. Intenta nuevamente.");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section className="w-full bg-[#050505] py-16 px-6 flex items-center justify-center">
      <div
        className="
          w-full max-w-2xl
          bg-gradient-to-br from-[#090909] via-[#111111] to-[#1A1207]
          border border-[#D6B46A]/50
          rounded-tl-[4rem]
          rounded-br-[4rem]
          rounded-tr-[1rem]
          rounded-bl-[1rem]
          shadow-[0_20px_70px_rgba(0,0,0,0.75)]
          p-8 sm:p-12
          text-center
        "
      >
        <p className="uppercase tracking-[0.35em] text-[#D6B46A] text-xs sm:text-sm font-light">
          RSVP
        </p>

        <h1 className="font-playfair text-[#F8F1DC] text-4xl sm:text-5xl mt-4">
          Confirmar Asistencia
        </h1>

        <div className="w-28 h-px bg-[#D6B46A] mx-auto my-8"></div>

        <form onSubmit={enviarConfirmacion} className="space-y-6">
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre y apellido"
            disabled={enviando}
            className="
              w-full bg-black/40 border border-[#D6B46A]/50
              text-white placeholder:text-white/45
              rounded-full px-6 py-4
              outline-none focus:border-[#D6B46A]
              font-playfair
            "
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label
              className={`
                cursor-pointer rounded-full px-6 py-4 border transition
                ${
                  form.asistencia === "Sí asistiré"
                    ? "bg-[#D6B46A] text-black border-[#D6B46A]"
                    : "bg-black/30 text-[#F8F1DC] border-[#D6B46A]/50"
                }
              `}
            >
              <input
                type="radio"
                name="asistencia"
                value="Sí asistiré"
                checked={form.asistencia === "Sí asistiré"}
                onChange={handleChange}
                disabled={enviando}
                className="hidden"
              />
              Confirmar mi asistencia
            </label>

            <label
              className={`
                cursor-pointer rounded-full px-6 py-4 border transition
                ${
                  form.asistencia === "No podré asistir"
                    ? "bg-[#D6B46A] text-black border-[#D6B46A]"
                    : "bg-black/30 text-[#F8F1DC] border-[#D6B46A]/50"
                }
              `}
            >
              <input
                type="radio"
                name="asistencia"
                value="No podré asistir"
                checked={form.asistencia === "No podré asistir"}
                onChange={handleChange}
                disabled={enviando}
                className="hidden"
              />
              No podré asistir
            </label>
          </div>

          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            placeholder="Mensaje para los novios"
            disabled={enviando}
            rows="4"
            className="
              w-full bg-black/40 border border-[#D6B46A]/50
              text-white placeholder:text-white/45
              rounded-3xl px-6 py-4
              outline-none focus:border-[#D6B46A]
              resize-none
              font-playfair
            "
          />

          {error && (
            <p className="text-red-300 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={enviando}
            className={`
              w-full rounded-full px-8 py-4
              uppercase tracking-[0.25em]
              text-sm
              transition duration-300
              border border-[#D6B46A]
              flex items-center justify-center gap-3
              ${
                enviando
                  ? "bg-[#D6B46A]/50 text-black cursor-not-allowed"
                  : "bg-[#D6B46A] text-black hover:bg-transparent hover:text-[#D6B46A]"
              }
            `}
          >
            {enviando && (
              <span className="w-4 h-4 border-2 border-black/40 border-t-black rounded-full animate-spin"></span>
            )}

            {enviando ? "Cargando..." : "Enviar"}
          </button>
        </form>

        {enviado && (
          <p className="mt-6 text-[#D6B46A] font-cursiveDancing text-2xl">
            Gracias, tu confirmación ha sido enviada.
          </p>
        )}
      </div>
    </section>
  );
};

export default Confirmacion;