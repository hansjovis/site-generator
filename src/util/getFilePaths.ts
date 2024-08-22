import { lstat, readdir } from "fs/promises";
import path from "path";

export default async function getSourceFilePaths(directory: string) {
    const paths = [];
    for (const name of await readdir(directory, "utf-8")) {
        const filePath = path.resolve(directory, name);
        if ((await lstat(filePath)).isDirectory()) {
            paths.push(...await getSourceFilePaths(path.join(directory, name)));
        } else {
            paths.push(filePath);
        }
    }

    return paths;
}