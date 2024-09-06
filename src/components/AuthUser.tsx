import React, { useState } from "react";
interface ISTATE {
  isLogin: boolean;
}
export const AuthUser: React.FC = () => {
  const [login, setLogin] = useState<ISTATE>({ isLogin: false });
  // login function
  const handleLogin = (): void => {
    setLogin({ isLogin: true });
  };

  const handleLogout = () => {
    setLogin({ isLogin: false });
  };
  return (
    <>
      <div className="container">
        <div className="row card p-4 mt-4">
          <div className="col-md-10">
            {login.isLogin && login.isLogin ? (
              <h1>Welcome User</h1>
            ) : (
              <h1>Please LoginFor dashboard</h1>
            )}

            {login.isLogin && login.isLogin ? (
              <button className="btn btn-danger m-2" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button className="btn btn-primary m-2" onClick={handleLogin}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
