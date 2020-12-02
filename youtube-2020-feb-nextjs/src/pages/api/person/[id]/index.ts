import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "@src/lib/openDB";

const getPersonById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await openDB();

  if (req.method === "PUT") {
    const statement = await db.prepare(
      "UPDATE person SET name = ?, email = ? where id = ?"
    );
    await statement.run(req.body.name, req.body.email, req.query.id);
    // メモリリーク帽子のためprepareした実行文をfinalize
    statement.finalize();
  }

  const person = await db.get(`select * from person where id = ?`, [
    req.query.id
  ]);
  return res.json(person);
};

export default getPersonById;
