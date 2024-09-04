import { useState } from "react";

interface ISTATE {
  message: string;
}

export const Youtube: React.FC = () => {
  const [state, setState] = useState<ISTATE>({ message: "Welcome" });
  const handleMSG = (greet: string): void => {
    setState({ message: greet });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-6"></div>
        <div className="card mt-4">
          <div className="card-body">
            <h1 className="m-3">{state.message}</h1>
            <button
              className="btn btn-info"
              onClick={() => {
                handleMSG("LIKED!");
              }}
            >
              LIKE
            </button>
            <button
              className="btn btn-primary ms-2"
              onClick={() => {
                handleMSG("COMMENTED!");
              }}
            >
              Comment
            </button>
            <button
              className="btn btn-danger ms-2"
              onClick={() => {
                handleMSG("SUSCRIBED!");
              }}
            >
              SiuuuScribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
