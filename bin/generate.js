#!/usr/bin/env node
import { join } from "path";
import { readFile } from "fs/promises";

import { generate } from "../index.js";

const defaultConfig = {
    debug: false,
    paths: {
        // Input folder.
        source: 'source',
        // Output folder.
        build: 'build',
        // Template folder.
        templates: 'templates',
        // Folder with scripts, styles to copy over.
        lib: 'lib',
    }
};

async function loadConfig(fallback = {}, path = "generator.config.json") {
    try {
        const workingDir = process.cwd();
        const configPath = join(workingDir, path);
        const config = JSON.parse(
            await readFile(configPath, "utf-8")
        );
        return Object.assign({}, fallback, config); 
    } catch (e) {
        console.error(`Could not load config file: ${e.message}.`);
        return fallback;
    }
}

const config = await loadConfig(defaultConfig);

generate(config);
