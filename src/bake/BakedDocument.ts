interface BakedDocumentMetadata {
    path: string,
    type: string,
}

export default interface BakedDocument {
    meta: BakedDocumentMetadata,
    contents: string,
}