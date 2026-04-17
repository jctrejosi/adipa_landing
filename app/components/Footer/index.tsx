// components/Footer/Footer.tsx
"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Globe } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaSpotify,
  FaTiktok,
} from "react-icons/fa";

type NewsletterForm = {
  name: string;
  email: string;
  frequency: string;
};

export const Footer = () => {
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
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 xl:gap-12">
          {/* Logo and Countries */}
          <div className="flex flex-col gap-8">
            <img
              src="https://storage.googleapis.com/statics-files-adipa-cl/dist_compress/dist/img/icons/logo-adipa.svg"
              alt="ADIPA"
              className="w-40 brightness-0 invert"
            />
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                Estamos presentes en:
              </span>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 text-[13px] font-bold hover:text-blue-300 cursor-pointer transition-colors group">
                  <span className="w-6 flex justify-center">🇨🇱</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    CHILE
                  </span>
                </li>
                <li className="flex items-center gap-3 text-[13px] font-bold hover:text-blue-300 cursor-pointer transition-colors group">
                  <span className="w-6 flex justify-center">🇲🇽</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    MÉXICO
                  </span>
                </li>
                <li className="flex items-center gap-3 text-[13px] font-bold hover:text-blue-300 cursor-pointer transition-colors group">
                  <span className="w-6 flex justify-center">🇨🇴</span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    COLOMBIA
                  </span>
                </li>
                <li className="flex items-center gap-3 text-[13px] font-bold hover:text-blue-300 cursor-pointer transition-colors group">
                  <Globe size={18} className="text-white" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    GLOBAL
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Programs & Schools */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5">
              <h4 className="text-[14px] font-bold uppercase tracking-widest border-b border-white/10 pb-2 inline-block text-[#8494C9]">
                Programas
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="#"
                    className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase"
                  >
                    Cursos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase"
                  >
                    Seminarios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase"
                  >
                    Diplomados
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-[14px] font-bold uppercase tracking-widest border-b border-white/10 pb-2 inline-block text-[#8494C9]">
                Escuelas
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Escuela Salud Mental Adultos
                  </a>
                </li>
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Escuela de Salud Mental Infanto-Juvenil
                  </a>
                </li>
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Escuela de Psicología Organizacional
                  </a>
                </li>
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Escuela Psicosocial Jurídica
                  </a>
                </li>
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Escuela de Educación Neurodesarrollo
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Resources & Benefits & About */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-5">
              <h4 className="text-[14px] font-bold uppercase tracking-widest border-b border-white/10 pb-2 inline-block text-[#8494C9]">
                Recursos
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Noticias
                  </a>
                </li>
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Glosario
                  </a>
                </li>
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Podcast Adipados
                  </a>
                </li>
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Investigaciones
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-[14px] font-bold uppercase tracking-widest border-b border-white/10 pb-2 inline-block text-[#8494C9]">
                Beneficios
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Convenios
                  </a>
                </li>
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Programa Adipartners
                  </a>
                </li>
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Giftcards
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h4 className="text-[14px] font-bold uppercase tracking-widest border-b border-white/10 pb-2 inline-block text-[#8494C9]">
                Conoce Adipa
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Sobre Adipa
                  </a>
                </li>
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Escuelas
                  </a>
                </li>
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Docentes
                  </a>
                </li>
                <li>
                  <a className="text-xs font-bold text-gray-300 hover:text-white transition-all uppercase cursor-pointer">
                    Prensa
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[14px] font-bold uppercase tracking-widest text-[#8494C9]">
              Contacto
            </h4>
            <div className="flex flex-col gap-4 text-[13px] text-gray-300">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-blue-300 shrink-0" />
                <span>CL +56957253424</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-blue-300 shrink-0" />
                <span>info@adipa.cl</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-300 shrink-0" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Estoril+120+oficina+414+Las+Condes+Santiago+Chile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <span className="text-xs leading-tight text-white">
                    Estoril 120, oficina 414, Las Condes. Santiago de Chile.
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <a className="text-[13px] font-bold text-white hover:underline cursor-pointer italic">
                ¡REGALA UNA GIFTCARD!
              </a>
              <a className="text-xs font-bold text-gray-300 hover:text-white cursor-pointer underline">
                ¿Necesitas ayuda psicológica?
              </a>
              <a className="text-xs font-bold text-gray-300 hover:text-white cursor-pointer underline">
                Términos y condiciones
              </a>
              <a className="text-xs font-bold text-gray-300 hover:text-white cursor-pointer underline">
                Centro de ayuda
              </a>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10 h-fit min-h-[350px] flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <h4 className="text-[13px] font-bold mb-2 uppercase leading-tight">
                Newsletter
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
      <div className="bg-[#3a3f5a] py-6 bg-[#3a3f5a] border-t border-white/10 py-6">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 xl:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright - Right side */}
          <p className="text-base text-gray-400 font-medium">
            © 2026 ADIPA. Todos los derechos reservados.
          </p>
          {/* Social Icons - Left side as per image */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/adipa.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white text-[#3a3f5a] flex items-center justify-center hover:bg-[#2cb7ff] hover:text-white transition-all transform hover:-translate-y-1"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://www.instagram.com/adipa.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white text-[#3a3f5a] flex items-center justify-center hover:bg-[#2cb7ff] hover:text-white transition-all transform hover:-translate-y-1"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCSx-fxlxiMHExaWwyHT8P8A"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white text-[#3a3f5a] flex items-center justify-center hover:bg-[#2cb7ff] hover:text-white transition-all transform hover:-translate-y-1"
              aria-label="YouTube"
            >
              <FaYoutube size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/academia-digital-de-psicologia-y-aprendizaje-adipa/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white text-[#3a3f5a] flex items-center justify-center hover:bg-[#2cb7ff] hover:text-white transition-all transform hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://open.spotify.com/show/4mwZlXLYaGdr9WIqiuSHup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white text-[#3a3f5a] flex items-center justify-center hover:bg-[#2cb7ff] hover:text-white transition-all transform hover:-translate-y-1"
              aria-label="Spotify"
            >
              <FaSpotify size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@somosadipa"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white text-[#3a3f5a] flex items-center justify-center hover:bg-[#2cb7ff] hover:text-white transition-all transform hover:-translate-y-1"
              aria-label="TikTok"
            >
              <FaTiktok size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
