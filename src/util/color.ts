
enum Color {
    Black = 30,
    Red = 31,
    Green = 32,
    Yellow = 33,
    Blue = 34,
    Magenta = 35,
    Cyan = 36,
    White = 37,
    Reset = 39,
};

function ansiCode(color: Color): string {
    return `\u001b[${color}m`;
}

export default function color(color: Color, text: string): string {
    return ansiCode(color) + text + ansiCode(Color.Reset);
}

export function cyan(text: string): string {
    return color(Color.Cyan, text);
}

export function yellow(text: string): string {
    return color(Color.Yellow, text);
}

export function red(text: string): string {
    return color(Color.Red, text);
}