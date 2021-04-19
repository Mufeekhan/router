import React from "react";

const Mufeed = ({ ninjas }) => {
  const ninjaList = ninjas.map((ninja) => {
    return (
      <div className="ninjas" key={ninja.id}>
        <div>name :{ninja.name}</div>
        <div>age: {ninja.age} </div>
        <div>color :{ninja.belt}</div>
      </div>
    );
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Mufeed;
