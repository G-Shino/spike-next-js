import { NextApiRequest, NextApiResponse } from "next";
import sqlite from "sqlite";

const getVehicleById = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await sqlite.open("./mydb.sqlite");
  const vehicles = await db.get(`select * from vehicle where id = ?`, [
    req.query.id
  ]);
  return res.json(vehicles);
};

export default getVehicleById;
