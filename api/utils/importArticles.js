require("dotenv").config({ path: "./config.env" });
const fs = require("fs");
const Article = require("../models/Article");
const connectDB = require("../config/db");

connectDB();

const articles = JSON.parse(fs.readFileSync(`${__dirname}/articles.json`, "utf-8"));

const importData = async () => {
  try {
    await Article.create(articles);
    console.log("Data successfully imported");
    process.exit();
  } catch (error) {
    console.log(`ERROR: ${error}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Post.deleteMany({});
    console.log("Data successfully deleted");
    process.exit();
  } catch (error) {
    console.log(`ERROR 💥: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}