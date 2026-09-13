import sharp from "sharp";
import pngToIco from "png-to-ico";
import { writeFile, readFile } from "node:fs/promises";
import path from "node:path";

const publicDir = path.resolve(import.meta.dirname, "..", "public");

async function run() {
  const faviconSvg = await readFile(path.join(publicDir, "favicon.svg"));
  const ogSvg = await readFile(path.join(publicDir, "og-image.svg"));

  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map((size) => sharp(faviconSvg).resize(size, size).png().toBuffer()),
  );
  const icoBuffer = await pngToIco(pngBuffers);
  await writeFile(path.join(publicDir, "favicon.ico"), icoBuffer);

  await sharp(faviconSvg)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, "apple-touch-icon.png"));

  await sharp(faviconSvg)
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, "icon-192.png"));

  await sharp(faviconSvg)
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, "icon-512.png"));

  await sharp(ogSvg).resize(1200, 630).png().toFile(path.join(publicDir, "og-image.png"));

  console.log("Generated favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png, og-image.png");
}

run();
