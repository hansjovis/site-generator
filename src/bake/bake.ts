import Document from "../parse/Document.js";
import BakedDocument from "./BakedDocument.js";
import { TemplateMap } from "../templates/TemplateMap.js";

export default async function bake(documents: Document[], templates: TemplateMap): Promise<BakedDocument[]> {
    return documents.map(doc => ({
        meta: {
            path: doc.meta.id,
            type: "html",
        },
        contents: templates[doc.meta.template](doc, documents),
    }));
}
