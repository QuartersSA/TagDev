import * as pdfjsLib from './node_modules/pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync } from 'fs';

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL('./node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs', import.meta.url).href;

const data = new Uint8Array(readFileSync('./design.pdf'));
const doc = await pdfjsLib.getDocument({ data, useWorkerFetch: false, isEvalSupported: false, useSystemFonts: true }).promise;

console.log('Total Pages:', doc.numPages);

for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i);
  const content = await page.getTextContent();
  const strings = content.items.map(item => item.str).filter(s => s.trim());
  if (strings.length) {
    console.log(`\n=== Page ${i} ===`);
    console.log(strings.join('\n'));
  }
}
