import { parse as parseMarkdown } from "@hansjovis/sharkdown";
import Document from "./Document.js";

export default function parse(sourceText: string): Document {
    const [frontMatterText, contentsText] = sourceText.split(/---+/).filter(Boolean);
    
    const meta = JSON.parse(frontMatterText);
    const contents = parseMarkdown(contentsText);

    return { meta, contents };
}
