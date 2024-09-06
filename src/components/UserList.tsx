import { useState } from "react";
import { IUser } from "../models/IUser";
import { UserSerivce } from "../services/UserService";

interface ISTATE {
  users: IUser[];
}

export const UserList: React.FC = () => {
  const [state, setState] = useState<ISTATE>({
    users: UserSerivce.getAllUsers(),
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Looping / Iteration</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {state.users.length > 0 &&
                state.users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
