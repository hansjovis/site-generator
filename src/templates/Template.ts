import Library from "../Library.js";
import Document from "../parse/Document.js";

export type Template = (document: Document, library: Library) => string;