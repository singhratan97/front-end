import { useState } from "react";
import Tour from "reactour";

export default function Interview() {
  const [typedText, setTypedText] = useState("");

  function clickSubmit() {
    let typedTextArray = typedText.split(" ");
    let str = "";
    for (let i = 0; i < typedTextArray.length; i++) {
      setInterval(() => {
        str = str + typedTextArray[i];
        console.log(str);
      }, 1000);
      //   console.log(typedTextArray[i]);
    }
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setTypedText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            clickSubmit();
          }
        }}
      />
      <button onClick={clickSubmit}>Submit!</button>
      <Tour
        steps={[
          {
            selector: ".first-step",
            content: "This is my first Step",
          },
          {
            selector: ".second-step",
            content: "This is my second Step",
          },
          {
            selector: ".third-step",
            content: "This is my second Step",
          },
          // ...
        ]}
        isOpen={true}
        // onRequestClose={closeTour}
      />
    </div>
  );
}
