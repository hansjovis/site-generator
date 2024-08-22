
# CD Generate 

Generates a CoderDojo exercise in HTML form from a Markdown file.

## Use:
```
node ./dist/generate.js [options]
```

## Options:
| Name    | Type    | Default    | Description                                                   |
| ------- | ------- | ---------- | ------------------------------------------------------------- |
| `help`  | Boolean | `false`    | Show this help text and don't continue with the program.      |
| `debug` | Boolean | `false`    | Whether to show debug information when running the generator. |
| `src`   | String  | `src.md`   | Path to the source file.                                      |
| `out`   | String  | `out.html` | Path to the output file.                                      |
