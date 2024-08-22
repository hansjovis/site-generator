import { ConsoleLogger, LogLevel } from "./util/logger.js";
import loadTemplates from "./templates/loadTemplates.js";
import bake from "./bake/bake.js";
import load from "./load/load.js";
import { write } from "./write/write.js";

const defaultConfig = {
    debug: true,
    paths: {
        // Input folder.
        source: 'source',
        // Output folder.
        build: 'build',
        // Folder with scripts, styles to copy over.
        lib: 'lib',
    }
};

export default async function generate(config = defaultConfig) {
    const logger = new ConsoleLogger(config.debug ? LogLevel.DEBUG : LogLevel.LOG);

    const templates = await loadTemplates();
    
    logger.log("Generating exercise from source code...");
    logger.debug("Using config: ", config);
    logger.debug("Using templates: ", Object.keys(templates));

    const documents = await load(config.paths.source, logger);
    const bakedDocuments = await bake(documents, templates);
    await write(bakedDocuments, config, logger);
}


