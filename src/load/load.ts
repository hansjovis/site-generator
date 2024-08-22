import { Logger } from "../util/logger.js";
import Document from "../parse/Document.js";
import parse from "../parse/parse.js";
import { readFile } from "fs/promises";
import path from "path";
import getFilePaths from "../util/getFilePaths.js";

export default async function load(directory: string, logger: Logger): Promise<Document[]> {
    const docs: Document[] = [];
    for (const filePath of await getFilePaths(directory)) {
        const relativePath = path.relative(directory, filePath);

        logger.debug(`Parsing document "${relativePath}".`);

        const source = await readFile(filePath, "utf-8");
        const document = parse(source);

        document.meta.id = relativePath.replace(/\..+$/, "");;

        docs.push(document);
    }
    return docs;
}
