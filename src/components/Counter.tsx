import React, { useState } from "react";

interface ISTATE {
  count: number;
}
interface IPROPS {}
const Counter: React.FC = () => {
  const [state, setState] = useState<ISTATE>({ count: 0 });
  const handleInc = () => {
    setState({ count: state.count + 10 });
  };
  const handleDec = () => {
    if (state.count > 0) {
      setState({ count: state.count - 5 });
    }
  };
  return (
    <div>
      <h1>Event Handling</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="display-3">{state.count}</h2>
              <button className="btn btn-success me-2" onClick={handleInc}>
                INCREMENT +
              </button>
              <button className="btn btn-danger ms-2" onClick={handleDec}>
                DECREMENT -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
