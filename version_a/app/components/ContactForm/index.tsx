"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { ContactFormProps, FormData } from "./types";

export const ContactForm = ({
  title,
  description,
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
  minMessageLengthLabel,
  submitButtonLabel,
  successTitle,
  successDescription,
  successButtonLabel,
}: ContactFormProps) => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";

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
      <section
        role="status"
        aria-live="polite"
        className="bg-white border border-[#13013f] rounded-xl p-8 text-center max-w-xl w-full dark:bg-gray-800 dark:border-gray-600"
      >
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 p-4 rounded-full border border-green-300 dark:bg-green-900/50 dark:border-green-700">
            <Check className="text-green-600 dark:text-green-400" size={28} />
          </div>
        </div>

        <h2 className="text-[#13013f] text-lg font-semibold mb-2 dark:text-gray-100">
          {successTitle}
        </h2>

        <p className="text-[#13013f]/70 mb-6 dark:text-gray-400">
          {successDescription}
        </p>

        <button
          type="button"
          onClick={handleReset}
          className="text-[#13013f] hover:underline dark:text-gray-300"
        >
          {successButtonLabel}
        </button>
      </section>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-describedby="form-description"
      className="bg-white md:border md:border-[#13013f] rounded-xl md:p-8 p-4 space-y-6 w-full max-w-xl dark:bg-gray-800 dark:md:border-gray-600"
    >
      <header className="space-y-2">
        <h1 className="text-[#13013f] text-xl font-semibold dark:text-gray-100">
          {title}
        </h1>

        <p
          id="form-description"
          className="text-[#13013f]/70 text-sm leading-relaxed dark:text-gray-400"
        >
          {description}
        </p>
      </header>

      {/* nombre */}
      <div>
        <label
          htmlFor="name"
          className="text-sm text-[#13013f] dark:text-gray-300"
        >
          {nameLabel} <span aria-hidden="true">*</span>
        </label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder={namePlaceholder}
          value={form.name}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-1 w-full bg-white border border-[#13013f] rounded-md px-3 py-2 text-[#13013f] outline-none focus:ring-2 focus:ring-[#13013f] dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-gray-500"
        />

        {errors.name && (
          <p id="name-error" role="alert" className="text-red-500 text-xs mt-1">
            {errors.name}
          </p>
        )}
      </div>

      {/* email */}
      <div>
        <label
          htmlFor="email"
          className="text-sm text-[#13013f] dark:text-gray-300"
        >
          {emailLabel} <span aria-hidden="true">*</span>
        </label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder={emailPlaceholder}
          value={form.email}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-1 w-full bg-white border border-[#13013f] rounded-md px-3 py-2 text-[#13013f] outline-none focus:ring-2 focus:ring-[#13013f] dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-gray-500"
        />

        {errors.email && (
          <p
            id="email-error"
            role="alert"
            className="text-red-500 text-xs mt-1"
          >
            {errors.email}
          </p>
        )}
      </div>

      {/* mensaje */}
      <div>
        <label
          htmlFor="message"
          className="text-sm text-[#13013f] dark:text-gray-300"
        >
          {messageLabel} <span aria-hidden="true">*</span>
        </label>

        <textarea
          id="message"
          name="message"
          placeholder={messagePlaceholder}
          value={form.message}
          maxLength={300}
          aria-invalid={!!errors.message}
          aria-describedby={
            errors.message ? "message-error message-help" : "message-help"
          }
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1 w-full bg-white border border-[#13013f] rounded-md px-3 py-2 text-[#13013f] outline-none focus:ring-2 focus:ring-[#13013f] h-28 resize-none dark:bg-gray-900 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-gray-500"
        />

        <div id="message-help" className="flex justify-between text-xs mt-1">
          <span className="text-[#13013f]/60 dark:text-gray-400">
            {minMessageLengthLabel}
          </span>
          <span className="text-[#13013f]/60 dark:text-gray-400">
            {form.message.length}/300
          </span>
        </div>

        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="text-red-500 text-xs mt-1"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* submit */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-[#7d61f1] text-white py-2 rounded-md hover:opacity-90 transition dark:bg-[#5a3dd4]"
      >
        <Send size={16} />
        {submitButtonLabel}
      </button>
    </form>
  );
};
