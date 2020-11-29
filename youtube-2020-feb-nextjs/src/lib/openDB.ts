import { open } from "sqlite";
import sqlite3 from "sqlite3";

export const openDB = async () => {
  return open({
    filename: "../../mydb.sqlite",
    driver: sqlite3.Database
  });
};
