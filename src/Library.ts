import Document from "./parse/Document.js";

export default class Library {
    public readonly documents: Document[];
    private documentMap: Record<string, Document>;

    constructor(documents: Document[]) {
        this.documents = documents;
        for(const document of documents) {
            this.documentMap[document.meta.id] = document;
        }
    }

    findDocumentById(id: string): Document {
        return this.documentMap[id];
    }
}