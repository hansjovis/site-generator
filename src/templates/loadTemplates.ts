import { readdir } from "fs/promises";
import path from "path";
import { TemplateMap } from "./TemplateMap.js";

export default async function loadTemplates(directory = "templates"): Promise<TemplateMap> {
    const templates: TemplateMap = {};
    for (const fileName of await readdir(directory, "utf-8")) {
        if (!fileName.endsWith(".js")) {
            continue;
        }
        
        const templatePath = path.resolve("templates", fileName);
        // Remove file ending.
        const templateName = fileName.replace(/\..+$/, '');
        templates[templateName] = (await import(templatePath)).default;
    }
    return templates;
}
