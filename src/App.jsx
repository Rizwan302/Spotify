import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Loginbar from "./components/Secendbar";
import Nav from "./components/Nav";

function App() {
  const [theme, setTheme] = useState({
    background: "#0F0F0F",
    color: "white",
  });

  // const UpdateMode = () => {
  //   if (theme.color === "white") {
  //     setTheme({
  //       background: "#F5FFFA",
  //       color: "#0F0F0F",
  //     });
  //   } else {
  //     setTheme({
  //       background: "#0F0F0F",
  //       color: "white",
  //     });
  //   }
  // };

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Nav/>
      <Loginbar />
    </div>
  );
}

export default App;
