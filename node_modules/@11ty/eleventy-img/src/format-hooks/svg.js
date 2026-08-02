import fs from "node:fs";
import { createDebug } from "obug";

const debugAssets = createDebug("Eleventy:Assets");

export default async function createSvg(sharpInstance) {
  let input = sharpInstance.options.input;
  let svgBuffer = input.buffer;
  if(svgBuffer) { // remote URL already has buffer
    return svgBuffer;
  } else { // local file system
    debugAssets("[11ty/image] Reading %o", input.file);
    return fs.readFileSync(input.file);
  }
};
