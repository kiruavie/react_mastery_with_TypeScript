import React from "react";

interface STATE {
  yourname: string;
  title: string;
}
interface PROPS {
  name: string;
  age: number;
}
export class ClassComp extends React.Component<PROPS, STATE> {
  constructor(props: PROPS) {
    super(props);
    this.state = {
      yourname: "Kiruavie",
      title: "Learning Typescript",
    };
  }

  render() {
    const { name, age } = this.props;
    const { yourname, title } = this.state;
    return (
      <>
        <h1 className="bg-dark text-light text-center">Class component</h1>
        <h4>Name: {name}</h4>
        <h4>Age: {age}</h4>
        <hr />
        <br />
        <h1>voir</h1>
        <h3> {yourname} </h3>
        <h3> {title} </h3>
      </>
    );
  }
}
