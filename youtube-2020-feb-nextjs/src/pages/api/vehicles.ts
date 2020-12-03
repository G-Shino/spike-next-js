import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "@src/lib/openDB";
import { authenticated } from "@src/lib/authAPI";

const getAllVehicles = authenticated(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
      return res
        .status(500)
        .json({ message: "sorry we only accept GET requests" });
    }
    const db = await openDB();
    const vehicles = await db.all("select * from vehicle");
    return res.json(vehicles);
  }
);

export default getAllVehicles;
