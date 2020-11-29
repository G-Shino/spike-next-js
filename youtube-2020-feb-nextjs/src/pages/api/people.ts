import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "@src/lib/openDB";

const getPeople = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await openDB();
  const people = await db.all("select * from person");
  return res.json(people);
};

export default getPeople;
