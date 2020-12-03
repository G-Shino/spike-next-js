import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { verify } from "jsonwebtoken";
import { secret } from "../const/secret";

// jwtが有効か確認
export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  // secretを使用してtokenを検証する
  const decoded = await new Promise(resolve => {
    verify(req.cookies.auth, secret, (err, decoded) => {
      if (!err && decoded) {
        resolve(decoded);
      }
      resolve();
    });
  });
  // tokenが正しく検証されたら認可
  if (decoded) {
    return await fn(req, res);
  }
  // 認可できませんでした
  return res.status(401).json({ message: "sorry you are not authenticated" });
};
