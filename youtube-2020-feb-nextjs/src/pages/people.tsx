import { NextPageContext } from "next";
import { myGet } from "@src/lib/myGet";

const people = ({ people }: any) => {
  return <div>{JSON.stringify(people)} people</div>;
};

export default people;

people.getInitialProps = async (ctx: NextPageContext) => {
  const json = await myGet("http://localhost:3000/api/people", ctx);
  return { people: json };
};
