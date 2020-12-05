import { GetServerSideProps } from "next";
import Link from "next/link";
import { Microphone } from "@src/const/types/Model";
import { openDB } from "@src/lib/openDB";

export interface IndexProps {
  microphones: Microphone[];
}

export default function Index({ microphones }: IndexProps) {
  return (
    <>
      <Link href="/people">
        <a>People</a>
      </Link>
      <pre>{JSON.stringify(microphones, null, 4)}</pre>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<IndexProps> = async ctx => {
  const db = await openDB();
  const microphones = await db.all<Microphone[]>("SELECT * FROM microphone");
  db.close();

  await new Promise(acc => {
    setTimeout(acc, 3000);
  });

  return { props: { microphones } };
};
