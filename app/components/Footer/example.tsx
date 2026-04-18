import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaSpotify,
  FaTiktok,
} from "react-icons/fa";
import { Country, FooterSection, SocialLink } from "./types";

export const DEFAULT_COUNTRIES: Country[] = [
  { code: "CL", name: "CHILE", flag: "🇨🇱" },
  { code: "MX", name: "MÉXICO", flag: "🇲🇽" },
  { code: "CO", name: "COLOMBIA", flag: "🇨🇴" },
  { code: "GL", name: "GLOBAL", flag: "", globeIcon: true },
];

export const DEFAULT_CONTACT = {
  phone: "CL +56957253424",
  email: "info@adipa.cl - sac@adipa.cl",
  address:
    "storil 120, oficina 414, Las Condes. Santiago de Chile - Montecito Nº38. Edificio WTC, piso 33. Of. 04. Nápoles. Ciudad de México",
  addressLink:
    "https://www.google.com/maps/search/?api=1&query=Estoril+120+oficina+414+Las+Condes+Santiago+Chile",
};

export const DEFAULT_BOTTOM_LINKS = [
  { label: "¡REGALA UNA GIFTCARD!" },
  { label: "¿Necesitas ayuda psicológica?" },
  { label: "Términos y condiciones" },
  { label: "Centro de ayuda" },
];

export const DEFAULT_SECTIONS: FooterSection[] = [
  {
    title: "Programas",
    links: [
      { label: "Cursos" },
      { label: "Seminarios" },
      { label: "Diplomados" },
    ],
  },
  {
    title: "Escuelas",
    links: [
      { label: "Escuela Salud Mental Adultos" },
      { label: "Escuela de Salud Mental Infanto-Juvenil" },
      { label: "Escuela de Psicología Organizacional" },
      { label: "Escuela Psicosocial Jurídica" },
      { label: "Escuela de Educación Neurodesarrollo" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Noticias" },
      { label: "Glosario" },
      { label: "Podcast Adipados" },
      { label: "Investigaciones" },
    ],
  },
  {
    title: "Beneficios",
    links: [
      { label: "Convenios" },
      { label: "Programa Adipartners" },
      { label: "Giftcards" },
    ],
  },
  {
    title: "Conoce Adipa",
    links: [
      { label: "Sobre Adipa" },
      { label: "Escuelas" },
      { label: "Docentes" },
      { label: "Prensa" },
    ],
  },
];

export const DEFAULT_SOCIAL_LINKS: SocialLink[] = [
  {
    icon: <FaFacebookF size={18} />,
    href: "https://www.facebook.com/adipa.cl",
    ariaLabel: "Facebook",
  },
  {
    icon: <FaInstagram size={18} />,
    href: "https://www.instagram.com/adipa.cl/",
    ariaLabel: "Instagram",
  },
  {
    icon: <FaYoutube size={18} />,
    href: "https://www.youtube.com/channel/UCSx-fxlxiMHExaWwyHT8P8A",
    ariaLabel: "YouTube",
  },
  {
    icon: <FaLinkedinIn size={18} />,
    href: "https://www.linkedin.com/company/academia-digital-de-psicologia-y-aprendizaje-adipa/",
    ariaLabel: "LinkedIn",
  },
  {
    icon: <FaSpotify size={18} />,
    href: "https://open.spotify.com/show/4mwZlXLYaGdr9WIqiuSHup",
    ariaLabel: "Spotify",
  },
  {
    icon: <FaTiktok size={18} />,
    href: "https://www.tiktok.com/@somosadipa",
    ariaLabel: "TikTok",
  },
];
