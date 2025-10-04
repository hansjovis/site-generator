import { Logger } from "../util/logger.js";
import Document from "../parse/Document.js";
import parse from "../parse/parse.js";
import { readFile } from "fs/promises";
import path from "path";
import getFilePaths from "../util/getFilePaths.js";
import Library from "../Library.js";

const supportedFileTypes = ['.md', '.json'];

export default async function load(directory: string, logger: Logger): Promise<Library> {
    const docs: Document[] = [];
    const entities = [];
    for (const filePath of await getFilePaths(directory)) {
        const relativePath = path.relative(directory, filePath);

        if (!supportedFileTypes.includes(path.extname(relativePath))) {
            logger.warn(`Skipping unsupported file type: "${relativePath}".`);
            continue;
        }
        
        const [, id, fileType] = relativePath.match(/(.+)\.(.+)$/);

        logger.debug(`Parsing document "${relativePath}".`);

        const source = await readFile(filePath, "utf-8");
        if (fileType === "md") {
            const document = parse(source);
            document.meta['@id'] = id;
            docs.push(document);
        }
        else if(fileType === "json") {
            const entity = JSON.parse(source);
            entity['@id'] = id;
            entities.push(entity);
        }
    }
    return new Library(docs, entities);
}
