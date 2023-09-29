import * as fs from 'node:fs/promises';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function calculateSalesTotal(salesFiles) {
    let salesTotal = 0;
  
    for (let file of salesFiles) {
      const data = JSON.parse(await fs.readFile(file));
  
      salesTotal += data.total;
    }
    return salesTotal;
  }
  
  async function findSalesFiles(folderName) {
    let salesFiles = [];
  
    async function findFiles(folderName) {
      const items = await fs.readdir(folderName, { withFileTypes: true });
  
      for (const item of items) {
        if (item.isDirectory()) {
          await findFiles(path.join(folderName, item.name));
        } else {
          if (path.extname(item.name) === ".json") {
            await salesFiles.push(path.join(folderName, item.name));
          }
        }
      }
    }
  
    await findFiles(folderName);
    return salesFiles;
  }
  
  async function main() {
    const salesDir = path.join(__dirname, "stores");
    const salesTotalsDir = path.join(__dirname, "salesTotals");
  
    try {
      await fs.mkdir(salesTotalsDir);                 //créer le repertoire salesTotals
    } catch {
      console.log(`${salesTotalsDir} already exists.`);
    }
  
    const salesFiles = await findSalesFiles(salesDir);

    const salesTotal = await calculateSalesTotal(salesFiles);


    await fs.writeFile(
      path.join(salesTotalsDir, "totals.txt"),
      `Total at ${new Date().toLocaleDateString()} : ${salesTotal}€\r\n`,
      { flag: "a" }
    );
    console.log(`Wrote sales totals to ${salesTotalsDir}`);

  }
  
  main();