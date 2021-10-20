import svelte from "rollup-plugin-svelte"
import resolve from "@rollup/plugin-node-resolve"
import css from "rollup-plugin-css-only"
const pkg = require("./package.json")

export default {
    input: "src/ReadMore.svelte",
    output: [
        { file: pkg.module, format: "es" },
        { file: pkg.main, format: "umd", name: "ReadMore" },
    ],
    plugins: [svelte(), css({ output: 'readmore.css' }), resolve()],
};