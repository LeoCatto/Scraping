// URL principal
export const MAIN_URL = "https://www.zeuscalabria.it/";

export const OPTIONS = [
  { key: 0, name: "Todas" },
  { key: 1, name: "Una en particular" },
];

export const DEFAULT_SAVE_DIRECTORY = "./data";

// Información de los diferentes apartados de los continentes
export const ROPAS = [
  { key: "1470-donna", name: "Mujer" },
  { key: "2-home", name: "Kids" },
  { key: "1469-uomo", name: "Hombre" },
  { key: "1312-accesori", name: "Accesorios" },
];

// Crear URL para la extracción de datos

export function getScrapingUrl(ropa: string) {
  return `${MAIN_URL}it/${ropa}`;
}
