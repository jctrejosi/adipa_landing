"use client";

import { ChevronDown } from "lucide-react";
import { Dropdown } from "../Dropdown";
import { discoverSections, resourcesSections } from "./data";

type Props = {
  iconWhatsapp: string;
};

export const Navbar = ({ iconWhatsapp }: Props) => {
  return (
    <div className="flex items-center justify-start w-full px-[var(--navbar-padding-x,40px)] py-[var(--navbar-padding-y,15px)] bg-[var(--navbar-bg,#fff)] text-[var(--navbar-font-size,14px)] font-[var(--font-family,inherit)]">
      {/* left */}
      <div className="flex items-center mr-[100px]">
        <button className="text-[#25d366]">
          <img src={iconWhatsapp} alt="WhatsApp Icon" className="w-5 h-5" />
        </button>

        <span className="w-px h-5 bg-black mx-[10px]" />

        <Dropdown
          variant="mega"
          trigger={
            <button className="flex items-center gap-[6px] text-[#3a3a3a] font-medium text-[var(--discover-font-size,14px)]">
              Descubre ADIPA
              <ChevronDown size={14} />
            </button>
          }
          sections={discoverSections}
        />
      </div>

      {/* right */}
      <nav className="flex items-center gap-[22px]">
        <Dropdown
          trigger={
            <span className="flex items-center cursor-pointer text-[14px] text-[var(--link-color,#3a3a3a)] hover:text-black">
              Recursos <ChevronDown size={12} />
            </span>
          }
          sections={resourcesSections}
        />

        <div className="relative flex items-center">
          <span className="absolute -top-3 right-0 text-[10px] font-semibold px-[7px] py-[2px] rounded bg-[#704efd] text-white leading-none">
            Gratis
          </span>
          <span className="flex items-center cursor-pointer text-[14px] text-[var(--link-color,#3a3a3a)] hover:text-black">
            Seminarios
          </span>
        </div>

        <div className="relative flex items-center">
          <span className="absolute -top-3 right-0 text-[10px] font-semibold px-[7px] py-[2px] rounded bg-[#FF017C] text-white leading-none">
            Nuevo
          </span>
          <span className="flex items-center cursor-pointer text-[14px] font-semibold text-[var(--link-color,#3a3a3a)] hover:text-black">
            Congreso
          </span>
        </div>

        <span className="cursor-pointer text-[14px] text-[var(--link-color,#3a3a3a)] hover:text-black">
          Especializaciones
        </span>
        <span className="cursor-pointer text-[14px] text-[var(--link-color,#3a3a3a)] hover:text-black">
          Acreditaciones
        </span>
        <span className="cursor-pointer text-[14px] text-[var(--link-color,#3a3a3a)] hover:text-black">
          Sesiones Magistrales
        </span>
        <span className="cursor-pointer text-[14px] text-[var(--link-color,#3a3a3a)] hover:text-black">
          Diplomados
        </span>
        <span className="cursor-pointer text-[14px] font-semibold text-[var(--link-color,#3a3a3a)] hover:text-black">
          Cursos
        </span>
      </nav>
    </div>
  );
};
