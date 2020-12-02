import { NextPageContext } from "next";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { VehiclePerson } from "../../const/types/api";

export interface PersonProps {
  ownersList?: VehiclePerson[];
}

const Person = ({ ownersList: initialOwnersList }: PersonProps) => {
  const router = useRouter();
  const [ownersList, setOwnersList] = useState(initialOwnersList);
  useEffect(() => {
    if (ownersList?.length !== 0) {
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
      const owners: VehiclePerson[] | undefined = JSON.parse(
        (await response.json()).data
      );
      setOwnersList(owners);
    })();
  }, []);

  if (!ownersList?.[0]) {
    return <div>...loading</div>;
  }

  return (
    <h2>
      <pre>{JSON.stringify(ownersList, null, 4)}</pre>
      {router.query.person}'s {router.query.vehicle}
    </h2>
  );
};

export default Person;

interface MyNextPageContest extends NextPageContext {
  query: {
    person: string;
    vehicle: string;
  };
}

Person.getInitialProps = async ({ query, req }: MyNextPageContest) => {
  if (!req) {
    return { ownersList: [] };
  }

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
  const owners: VehiclePerson[] | undefined = JSON.parse(
    (await response.json()).data
  );

  return {
    ownersList: owners
  };
};
