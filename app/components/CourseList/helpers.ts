export const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export const parsePrice = (priceValue: string | number): number => {
  if (typeof priceValue === "number") return priceValue;

  const match = priceValue.match(/(\d+(?:\.\d+)?)/);
  return match ? parseInt(match[1].replace(/\./g, ""), 10) : 0;
};

export const parseDate = (dateStr: string): number => {
  const parts = dateStr.split("/");
  if (parts.length !== 3) return 0;

  const [day, month, year] = parts.map(Number);
  if (!day || !month || !year) return 0;

  return new Date(year, month - 1, day).getTime();
};

export const formatPrice = (value: string | number): string => {
  if (typeof value === "number") {
    return `$${value.toLocaleString("es-CL")} CLP`;
  }

  return value;
};
