import React, { useState } from "react";

interface STATE {
  name: string;
  title: string;
}

interface PROPS {
  name: string;
  age: number;
}
export const FunComp: React.FC<PROPS> = ({ name, age }) => {
  const [state, setState] = useState<STATE>({
    name: "Wilshere dev",
    title: "React Typescript develepment",
  });
  return (
    <>
      <h1 className="bg-success p-1 text-info text-center">
        Fonctional component
      </h1>
      <h2> Name : {name} </h2>
      <h2> Age : {age} </h2>

      <div className="col-md card p-2">
        <h1>Values from state</h1>
        <h4>Name : {state.name} </h4>
        <h4>Name : {state.title} </h4>
      </div>
    </>
  );
};
