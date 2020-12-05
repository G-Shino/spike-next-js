import { GetServerSideProps } from "next";
import Link from "next/link";

export interface PeopleProps {
  names: string[];
}

export default function People({ names }: PeopleProps) {
  return (
    <>
      <Link href="/">
        <a>Index</a>
      </Link>
      {names.map(name => (
        <h2 key={name}>{name}</h2>
      ))}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PeopleProps> = async ctx => {
  return { props: { names: ["john", "michel", "bruno"] } };
};
