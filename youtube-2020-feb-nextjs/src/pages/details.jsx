import Link from "next/link";

const people = [
  {v: "car", name: "bruno"},
  {v: "bike", name: "john"},
  {v: "airplane", name: "mick"},
]

export default function Details() {
  return <div>
    {people.map(e => (
      <div>
        <Link href={`/${e.v}/${e.name}`}>
          <a>{e.name} page</a>
        </Link>
      </div>
    ))}
  </div>
}