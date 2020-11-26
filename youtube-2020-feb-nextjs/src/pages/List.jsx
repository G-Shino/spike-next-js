import Link from "next/link";
// import { useEffect, useState } from "react";

const List = ({ ownersList }) => {
  // const [ownersList, setOwnersList] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://httpbin.org/post", {
  //       method: "POST",
  //       body: JSON.stringify([
  //         { ownerName: "bruno", vehicle: "car" },
  //         { ownerName: "john", vehicle: "bike" },
  //         { ownerName: "mick", vehicle: "airplane" }
  //       ])
  //     });
  //     const owners = JSON.parse((await response.json()).data);
  //     setOwnersList(owners);
  //   })();
  // }, []);

  return (
    <div>
      {ownersList.map((owner, index) => (
        <div key={index}>
          <Link href={`/${owner.vehicle}/${owner.ownerName}`}>
            <a>
              Navigate to {owner.ownerName}'s {owner.vehicle}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default List;

List.getInitialProps = async () => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    body: JSON.stringify([
      { ownerName: "bruno", vehicle: "car" },
      { ownerName: "john", vehicle: "bike" },
      { ownerName: "mick", vehicle: "airplane" }
    ])
  });
  const owners = JSON.parse((await response.json()).data);

  return {
    ownersList: owners
  };
};
