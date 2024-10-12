import Document from "./parse/Document.js";

export default class Library {
    public readonly documents: Document[];
    private graph: Record<string, any>;

    constructor(documents: Document[], entities: any) {
        this.documents = documents;
        this.graph = {};
        for(const document of documents) {
            this.graph[document.meta.id] = document.meta;
        }
        for(const entity of entities) {
            this.graph[entity.id] = entity;
        }
    }

    findById(id: string): Document {
        return this.graph[id];
    }
}