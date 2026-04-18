"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Globe } from "lucide-react";
import { FooterProps, FooterSection, NewsletterForm } from "./types";
import {
  DEFAULT_BOTTOM_LINKS,
  DEFAULT_CONTACT,
  DEFAULT_COUNTRIES,
  DEFAULT_SECTIONS,
  DEFAULT_SOCIAL_LINKS,
} from "./data";

// ============================================================
// Subcomponentes
// ============================================================

const SectionLinks = ({ title, links }: FooterSection) => (
  <div className="flex flex-col gap-5">
    <h4 className="text-[14px] font-bold uppercase tracking-widest border-b border-white/10 pb-2 inline-block text-[#8494C9]">
      {title}
    </h4>
    <ul className="flex flex-col gap-3">
      {links.map((link, idx) => (
        <li key={idx}>
          <a
            href={link.href || "#"}
            className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// ============================================================
// Componente principal
// ============================================================

export const Footer = ({
  logoSrc = "https://storage.googleapis.com/statics-files-adipa-cl/dist_compress/dist/img/icons/logo-adipa.svg",
  countries = DEFAULT_COUNTRIES,
  sections = DEFAULT_SECTIONS,
  socialLinks = DEFAULT_SOCIAL_LINKS,
  contact = DEFAULT_CONTACT,
  bottomLinks = DEFAULT_BOTTOM_LINKS,
  copyrightText = "© 2026 ADIPA. Todos los derechos reservados.",
}: FooterProps) => {
  const [formData, setFormData] = useState<NewsletterForm>({
    name: "",
    email: "",
    frequency: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter form submitted:", formData);
  };

  return (
    <footer className="bg-[#3a3f5a] text-white font-sans">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 xl:gap-12">
          {/* Logo and Countries */}
          <div className="flex flex-col gap-8">
            <img
              src={logoSrc}
              alt="ADIPA"
              className="w-40 brightness-0 invert"
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Estamos presentes en:
              </span>
              <ul className="flex flex-col gap-3">
                {countries.map((country) => (
                  <li
                    key={country.code}
                    className="flex items-center gap-3 text-[13px] font-bold hover:text-blue-300 cursor-pointer transition-colors group"
                  >
                    <span className="w-6 flex justify-center">
                      {country.globeIcon ? (
                        <Globe size={18} className="text-white" />
                      ) : (
                        country.flag
                      )}
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {country.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Render sections dynamically: first two go into second column, next three into third column */}
          <div className="flex flex-col gap-12">
            {sections.slice(0, 2).map((section) => (
              <SectionLinks key={section.title} {...section} />
            ))}
          </div>
          <div className="flex flex-col gap-12">
            {sections.slice(2).map((section) => (
              <SectionLinks key={section.title} {...section} />
            ))}
          </div>

          {/* Contact & Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[14px] font-bold uppercase tracking-widest text-[#8494C9]">
              Contacto
            </h4>
            <div className="flex flex-col gap-4 text-[13px] text-gray-300">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-blue-300 shrink-0" />
                <span>{contact.phone}</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-blue-300 shrink-0" />
                <span>{contact.email}</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-300 shrink-0" />
                <a
                  href={contact.addressLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <span className="text-xs leading-tight text-white">
                    {contact.address}
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              {bottomLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href || "#"}
                  className={`${
                    idx === 0
                      ? "text-[13px] font-bold text-white hover:underline italic"
                      : "text-xs font-bold text-gray-300 hover:text-white underline"
                  } cursor-pointer`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10 h-fit min-h-[350px] flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <h4 className="text-[13px] font-bold mb-2 uppercase leading-tight">
                Suscríbete a nuestro Newsletter
              </h4>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase text-gray-400">
                  Nombre*
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white text-black px-3 py-1.5 rounded-md text-sm outline-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold uppercase text-gray-400">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white text-black px-3 py-1.5 rounded-md text-sm outline-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase leading-tight">
                  Frecuencia*
                </label>
                <select
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleInputChange}
                  className="bg-white text-black px-3 py-1.5 rounded-md text-sm outline-none"
                  required
                >
                  <option value="">Selecciona</option>
                  <option value="2">2 al mes</option>
                  <option value="1">1 al mes</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-[#2cb7ff] hover:bg-blue-500 text-white font-bold py-2 rounded-md transition-all flex items-center justify-center gap-2 text-sm mt-2"
              >
                ENVIAR
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Social Icons and Copyright */}
      <div className="bg-[#3a3f5a] border-t border-white/10 py-6">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-base text-gray-400 font-medium">{copyrightText}</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white text-[#3a3f5a] flex items-center justify-center hover:bg-[#2cb7ff] hover:text-white transition-all transform hover:-translate-y-1"
                aria-label={social.ariaLabel}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
