import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";
import { openDB } from "@src/lib/openDB";
import { secret } from "../../const/secret";

// jwtが有効か確認
export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const decoded = verify(req.headers.authorization!, secret);
  if (decoded) {
    return await fn(req, res);
  }
  return res.status(401).json({ message: "sorry you are not authenticated" });
};

const getPeople = authenticated(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await openDB();
    const people = await db.all("select id, email, name from person");
    return res.json(people);
  }
);

export default getPeople;
