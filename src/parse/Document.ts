import { Document as MarkdownDoc } from "@hansjovis/sharkdown";

export default interface Document {
    meta: any,
    contents: MarkdownDoc,
}