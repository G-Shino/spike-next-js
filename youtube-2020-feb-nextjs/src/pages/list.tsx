import Link from "next/link";
import { VehiclePerson } from "../const/types/api";

export interface ListProps {
  ownersList?: VehiclePerson[];
}

const List = ({ ownersList }: ListProps) => {
  return (
    <div>
      {ownersList?.map((owner, index) => (
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
  const owners: VehiclePerson[] | undefined = JSON.parse(
    (await response.json()).data
  );

  return {
    ownersList: owners
  };
};
