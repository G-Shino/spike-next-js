import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "@src/lib/openDB";
import { hash } from "bcrypt";

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await openDB();

  if (req.method === "POST") {
    hash(req.body.password, 10, async (_, hash) => {
      const statement = await db.prepare(
        "INSERT INTO person (name, email, password) values (?, ?, ?)"
      );
      await statement.run(req.body.name, req.body.email, hash);
      // メモリリーク帽子のためprepareした実行文をfinalize
      statement.finalize();
      const person = await db.all(`select * from person`);
      return res.json(person);
    });
  } else {
    return res.status(405).json({ message: "we only support POST" });
  }
};

export default signup;
