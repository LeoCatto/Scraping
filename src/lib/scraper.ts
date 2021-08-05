import { DEFAULT_SAVE_DIRECTORY, getScrapingUrl } from "../constants";
import requestPromise from "request-promise";
import $ from "cheerio";
import fs from "fs";

/* function createFile(name: string, items: Array<object>) {
  // directory to check if exists
  const dir = DEFAULT_SAVE_DIRECTORY;

  // check if directory exists
  if (fs.existsSync(dir)) {
    fs.writeFileSync(`${dir}/${name}.json`, JSON.stringify(items));
  } else {
    console.log("Directory not found.");
    console.log("Create 'data' directory");
    fs.mkdirSync(dir);
    createFile(name, items);
  }
} */

export function extractData(ropa: string) {
  const url = getScrapingUrl(ropa);
  const ropaItems: Array<object> = [];

  requestPromise(url).then((html: string) => {
    const selectRopa = $(".thumbnail-container", html);
    selectRopa.map((_, element) => {
      const imgELement = $("img", element);
      const spanElement = $(".product-price-and-shipping", element)
        .children()
        .children()
        .next();
      const imagen = imgELement.attr("src");
      const nombreA = $("h3 a", element).text();
      const marcaA = nombreA?.split("-");
      const marca = marcaA[0].trim();
      const nombre = marcaA[1].trim();
      const price = spanElement.attr("content");
      ropaItems.push({
        nombreA,
        marca,
        imagen,
        price,
      });
      fs.writeFileSync(`./${ropa}`,JSON.stringify(ropaItems))
    });
  });
}
      // requestPromise(url).then((html: string) => {
      //   console.log(html)
      //   const selectRopa = $(".thumbnail-container", html);
      //   selectRopa.map((_, element) => {
      //     const imgELement = $("img", element);
      //     const spanElement = $(".product-price-and-shipping", element)
      //       .children()
      //       .children()
      //       .next();
      //     const category = imgELement.attr("src");
      //     ropaItems.push({
      //       category,
      //     });
      //   });
      // });
      /* const area = spanELement.attr("data-area");
      const population = spanELement.attr("data-population");
      const url = spanELement.attr("href");
      const name = $("span", element).text();
      let img = $("img", element).attr("src");
      let imgArray = img?.split("/") || [];
      img = imgArray[imgArray?.length - 1] || "";
      ropaItems.push({
        area: +(area || 0),
        population: +(population || 0),
        url,
        name,
        code: img.replace(".png", ""),
        ropa,
      }); */
    
    /* console.log(ropaItems); */
    /* createFile(ropa, ropaItems); */

