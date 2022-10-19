export const formatString = (value: unknown): string =>
  typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : typeof value === "number"
      ? value.toString()
      : "-";

export const formatDate = (value: unknown): string => {
  if (!Boolean(value) || typeof value !== "string") return "-";

  const date = new Date(value as string);
  const day = date.getDate().toString().padStart(2, "00");
  const month = (date.getMonth() + 1).toString().padStart(2, "00");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
