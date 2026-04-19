import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Navbar } from "./index";
import { discoverList, resourcesList } from "@/app/data/navbarSections";

describe("Navbar", () => {
  const defaultProps = {
    iconWhatsapp: "/whatsapp.png",
    discoverSections: discoverList,
    resourcesSections: resourcesList,
  };

  test("renderiza la versión desktop", () => {
    render(<Navbar {...defaultProps} />);

    expect(screen.getByAltText("WhatsApp Icon")).toHaveAttribute(
      "src",
      "/whatsapp.png"
    );

    expect(screen.getByText("Descubre ADIPA")).toBeInTheDocument();
    expect(screen.getByText("Recursos")).toBeInTheDocument();
    expect(screen.getByText("Seminarios")).toBeInTheDocument();
    expect(screen.getByText("Congreso")).toBeInTheDocument();
    expect(screen.getByText("Especializaciones")).toBeInTheDocument();
    expect(screen.getByText("Cursos")).toBeInTheDocument();
  });

  test("renderiza el drawer móvil con sus enlaces", () => {
    const onClose = jest.fn();

    const { container } = render(
      <Navbar {...defaultProps} mobileOpen={true} onClose={onClose} />
    );

    const drawerWrapper = container.querySelector(
      "div.fixed.inset-0.z-50"
    ) as HTMLElement | null;

    expect(drawerWrapper).toBeInTheDocument();

    const drawerPanel = drawerWrapper?.querySelector(
      "div.absolute.left-0.top-0"
    ) as HTMLElement | null;

    expect(drawerPanel).toBeInTheDocument();

    const mobile = within(drawerPanel as HTMLElement);

    expect(mobile.getByText("Menú")).toBeInTheDocument();
    expect(mobile.getByText("WhatsApp")).toBeInTheDocument();

    expect(mobile.getByText("Descubre ADIPA")).toBeInTheDocument();
    expect(mobile.getByText("Recursos")).toBeInTheDocument();

    expect(mobile.getByText("Sobre ADIPA")).toBeInTheDocument();
    expect(mobile.getByText("Ebooks Gratuitos")).toBeInTheDocument();

    expect(mobile.getByText("Seminarios")).toBeInTheDocument();
    expect(mobile.getByText("Congreso")).toBeInTheDocument();
    expect(mobile.getByText("Especializaciones")).toBeInTheDocument();
    expect(mobile.getByText("Cursos")).toBeInTheDocument();
  });

  test("cierra el drawer móvil al hacer click en overlay", () => {
    const onClose = jest.fn();

    render(<Navbar {...defaultProps} mobileOpen={true} onClose={onClose} />);

    fireEvent.click(screen.getByLabelText("Cerrar menú"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("cierra el drawer móvil al hacer click en el botón cerrar", () => {
    const onClose = jest.fn();

    render(<Navbar {...defaultProps} mobileOpen={true} onClose={onClose} />);

    fireEvent.click(screen.getByLabelText("Cerrar"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test("llama onClose al hacer click en un enlace del menú móvil", () => {
    const onClose = jest.fn();

    const { container } = render(
      <Navbar {...defaultProps} mobileOpen={true} onClose={onClose} />
    );

    const drawerWrapper = container.querySelector(
      "div.fixed.inset-0.z-50"
    ) as HTMLElement | null;
    const drawerPanel = drawerWrapper?.querySelector(
      "div.absolute.left-0.top-0"
    ) as HTMLElement | null;

    const mobile = within(drawerPanel as HTMLElement);

    fireEvent.click(mobile.getByText("Sobre ADIPA"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
