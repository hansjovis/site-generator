import { toHTML } from "@hansjovis/sharkdown";

export default function(document) {
    const { title, description } = document.meta;
    return `<html>
    <head>
        <title>${title}</title>
        <meta name="description" content="${description}">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <main>
            ${toHTML(document.contents)}
            <p>The time is <time id="now"></time></p>
            <script type="application/javascript" src="time.js"></script>
        </main>
    </html>`;
}