const puppeteer = require("puppeteer");
const fs = require("fs");
const { resolve } = require("path");

const muckrackData = JSON.parse(
  fs.readFileSync("../data/muckrack.json", "utf-8")
);

console.log(muckrackData);

const url = "https://muckrack.com/atmika-iyer/articles";

// interface Post {
//   title: string;
//   date: string;
//   url: string;
//   excerpt: string;
// }

Array.prototype.forEachPromise = function (func) {
  return Array.from(this).reduce((acc, curr) => {
    return acc.then(() => func(curr));
  }, Promise.resolve());
};

String.prototype.removeWhiteSpace = function () {
  return this.replace(/\s+/g, " ").trim();
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: "networkidle2",
  });

  const stories = await page.$$("div.news-story");

  await stories.forEachPromise((p) => {
    return new Promise(async (resolve) => {
      const title = (
        await p.$eval("h4", (el) => el.textContent)
      ).removeWhiteSpace();

      const row = await p.$(".row ");
      const excerpt = (
        await row.$eval("div:first-child", (el) => el.textContent)
      ).removeWhiteSpace();
      console.log({ title, excerpt });
      resolve("a");
    });
  });

  const more = await page.$("a.endless_more");

  await browser.close();
})();
