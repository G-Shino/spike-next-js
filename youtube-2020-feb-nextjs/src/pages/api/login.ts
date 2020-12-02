import { NextApiRequest, NextApiResponse } from "next";
import { openDB } from "@src/lib/openDB";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { secret } from "../../const/secret";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await openDB();

  if (req.method === "POST") {
    const person: any = await db.get("select * from person where email = ?", [
      req.body.email
    ]);
    // bcryptしたパスワードと受け取ったパスワードを比較
    compare(req.body.password, person.password, async function (err, result) {
      // 比較に成功し、一致したらjwtを発行
      if (!err && result) {
        const claims = { sub: person.id, myPersonEmail: person.email };
        // 第二引数は大きな文字列　環境変数にするとかあり
        const jwt = sign(claims, secret, {
          expiresIn: "1h" // 期限一時間
        });

        return res.json({ authToken: jwt });
      } else {
        return res.json({ message: "Ups, something went wrong!" });
      }
    });
  } else {
    return res.status(405).json({ message: "we only support POST" });
  }
};

export default login;
