import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Dropdown } from "./index";

const mockSections = [
  {
    title: "Sección 1",
    items: [
      { label: "Item 1", href: "/item-1" },
      { label: "Item 2", href: "/item-2", bold: true },
    ],
  },
  {
    title: "Sección 2",
    items: [{ label: "Item 3", href: "/item-3" }],
  },
];

describe("Dropdown", () => {
  test("renderiza el trigger", () => {
    render(
      <Dropdown trigger={<button>Abrir menú</button>} sections={mockSections} />
    );

    expect(screen.getByText("Abrir menú")).toBeInTheDocument();
  });

  test("muestra el dropdown al hacer hover", () => {
    const { container } = render(
      <Dropdown trigger={<button>Abrir menú</button>} sections={mockSections} />
    );

    fireEvent.mouseEnter(container.firstChild as Element);

    expect(screen.getByText("Sección 1")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  test("oculta el dropdown al salir del hover", () => {
    const { container } = render(
      <Dropdown trigger={<button>Abrir menú</button>} sections={mockSections} />
    );

    fireEvent.mouseEnter(container.firstChild as Element);
    fireEvent.mouseLeave(container.firstChild as Element);

    expect(screen.queryByText("Sección 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Item 1")).not.toBeInTheDocument();
  });

  test("renderiza links correctamente", () => {
    const { container } = render(
      <Dropdown trigger={<button>Menu</button>} sections={mockSections} />
    );

    fireEvent.mouseEnter(container.firstChild as Element);

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(3);
    expect(links[0]).toHaveAttribute("href", "/item-1");
  });

  test("aplica variant mega correctamente", () => {
    const { container } = render(
      <Dropdown
        trigger={<button>Menu</button>}
        sections={mockSections}
        variant="mega"
      />
    );

    fireEvent.mouseEnter(container.firstChild as Element);

    expect(container.querySelector(".gap-10")).toBeInTheDocument();
  });

  test("aplica clase bold cuando item.bold es true", () => {
    const { container } = render(
      <Dropdown trigger={<button>Menu</button>} sections={mockSections} />
    );

    fireEvent.mouseEnter(container.firstChild as Element);

    const boldItem = screen.getByText("Item 2");
    expect(boldItem).toHaveClass("font-semibold");
  });
});
