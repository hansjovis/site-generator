import { Logger } from "../util/logger.js";
import { writeFile, cp, rm, mkdir } from "fs/promises";
import path from "path";
import BakedDocument from "../bake/BakedDocument.js";
import { existsSync } from "fs";

export async function write(documents: BakedDocument[], config, logger: Logger) {
    const buildPath = path.resolve(config.paths.build);
    const libPath = path.resolve(config.paths.lib);

    // Remove build folder.
    if (existsSync(buildPath)) {
        await rm(buildPath, { recursive: true });
    }
    // Copy files from library folder to build folder
    await cp(libPath, buildPath, { recursive: true });

    // Write documents to build folder.
    for (const doc of documents) {
        let resolvedPath = `${path.resolve(buildPath, doc.meta.path)}.${doc.meta.type}`;

        logger.debug(`Writing document to "${resolvedPath}"`);
        await mkdir(path.dirname(resolvedPath), { recursive: true });
        await writeFile(resolvedPath, doc.contents, "utf-8");
    }
}
