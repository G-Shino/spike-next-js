import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "@src/lib/openDB";

import { authenticated } from "@src/lib/authAPI";

const getPeople = authenticated(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await openDB();
    const people = await db.all("select id, email, name from person");
    return res.json(people);
  }
);

export default getPeople;
