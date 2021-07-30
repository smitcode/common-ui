import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
const extensions = [".js", ".ts"];

export default {
  input: "index.js",
  output: [
    {
      file: "./dist/bundle.cjs.js",
      format: "cjs",
    },
    {
      file: "./dist/bundle.esm.js",
      format: "es",
    },
  ],
  plugins: [
    babel(
      {
        presets: ["@babel/preset-react"],
      },
      {
        exclude: "node_modules/**",
        extensions,
      }
    ),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss(),
    json({ compact: true }),
  ],
};
