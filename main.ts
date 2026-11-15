const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";

const poem = `I typed my mother's recipe—flour, sugar, salt in exact teaspoons.
The paper card sits on the table next to hers now.
My daughter lifts it into her own handwriting, draws a new line at the bottom.
She doesn't ask permission, writes what she knows tastes right for us:
the measurements become her own.`;

const entryPath = path.join(OUTPUT_DIR, "entry.txt");

if (!fs.existsSync(path.dirname(entryPath))) {
  fs.mkdirSync(path.dirname(entryPath), { recursive: true });
}

fs.writeFileSync(entryPath, poem);
