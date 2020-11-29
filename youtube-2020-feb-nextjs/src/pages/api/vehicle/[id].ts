import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "@src/lib/openDB";

const getVehicleById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await openDB();
  const vehicles = await db.get(`select * from vehicle where id = ?`, [
    req.query.id
  ]);
  return res.json(vehicles);
};

export default getVehicleById;
