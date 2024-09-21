import BakedDocument from "./BakedDocument.js";
import { TemplateMap } from "../templates/TemplateMap.js";
import Library from "../Library.js";

export default async function bake(library: Library, templates: TemplateMap): Promise<BakedDocument[]> {
    return library.documents.map(doc => ({
        meta: {
            path: doc.meta.id,
            type: "html",
        },
        contents: templates[doc.meta.template](doc, library),
    }));
}
