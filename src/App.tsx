import { Outlet } from "react-router-dom";
import "./styles.css";
import Header from "./header/Header.module";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
