import { NextPageContext } from "next";
import Router from "next/router";

export async function myGet(url: string, ctx: NextPageContext) {
  // サーバー再度側のためにcookieを受け継ぐ
  const cookie = ctx.req?.headers.cookie;
  const resp = await fetch(url, {
    headers: {
      cookie: cookie!
    }
  });

  // 401エラーでかつサーバー側ではなかったら /loginへ画面遷移
  if (resp.status === 401 && !ctx.req) {
    Router.replace("/login");
    return;
  }

  // 401エラーでかつサーバー側なら loginにredirectさせる
  if (resp.status === 401 && ctx.req) {
    ctx.res?.writeHead(302, {
      Location: "http://localhost:3000/login"
    });
    ctx.res?.end();
    return;
  }

  const json = await resp.json();
  return json;
}
