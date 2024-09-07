import { useEffect, useState } from "react";
import { IUsers } from "../models/IUsers";
import { UsersService } from "../services/UsersService";

interface IState {
  loading: boolean;
  users: IUsers[];
  errorMsg: string;
}

export const User: React.FC = () => {
  const [state, setState] = useState<IState>({
    loading: false,
    users: [] as IUsers[],
    errorMsg: "",
  });

  // network request
  useEffect(() => {
    setState({ ...state, loading: true });
    UsersService.getAllUsers()
      .then((res) =>
        setState({
          ...state,
          loading: false,
          users: res.data,
        })
      )
      .catch((err) =>
        setState({
          ...state,
          loading: false,
          errorMsg: err.message,
        })
      );
  });

  const { loading, users, errorMsg } = state;
  return (
    <>
      <div className="container">
        <h1>Data from APIs</h1>
        {errorMsg && <p>{errorMsg}</p>}
        {loading && <h1>Loading...</h1>}
        <table className="table table-striped">
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Username</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
