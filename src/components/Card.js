import React from "react";

const Card = ({id, name, email}) => {
  return (
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-s">
        <img alt="roboPhoto" src={`https://robohash.org/${id}?200*200`} />
        <div>
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
      </div>
  );
};

export default Card;
