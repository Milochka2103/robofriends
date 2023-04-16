import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  if (true) {
    throw new Error('NOOOOO!')
  }
  return (
    <div>
      {robots.map((user, index) => {
        return (
          <Card
            key={index}
            id={robots[index].id}
            name={robots[index].username}
            email={robots[index].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
