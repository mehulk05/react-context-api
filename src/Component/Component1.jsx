import React from "react";
import Card from "./Card";


function Component1() {
  let data = [
    {
      id: 1,
      name: "card1",
      status: "start",
    },
    {
      id: 2,
      name: "card2",
      status: "start",
    },
    {
      id: 3,
      name: "card3",
      status: "start",
    },
  ];
  return (
    <div>
      <h1>Hello</h1>
      {data.map((d, i) => (
        <Card key={i} data={d} />
      ))}
    </div>
  );
}

export default Component1;
