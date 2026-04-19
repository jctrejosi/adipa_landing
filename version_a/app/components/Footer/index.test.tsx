import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from "./index";

describe("Footer", () => {
  test("renderiza logo, países, secciones, contacto y enlaces inferiores", () => {
    render(<Footer />);

    expect(screen.getByAltText("ADIPA")).toBeInTheDocument();

    expect(screen.getByText("Estamos presentes en:")).toBeInTheDocument();
    expect(screen.getByText("CHILE")).toBeInTheDocument();
    expect(screen.getByText("MÉXICO")).toBeInTheDocument();
    expect(screen.getByText("COLOMBIA")).toBeInTheDocument();
    expect(screen.getByText("GLOBAL")).toBeInTheDocument();

    expect(screen.getByText("Programas")).toBeInTheDocument();
    expect(screen.getAllByText("Escuelas").length).toBeGreaterThan(0);
    expect(screen.getByText("Recursos")).toBeInTheDocument();
    expect(screen.getByText("Beneficios")).toBeInTheDocument();
    expect(screen.getByText("Conoce Adipa")).toBeInTheDocument();

    expect(screen.getByText("Contacto")).toBeInTheDocument();
    expect(screen.getByText("CL +56957253424")).toBeInTheDocument();
    expect(
      screen.getByText("info@adipa.cl - sac@adipa.cl")
    ).toBeInTheDocument();

    expect(screen.getByText("¡REGALA UNA GIFTCARD!")).toBeInTheDocument();
    expect(
      screen.getByText("¿Necesitas ayuda psicológica?")
    ).toBeInTheDocument();
    expect(screen.getByText("Términos y condiciones")).toBeInTheDocument();
    expect(screen.getByText("Centro de ayuda")).toBeInTheDocument();

    expect(
      screen.getByText("© 2026 ADIPA. Todos los derechos reservados.")
    ).toBeInTheDocument();
  });
  test("renderiza los enlaces sociales", () => {
    render(<Footer />);

    expect(screen.getByLabelText("Facebook")).toHaveAttribute(
      "href",
      "https://www.facebook.com/adipa.cl"
    );
    expect(screen.getByLabelText("Instagram")).toHaveAttribute(
      "href",
      "https://www.instagram.com/adipa.cl/"
    );
    expect(screen.getByLabelText("YouTube")).toHaveAttribute(
      "href",
      "https://www.youtube.com/channel/UCSx-fxlxiMHExaWwyHT8P8A"
    );
    expect(screen.getByLabelText("LinkedIn")).toHaveAttribute(
      "href",
      "https://www.linkedin.com/company/academia-digital-de-psicologia-y-aprendizaje-adipa/"
    );
    expect(screen.getByLabelText("Spotify")).toHaveAttribute(
      "href",
      "https://open.spotify.com/show/4mwZlXLYaGdr9WIqiuSHup"
    );
    expect(screen.getByLabelText("TikTok")).toHaveAttribute(
      "href",
      "https://www.tiktok.com/@somosadipa"
    );
  });

  test("permite completar y enviar el formulario del newsletter", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    const { container } = render(<Footer />);

    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(2);

    fireEvent.change(inputs[0], { target: { value: "Juan Pérez" } });
    fireEvent.change(inputs[1], { target: { value: "juan@correo.com" } });

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "2" } });

    const form = container.querySelector("form");
    expect(form).toBeInTheDocument();

    fireEvent.submit(form as HTMLFormElement);

    expect(consoleSpy).toHaveBeenCalledWith("Newsletter form submitted:", {
      name: "Juan Pérez",
      email: "juan@correo.com",
      frequency: "2",
    });

    consoleSpy.mockRestore();
  });

  test("usa props personalizadas cuando se las pasan", () => {
    render(
      <Footer
        logoSrc="/custom-logo.svg"
        copyrightText="© 2026 Mi marca"
        contact={{
          phone: "123",
          email: "test@demo.com",
          address: "Dirección de prueba",
          addressLink: "https://example.com",
        }}
        bottomLinks={[{ label: "Ayuda" }, { label: "Términos" }]}
        countries={[{ code: "XX", name: "TEST", flag: "🏳️" }]}
        sections={[
          { title: "Uno", links: [{ label: "Link 1" }] },
          { title: "Dos", links: [{ label: "Link 2" }] },
          { title: "Tres", links: [{ label: "Link 3" }] },
        ]}
        socialLinks={[]}
      />
    );

    expect(screen.getByAltText("ADIPA")).toHaveAttribute(
      "src",
      "/custom-logo.svg"
    );
    expect(screen.getByText("TEST")).toBeInTheDocument();
    expect(screen.getByText("Uno")).toBeInTheDocument();
    expect(screen.getByText("Dos")).toBeInTheDocument();
    expect(screen.getByText("Tres")).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
    expect(screen.getByText("test@demo.com")).toBeInTheDocument();
    expect(screen.getByText("Dirección de prueba")).toBeInTheDocument();
    expect(screen.getByText("Ayuda")).toBeInTheDocument();
    expect(screen.getByText("Términos")).toBeInTheDocument();
    expect(screen.getByText("© 2026 Mi marca")).toBeInTheDocument();
  });
});
