export function generateRandomColor() {
  const anyColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return anyColor;
}