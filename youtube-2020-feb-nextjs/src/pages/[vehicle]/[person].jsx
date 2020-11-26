import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function Person({ ownersList: initialOwnersList }) {
  const router = useRouter();
  const [ownersList, setOwnersList] = useState(initialOwnersList);
  useEffect(() => {
    if (ownersList.length !== 0) {
      return;
    }
    (async () => {
      const data = [
        { ownerName: "bruno", vehicle: "car" },
        { ownerName: "john", vehicle: "bike" },
        { ownerName: "mick", vehicle: "airplane" }
      ];
      const bodyJson = data.filter(
        info => info.ownerName === router.query.person
      );
      const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify(bodyJson)
      });
      const owners = JSON.parse((await response.json()).data);
      setOwnersList(owners);
    })();
  }, []);

  if (!ownersList[0]) {
    return <div>...loading</div>;
  }

  return (
    <h2>
      <pre>{JSON.stringify(ownersList, null, 4)}</pre>
      {router.query.person}'s {router.query.vehicle}
    </h2>
  );
}

Person.getInitialProps = async ctx => {
  if (!ctx.req) {
    return { ownersList: [] };
  }

  const { query } = ctx;
  console.log(ctx);
  const data = [
    { ownerName: "bruno", vehicle: "car" },
    { ownerName: "john", vehicle: "bike" },
    { ownerName: "mick", vehicle: "airplane" }
  ];
  const bodyJson = data.filter(info => info.ownerName === query.person);
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: JSON.stringify(bodyJson)
  });
  const owners = JSON.parse((await response.json()).data);

  return {
    ownersList: owners
  };
};
