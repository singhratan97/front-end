// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import NewComp from "./NewComp";
// import FormBuilder from "./FormBuilder";
import Interview from "./Interview";

export default function App() {
  // const [hoverColor, setHoverColor] = useState("");
  // const [actualColor, setActualColor] = useState("");
  return (
    <>
      {/* <h1>Hello World!</h1> */}
      {/* <FontAwesomeIcon
        icon={faStar}
        style={{
          fontSize: "50px",
          color: actualColor || hoverColor || "black",
        }}
        onMouseEnter={() => {
          setHoverColor("cyan");
        }}
        onMouseLeave={() => {
          setHoverColor("");
        }}
        onClick={() => {
          setActualColor("yellow");
        }}
      />
      <br /> */}
      {/* {Array(5).fill(
        <FontAwesomeIcon
          icon={faStar}
          style={{
            fontSize: "50px",
          }}
        />
      )} */}
      {/* <NewComp /> */}
      {/* <FormBuilder /> */}
      <Interview />
    </>
  );
}
