import Link from "next/link";
import Button from "@material-ui/core/Button";

export const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/vehicles" passHref>
        <Button>vehicles</Button>
      </Link>
    </>
  );
};
