import { NextApiRequest, NextApiResponse } from "next";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import cookie from "cookie";
import { secret } from "@src/const/secret";
import { openDB } from "@src/lib/openDB";

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await openDB();

  if (req.method === "POST") {
    const person: any = await db.get("select * from person where email = ?", [
      req.body.email
    ]);
    // ハッシュ化したパスワードと受け取ったパスワードを比較
    const result = await compare(req.body.password, person.password);
    // 比較に成功し、一致したらjwtを発行
    if (result) {
      const claims = { sub: person.id, myPersonEmail: person.email };
      // 第二引数は大きな文字列　環境変数にするとかあり
      const jwt = sign(claims, secret, {
        expiresIn: "1h" // 期限一時間
      });

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("auth", jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          sameSite: "strict",
          maxAge: 3600,
          path: "/"
        })
      );
      return res.json({ message: "Welcome back to the page" });
    } else {
      return res.json({ message: "Oops, something went wrong!" });
    }
  } else {
    return res.status(405).json({ message: "we only support POST" });
  }
};

export default login;
