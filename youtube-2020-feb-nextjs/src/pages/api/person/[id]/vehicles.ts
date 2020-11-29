import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "@src/lib/openDB";

const getAllVehiclesByPersonId = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const db = await openDB();
  const allVehicles = await db.all(`select * from vehicle where ownerId = ?`, [
    req.query.id
  ]);
  return res.json(allVehicles);
};

export default getAllVehiclesByPersonId;
