import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { Microphone } from "@src/const/types/Model";
import { openDB } from "@src/lib/openDB";

export interface MicrophoneDetail extends Microphone {}

export default function MicrophoneDetail({
  id,
  brand,
  model,
  price,
  imageUrl
}: Microphone) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>{id}</div>
      <div>{brand}</div>
      <div>{model}</div>
      <div>{price}</div>
      <div>{imageUrl}</div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<MicrophoneDetail> = async ctx => {
  const id = ctx.params.id as string;
  const db = await openDB();
  // +idでstring -> numberにしている
  const microphone = await db.get("SELECT * FROM microphone WHERE id = ?", +id);
  db.close();
  return { props: microphone };
};

// 動的ルーティングの時に使用　idに入るものを羅列して返却
export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const db = await openDB();
  const microphones: Microphone[] = await db.all("SELECT * FROM microphone");
  const paths = microphones.map(microphone => {
    return { params: { id: microphone.id.toString() } };
  });
  db.close();
  // fallback: falseのときはpathsにないものは404 errorに
  // trueのときはrun timeで新たにレンダリングしようとするが、apiアクセスのためのタイムラグがあるので注意
  return {
    fallback: true,
    paths
  };
};
