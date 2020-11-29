const sqlite = require("sqlite");

const setup = async () => {
  const db = await sqlite.open("./mydb.sqlite");
  await db.migrate({ force: "last" });

  const people = await db.all("SELECT * FROM person");
  console.log("ALL PEOPLE", JSON.stringify(people, null, 2));
  const vehicle = await db.all("SELECT * FROM vehicle");
  console.log("ALL VEHICLE", JSON.stringify(vehicle, null, 2));
};

setup();
