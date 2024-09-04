import "./App.css";
// import Counter from "./components/Counter";
import { Login } from "./components/Login";
// import { Youtube } from "./components/Youtube";
// import { FunComp } from "./components/FunComp";
// import { ClassComp } from "./components/ClassComp";

function App() {
  return (
    <>
      <div className="container">
        {/* <div className="col">
          <div className="bg-secondary-subtle">
            <div>
              <ClassComp name="Harlem dev" age={26} />
            </div>
          </div>
          <div>
            <div>
              <FunComp name="Vazquez Dev" age={26} />
            </div>
          </div>
        </div> */}

        {/* <Counter />
        <Youtube /> */}
        <Login />
      </div>
    </>
  );
}

export default App;
