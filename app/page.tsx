"use client";

import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { HeroSearch } from "./components/HeroSearch";
import { Filters } from "./components/Filters";
import { CourseList } from "./components/CourseList";
import { ContactForm } from "./components/ContactForm";
import { coursesData, groupsFilter, rankingFilter } from "./content";
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
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* sidebar */}
          <aside className="w-full md:w-[285px] md:flex-none">
            <Filters rankings={rankingFilter} groups={groupsFilter} />
          </aside>

          {/* content */}
          <main className="flex-1 min-w-0">
            <CourseList courses={coursesData} sortOptions={rankingFilter} />
          </main>
        </div>
      </div>
      <div className="w-full bg-[white] flex items-center justify-center py-32">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
