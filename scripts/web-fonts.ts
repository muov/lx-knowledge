import { Buffer } from "node:buffer";
import fs from "node:fs";
/**
 * @module web-fonts
 * @description Web 字体下载
 * 从 https://fonts.google.com/ 下载 Web 字体
 *
 * 1. 本地化字体文件
 * 2. 根据使用的字符，下载裁剪后的最小字体文件
 */
import path from "node:path";
import {
  isString,
  objectEntries,
  slash,
  toArray,
  uniq,
} from "@pengzhanbo/utils";

export interface Params {
  family: string;
  text?: string | string[];
  display?: "block" | "swap" | "optional" | "auto" | "fallback";
  ital?: "0" | "1" | "01";
  wght?: `${number}` | `${number}..${number}`;
}

const EXT = {
  "font/woff2": "woff2",
  "font/woff": "woff",
  "font/ttf": "ttf",
  "font/otf": "otf",
  "font/eot": "eot",
  "font/collection": "ttc",
};

const stylesDir = path.join(import.meta.dirname, "../.vuepress/theme/styles/");
const fontDir = path.join(stylesDir, "../fonts/");
const cssFilename = "web-fonts.css";

const RE_FONT_URL = /url\((.*?)\)/g;

async function downloadWebFontCss(url: string, output: string): Promise<void>;
async function downloadWebFontCss(
  params: Params,
  output?: string
): Promise<void>;
async function downloadWebFontCss(
  params: Params | string,
  output?: string
): Promise<void> {
  const url = isString(params) ? params : getUrl(params);

  let filename =
    output ||
    (isString(params) ? cssFilename : params.family.replace(/\s+/g, "-"));

  filename = filename.endsWith(".css") ? filename : `${filename}.css`;

  console.log(
    `Downloading ${
      isString(params)
        ? url
        : `${params.family} text: ${toArray(params.text).join(", ")}`
    }`
  );

  const outputPath = path.join(stylesDir, filename);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.mkdirSync(fontDir, { recursive: true });

  let css = await fetch(url).then((res) => res.text());

  let matched: RegExpExecArray | null;
  const fontsUrl = new Set<string>();

  // eslint-disable-next-line no-cond-assign
  while ((matched = RE_FONT_URL.exec(css))) {
    fontsUrl.add(matched[1]);
  }

  const basename = path.basename(outputPath, ".css");
  let uuid = 1;
  const cache: Record<string, string> = {};
  for (const url of fontsUrl) {
    const res = await fetch(url);
    const buffer = Buffer.from(await res.arrayBuffer());
    const ext =
      EXT[(res.headers.get("content-type") as keyof typeof EXT) ?? ""];
    cache[url] = `${basename}-${uuid++ * 100}.${ext}`;
    await fs.promises.writeFile(path.join(fontDir, cache[url]), buffer);
  }

  const fontPath = path.relative(path.dirname(outputPath), fontDir);

  objectEntries(cache).forEach(([key, value]) => {
    css = css.replaceAll(key, slash(path.join(fontPath, value)));
  });

  await fs.promises.writeFile(outputPath, css);
}

function getUrl(params: Params) {
  let family = params.family.replace(/\s/g, "+");

  const spec: string[] = [];

  params.ital && spec.push("ital");
  params.wght && spec.push("wght");

  if (spec.length > 0) {
    family += `:${spec.join(",")}@`;
    const ital = params.ital?.split("");
    const wght = params.wght;
    if (ital) {
      ital.forEach((v, i) => {
        family += `${v}${wght ? `,${wght}` : ""}${
          i < ital.length - 1 ? ";" : ""
        }`;
      });
    } else if (wght) {
      family += `${wght}`;
    }
  }
  let url = `https://fonts.googleapis.com/css2?family=${family}&display=${
    params.display ?? "swap"
  }`;
  const text = toArray(params.text);
  if (text.length) {
    const format = uniq(text.join("").split("")).join("").replace(/\s+/g, "");
    url += `&text=${encodeURIComponent(format)}`;
  }

  return url;
}

downloadWebFontCss({
  family: "Ma Shan Zheng",
  text: [
    "沐沐物语",
    "一个小白立志成为全栈开发工程师的的成长物语！",
    "🔥Love & ✊Study 全栈开发工程师的攻守之道！",
  ],
});

downloadWebFontCss({
  family: "Pacifico",
  text: "Front End Developer",
});

downloadWebFontCss({
  family: "Londrina Sketch",
  text: ["1234567890:"],
});
