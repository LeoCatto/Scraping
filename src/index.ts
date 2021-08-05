import { ROPAS, OPTIONS } from "./constants";
import inquirer from "inquirer";
import { extractData } from "./lib/scraper"; 
import fs from 'fs';

// Titulo
function title() {
  console.log("================================================");
  console.log("EXTRACTOR DE CROTONE STORE CON WEB SCRAPING");
  console.log("================================================");
}

function selectOption(): Promise<any> {
  return inquirer.prompt([
    {
      type: "list",
      name: "ROPA",
      message: "¿Cómo desea extraer la store?",
      choices: ROPAS.map((ropa: { name: string }) => ropa.name),
    },
  ]);
}

function selectRopa(): Promise<any> {
  return inquirer.prompt([
    {
      type: "list",
      name: "ROPA",
      message: "¿Qué ropa seleccionas para extraer su informacion?",
      choices: ROPAS.map((ropa: { name: string }) => {
        return ropa.name;
      }),
    },
  ]);
}

async function start() {
  title();

  const answers = await selectRopa();
  const {ROPA} = await answers;
  const ropaValue:any = ROPAS.filter(
    (asd:any) => asd.name === ROPA
  )[0].key;
  extractData(ropaValue)
/*   const { key } = OPTIONS.filter(
    (item: { key: number; name: string }) => item.name === OPTION
  )[0];

  if (key === 0) {
    console.log("- Extrayendo todos las ropas\n");
    ROPA.forEach((ropa: { key: string; name: string }) => {
      console.log(`Extrayendo ${ropa.name}...`);
      extractData(ropa.key);
      console.log(`${ropa.name} extraído correctamente.\n\n`);
    });
  } else {
    const { ROPA } = await selectContinent();
    const { key } = ROPA.filter(
      (item: { key: string; name: string }) => item.name === ROPA
    )[0];

    extractData(key);
  } */
}

start();
