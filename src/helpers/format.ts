export function prettyDateTime(date: string) {
  if (!date) return "----";
  const nDate = new Date(date);
  const formatDate = nDate.toLocaleString();
  return formatDate;
}
