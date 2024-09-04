import React, { useState } from "react";
interface ISTATE {
  user: {
    email: string;
    password: string;
  };
}
export const Login: React.FC = () => {
  const [state, setState] = useState<ISTATE>({
    user: { email: "", password: "" },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setState({
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  // form handling
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(state.user);

    alert("login success");
  };
  return (
    <div className="container">
      <div className="w-50">
        <form className="card p-4 mt-4" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={handleChange}
              value={state.user.email}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={handleChange}
              value={state.user.password}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="mt-4 bg-light p-2">
          <p>{JSON.stringify(state.user)}</p>
        </div>
      </div>
    </div>
  );
};
