import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";
const extensions = [".js", ".ts"];

export default {
  input: "index.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
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
  ],
};
