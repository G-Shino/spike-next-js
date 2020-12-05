import { GetStaticPaths } from "next";
import Index, { getStaticProps } from "@src/pages/index";
import { openDB } from "@src/lib/openDB";

export default Index;
export { getStaticProps };

export const getStaticPaths: GetStaticPaths = async () => {
  const db = await openDB();
  const { total } = await db.get("SELECT COUNT(*) AS total FROM microphone");
  const numberOfPages = Math.ceil(total / 5.0);
  const paths = Array(numberOfPages - 1)
    .fill(0)
    .map((_, index) => {
      return { params: { currentPage: (index + 1).toString() } };
    });
  db.close();

  return {
    fallback: false,
    paths
  };
};
