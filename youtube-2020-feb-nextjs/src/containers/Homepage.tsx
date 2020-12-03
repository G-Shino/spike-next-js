import Link from "next/link";
import Button from "@material-ui/core/Button";

export const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/people" passHref>
        <Button>People</Button>
      </Link>
      <Link href="/vehicles" passHref>
        <Button>Vehicles</Button>
      </Link>
    </>
  );
};
