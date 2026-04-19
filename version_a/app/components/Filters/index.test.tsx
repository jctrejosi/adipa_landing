// app/components/Filters/index.test.tsx
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Filters } from "./index";

const mockRankings = [
  { value: "*", label: "Todos" },
  { value: "top", label: "Top" },
];

const mockGroups = [
  {
    title: "Área",
    options: [
      { label: "Psicología", value: "psico" },
      { label: "Neuro", value: "neuro" },
    ],
  },
  {
    title: "Nivel",
    options: [{ label: "Avanzado", value: "adv" }],
  },
];

describe("Filters", () => {
  const renderFilters = () => {
    const onChange = jest.fn();

    const utils = render(
      <Filters
        rankings={mockRankings}
        groups={mockGroups}
        onChange={onChange}
      />
    );

    const mobileRoot = utils.container.querySelector(
      ".lg\\:hidden"
    ) as HTMLElement | null;

    expect(mobileRoot).toBeInTheDocument();

    return {
      ...utils,
      onChange,
      mobile: within(mobileRoot as HTMLElement),
    };
  };

  test("renderiza controles base", () => {
    const { mobile } = renderFilters();

    expect(
      mobile.getByRole("button", { name: /rankings/i })
    ).toBeInTheDocument();
    expect(
      mobile.getByRole("button", { name: /filtros/i })
    ).toBeInTheDocument();
  });

  test("muestra rankings al abrir el dropdown y cambia ranking", () => {
    const { mobile, onChange } = renderFilters();

    fireEvent.click(mobile.getByRole("button", { name: /rankings/i }));

    expect(mobile.getByText("Todos")).toBeInTheDocument();
    expect(mobile.getByText("Top")).toBeInTheDocument();

    fireEvent.click(mobile.getByText("Top"));

    expect(onChange).toHaveBeenCalledWith({
      ranking: "top",
      filters: {},
    });
  });

  test("abre grupo y selecciona checkbox", () => {
    const { mobile, onChange } = renderFilters();

    fireEvent.click(mobile.getByRole("button", { name: /filtros/i }));
    fireEvent.click(mobile.getByText("Área"));
    fireEvent.click(mobile.getByText("Psicología"));

    expect(onChange).toHaveBeenCalledWith({
      ranking: "*",
      filters: {
        Área: ["psico"],
      },
    });
  });

  test("desmarca checkbox al hacer click de nuevo", () => {
    const { mobile, onChange } = renderFilters();

    fireEvent.click(mobile.getByRole("button", { name: /filtros/i }));
    fireEvent.click(mobile.getByText("Área"));

    const psicologia = mobile.getByText("Psicología");

    fireEvent.click(psicologia);
    fireEvent.click(psicologia);

    expect(onChange).toHaveBeenLastCalledWith({
      ranking: "*",
      filters: {
        Área: [],
      },
    });
  });

  test("limpia todos los filtros", () => {
    const { mobile, onChange } = renderFilters();

    fireEvent.click(mobile.getByRole("button", { name: /filtros/i }));
    fireEvent.click(mobile.getByText("Área"));
    fireEvent.click(mobile.getByText("Psicología"));

    fireEvent.click(mobile.getByRole("button", { name: /borrar filtros/i }));

    expect(onChange).toHaveBeenLastCalledWith({
      ranking: "*",
      filters: {},
    });
  });

  test("muestra chips de filtros seleccionados y permite eliminarlos", () => {
    const { mobile, onChange } = renderFilters();

    fireEvent.click(mobile.getByRole("button", { name: /filtros/i }));
    fireEvent.click(mobile.getByText("Área"));
    fireEvent.click(mobile.getByText("Psicología"));

    expect(mobile.getByText("psico")).toBeInTheDocument();

    const chip = mobile.getByText("psico");
    const removeButton = chip.parentElement?.querySelector(
      "span.cursor-pointer"
    );

    expect(removeButton).toBeInTheDocument();

    fireEvent.click(removeButton as HTMLElement);

    expect(onChange).toHaveBeenLastCalledWith({
      ranking: "*",
      filters: {
        Área: [],
      },
    });
  });
});
