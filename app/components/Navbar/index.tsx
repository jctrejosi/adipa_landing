"use client";

import styles from "./styles.module.css";
import { ChevronDown } from "lucide-react";
import { Dropdown } from "../Dropdown";

type Props = {
  iconWhatsapp: string;
};

export const Navbar = ({ iconWhatsapp }: Props) => {
  return (
    <div className={styles.container}>
      {/* izquierda */}
      <div className={styles.left}>
        <button className={styles.whatsapp}>
          <img
            src={iconWhatsapp}
            className={styles.whatsappIcon}
            alt="WhatsApp Icon"
          />
        </button>
        <span className={styles.separator}></span>
        <Dropdown
          variant="mega"
          trigger={
            <button className={styles.discover}>
              Descubre ADIPA
              <ChevronDown size={14} />
            </button>
          }
          sections={[
            {
              title: "Nosotros",
              items: [
                {
                  label: "Sobre ADIPA",
                  href: "https://adipa.cl/quienes-somos/",
                },
                {
                  label: "Explora las Escuelas",
                  href: "https://adipa.cl/escuelas/",
                },
                { label: "Docentes", href: "https://adipa.cl/docentes/" },
                { label: "Impacto", href: "https://adipa.cl/impacto/" },
                {
                  label: "Sala de Prensa",
                  href: "https://adipa.cl/adiprensa/",
                },
                {
                  label: "Trabaja con nosotros",
                  href: "https://adipa.cl/trabaja-con-nosotros/",
                },
              ],
            },
            {
              title: "Comunidad",
              items: [
                {
                  label: "En tus Palabras",
                  href: "https://adipa.cl/entuspalabras/",
                },
                {
                  label: "Encuentra Empleos",
                  href: "https://adipa.cl/empleos/",
                },
                { label: "Eventos", href: "https://adipa.cl/eventos/" },
                {
                  label: "Testimonios",
                  href: "https://adipa.cl/experiencias/",
                },
              ],
            },
            {
              title: "Beneficios",
              items: [
                { label: "Convenios", href: "https://adipa.cl/convenios/" },
                { label: "Adipartners", href: "https://adipa.cl/adipartners/" },
                {
                  label: "Curso gratis",
                  href: "https://adipa.cl/noticias/curso-gratis-cumpleanos/",
                },
                {
                  label: "Ver todos",
                  href: "https://adipa.cl/beneficios-adipa/",
                  bold: true,
                },
              ],
            },
            {
              title: "Explorar",
              items: [
                { label: "Categorías", href: "https://adipa.cl/categorias/" },
                { label: "Rutas", href: "https://adipa.cl/rutas/" },
                {
                  label: "Capacitación institucional",
                  href: "https://adipa.cl/capacitacion-institucional/",
                  bold: true,
                },
              ],
            },
          ]}
        />
      </div>

      {/* derecha */}
      <nav className={styles.nav}>
        <Dropdown
          trigger={
            <span className={styles.link}>
              Recursos <ChevronDown size={12} />
            </span>
          }
          sections={[
            {
              items: [
                {
                  label: "Ebooks Gratuitos",
                  href: "https://adipa.cl/recursos/ebooks/",
                },
                { label: "Glosario", href: "https://adipa.cl/glosario/" },
                {
                  label: "Investigaciones",
                  href: "https://adipa.cl/investigacion/",
                },
                { label: "Noticias", href: "https://adipa.cl/noticias/" },
                { label: "Newsletter", href: "https://adipa.cl/newsletter/" },
                {
                  label: "Podcast Adipados",
                  href: "https://adipa.cl/adipados/",
                },
              ],
            },
          ]}
        />

        <span className={styles.link}>Seminarios</span>
        <span className={`${styles.link} ${styles.bold}`}>Congreso</span>
        <span className={styles.link}>Especializaciones</span>
        <span className={styles.link}>Acreditaciones</span>
        <span className={styles.link}>Sesiones Magistrales</span>
        <span className={styles.link}>Diplomados</span>
        <span className={`${styles.link} ${styles.bold}`}>Cursos</span>
      </nav>
    </div>
  );
};
