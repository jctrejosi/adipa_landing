"use client";

import { useMemo, useState } from "react";

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { HeroSearch } from "./components/HeroSearch";
import { Filters } from "./components/Filters";
import { CourseList } from "./components/CourseList";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

import { coursesData, groupsFilter, orderFilter, rankingFilter } from "./data";
import { applyFilters } from "./helpers/applyFilters";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [filtersState, setFiltersState] = useState({
    ranking: "*",
    filters: {},
  });

  const filteredCourses = useMemo(() => {
    return applyFilters(coursesData, filtersState);
  }, [filtersState]);

  return (
    <div className="min-h-screen">
      <Header
        logoSrc="/assets/logo-adipa.svg"
        onSearch={(value) => console.log("search:", value)}
        onLogin={() => console.log("login")}
        onRegister={() => console.log("register")}
        onCartClick={() => console.log("cart")}
        cartCount={2}
      />

      <div className="hidden lg:block">
        <Navbar iconWhatsapp="/assets/icons-whatsapp.svg" />
      </div>

      <HeroSearch onSearch={setSearch} />

      <div className="bg-white pt-24">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-0">
          <div className="flex flex-col xl:flex-row gap-6 items-start">
            <aside className="w-full xl:w-[285px] xl:flex-none">
              <Filters
                rankings={rankingFilter}
                groups={groupsFilter}
                onChange={setFiltersState}
              />
            </aside>

            <main className="flex-1 min-w-0">
              <CourseList
                title="Cursos que te permitirán potenciar tu carrera."
                searchPlaceholder="Buscar curso, docente, categoría..."
                allLabel="Todos"
                noResultsText="No se encontraron cursos para la búsqueda actual."
                detailButtonLabel="Ver detalle +"
                liveLabel="En vivo"
                inProgressLabel="• En progreso"
                startLabel="Inicio :"
                courses={filteredCourses}
                sortOptions={orderFilter}
                externalSearch={search}
                onSearchChange={setSearch}
              />
            </main>
          </div>
        </div>
      </div>

      <div className="w-full bg-white flex items-center justify-center py-32">
        <ContactForm
          title="¿Tienes una idea para un nuevo curso?"
          description="En ADIPA valoramos tus sugerencias..."
          nameLabel="Nombre"
          namePlaceholder="Tu nombre completo"
          emailLabel="Email"
          emailPlaceholder="tu@email.com"
          messageLabel="Mensaje"
          messagePlaceholder="Escribe tu consulta aquí..."
          minMessageLengthLabel="Mínimo 10 caracteres"
          submitButtonLabel="Enviar mensaje"
          successTitle="Mensaje enviado"
          successDescription="Te responderemos lo antes posible."
          successButtonLabel="Enviar otro mensaje"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
