import Document from "../parse/Document.js";

export type Template = (document: Document, documents: Document[]) => string;