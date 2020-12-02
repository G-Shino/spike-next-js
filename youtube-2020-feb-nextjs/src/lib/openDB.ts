import { open } from "sqlite";
import sqlite3 from "sqlite3";
import fs from "fs";

export const openDB = async () => {
  console.log("new connection");
  console.log(__dirname);
  fs.readdir("./", (err, files) => {
    console.log(files);
  });

  // パスは実行したところが基準になるので注意
  return open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database
  });
};
