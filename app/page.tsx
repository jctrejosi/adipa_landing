"use client";

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { HeroSearch } from "./components/HeroSearch";
import { Filters } from "./components/Filters";
import { CourseList } from "./components/CourseList";
import { ContactForm } from "./components/ContactForm";
import { coursesData, groupsFilter, orderFilter, rankingFilter } from "./data";
import { Footer } from "./components/Footer";

export default function Home() {
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
      <HeroSearch />
      <div className="bg-white py-4 px-6">
        <div className="flex flex-col xl:flex-row gap-6 items-start">
          {/* sidebar */}
          <aside className="w-full xl:w-[285px] xl:flex-none">
            <Filters rankings={rankingFilter} groups={groupsFilter} />
          </aside>

          {/* content */}
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
              courses={coursesData}
              sortOptions={orderFilter}
            />
          </main>
        </div>
      </div>
      <div className="w-full bg-[white] flex items-center justify-center py-32">
        <ContactForm
          title="¿Tienes una idea para un nuevo curso?"
          description="En ADIPA valoramos tus sugerencias. Cuéntanos qué curso te gustaría ver en la plataforma y ayúdanos a crear contenido relevante para la comunidad."
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
}
