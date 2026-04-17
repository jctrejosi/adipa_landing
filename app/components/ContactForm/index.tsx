"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export const ContactForm = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!form.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    }

    if (!form.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Email inválido";
    }

    if (!form.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
    } else if (form.message.length < 10) {
      newErrors.message = "Mínimo 10 caracteres";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-[#13013f] rounded-xl p-8 text-center max-w-xl w-full">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full border border-green-300">
            <Check className="text-green-600" size={28} />
          </div>
        </div>

        <h2 className="text-[#13013f] text-lg font-semibold mb-2">
          Mensaje enviado
        </h2>

        <p className="text-[#13013f]/70 mb-6">
          Te responderemos lo antes posible.
        </p>

        <button
          onClick={handleReset}
          className="text-[#13013f] hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white md:border md:border-[#13013f] rounded-xl md:p-8 p-4 space-y-6 w-full max-w-xl"
    >
      {/* header */}
      <div className="space-y-2">
        <h4 className="text-[#13013f] text-xl font-semibold">
          ¿Tienes una idea para un nuevo curso?
        </h4>

        <p className="text-[#13013f]/70 text-sm leading-relaxed">
          En ADIPA valoramos tus sugerencias. Cuéntanos qué curso te gustaría
          ver en la plataforma y ayúdanos a crear contenido relevante para la
          comunidad.
        </p>
      </div>
      {/* nombre */}
      <div>
        <label className="text-sm text-[#13013f]">
          Nombre <span className="text-red-500">*</span>
        </label>

        <input
          type="text"
          placeholder="Tu nombre completo"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1 w-full bg-white border border-[#13013f] rounded-md px-3 py-2 text-[#13013f] outline-none focus:ring-2 focus:ring-[#13013f]"
        />

        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>

      {/* email */}
      <div>
        <label className="text-sm text-[#13013f]">
          Email <span className="text-red-500">*</span>
        </label>

        <input
          type="email"
          placeholder="tu@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1 w-full bg-white border border-[#13013f] rounded-md px-3 py-2 text-[#13013f] outline-none focus:ring-2 focus:ring-[#13013f]"
        />

        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>

      {/* mensaje */}
      <div>
        <label className="text-sm text-[#13013f]">
          Mensaje <span className="text-red-500">*</span>
        </label>

        <textarea
          placeholder="Escribe tu consulta aquí..."
          value={form.message}
          maxLength={300}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1 w-full bg-white border border-[#13013f] rounded-md px-3 py-2 text-[#13013f] outline-none focus:ring-2 focus:ring-[#13013f] h-28 resize-none"
        />

        <div className="flex justify-between text-xs mt-1">
          <span className="text-[#13013f]/60">Mínimo 10 caracteres</span>
          <span className="text-[#13013f]/60">{form.message.length}/300</span>
        </div>

        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      {/* botón */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-[#7d61f1] text-white py-2 rounded-md hover:opacity-90 transition"
      >
        <Send size={16} />
        Enviar mensaje
      </button>
    </form>
  );
};
