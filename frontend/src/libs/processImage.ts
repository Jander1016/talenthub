import { writeFile } from 'fs/promises';
import path from "path";
async function processImage(image) {
    //convertir imagen a un arreglo= buffer
    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)
    // concatenar el file con el current working directory (cwd) a través de path
    // en public estará guardado
    const filePath = path.join(process.cwd(), 'public', image.name)
    await writeFile(filePath, buffer);
    return filePath;
}
export default processImage;