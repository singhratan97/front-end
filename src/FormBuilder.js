import { useEffect, useState } from "react";

export default function FormBuilder() {
  const [noOfInputElements, setNoOfInputElements] = useState([]);
  const [noOfDropdownElements, setNoOfDropdownElements] = useState([]);

  const [currentInputIndex, setCurrentInputIndex] = useState("");
  const [currentDropdownIndex, setCurrentDropdownIndex] = useState("");

  const [dropdownText, setDropDownText] = useState("");

  useEffect(() => {
    console.log(noOfInputElements);
  }, [noOfInputElements]);

  useEffect(() => {
    console.log(noOfDropdownElements);
  }, [noOfDropdownElements]);

  return (
    <div
      style={{
        marginLeft: "10px",
      }}
    >
      <h1>Form builder</h1>
      <button
        onClick={() => {
          setNoOfInputElements((prev) => {
            return [...prev, { type: "text" }];
          });
        }}
      >
        Add Input Box
      </button>
      <button
        onClick={() => {
          setNoOfDropdownElements((prev) => {
            return [...prev, {}];
          });
        }}
      >
        Add Dropdown Box
      </button>
      <br />
      <h3>Select type</h3>
      <div>
        <button
          onClick={() => {
            let noOfInputElementsCopy = JSON.parse(
              JSON.stringify(noOfInputElements)
            );
            noOfInputElementsCopy[currentInputIndex]["type"] = "text";
            noOfInputElementsCopy[currentInputIndex]["value"] = "";
            setNoOfInputElements(noOfInputElementsCopy);
          }}
        >
          Text
        </button>
        <button
          onClick={() => {
            let noOfInputElementsCopy = JSON.parse(
              JSON.stringify(noOfInputElements)
            );
            noOfInputElementsCopy[currentInputIndex]["type"] = "number";
            noOfInputElementsCopy[currentInputIndex]["value"] = "";
            setNoOfInputElements(noOfInputElementsCopy);
          }}
        >
          Number
        </button>
        <button
          onClick={() => {
            let noOfInputElementsCopy = JSON.parse(
              JSON.stringify(noOfInputElements)
            );
            noOfInputElementsCopy[currentInputIndex]["type"] = "password";
            noOfInputElementsCopy[currentInputIndex]["value"] = "";
            setNoOfInputElements(noOfInputElementsCopy);
          }}
        >
          Password
        </button>
      </div>

      <br />
      <div>
        {noOfInputElements.map((ele, index) => {
          return (
            <>
              <input
                style={{
                  marginBottom: "5px",
                }}
                type={noOfInputElements[index]["type"]}
                id={"input " + index}
                value={noOfInputElements[index]["value"]}
                onClick={() => {
                  setCurrentInputIndex(index);
                }}
                onChange={(e) => {
                  let noOfInputElementsCopy = JSON.parse(
                    JSON.stringify(noOfInputElements)
                  );
                  noOfInputElementsCopy[index]["id"] = e.target.id;
                  noOfInputElementsCopy[index]["value"] = e.target.value;
                  noOfInputElementsCopy[index]["type"] = e.target.type;
                  setNoOfInputElements(noOfInputElementsCopy);
                }}
              />
              <br />
            </>
          );
        })}
        {noOfDropdownElements.map((ele, index) => {
          return (
            <>
              <select
                style={{
                  marginBottom: "5px",
                }}
                id={"dropdown " + index}
                onClick={(e) => {
                  if (!("id" in noOfDropdownElements[index])) {
                    setCurrentDropdownIndex(index);
                    let noOfDropdownElementsCopy = JSON.parse(
                      JSON.stringify(noOfDropdownElements)
                    );
                    noOfDropdownElementsCopy[index]["id"] = e.target.id;
                    noOfDropdownElementsCopy[index]["optionValues"] = [];
                    setNoOfDropdownElements(noOfDropdownElementsCopy);
                  }
                  console.log(index);
                }}
              >
                {noOfDropdownElements[index]?.optionValues?.map(
                  (ele, index) => {
                    return <option>{ele}</option>;
                  }
                )}
              </select>
              <br />
            </>
          );
        })}
        {
          <>
            <input
              type="text"
              placeholder="dropdown option input"
              value={dropdownText}
              onChange={(e) => {
                setDropDownText(e.target.value);
              }}
            />
            <button
              onClick={() => {
                let noOfDropdownElementsCopy = JSON.parse(
                  JSON.stringify(noOfDropdownElements)
                );
                noOfDropdownElementsCopy[currentDropdownIndex].optionValues = [
                  ...noOfDropdownElementsCopy[currentDropdownIndex]
                    .optionValues,
                  dropdownText,
                ];
                setNoOfDropdownElements(noOfDropdownElementsCopy);
                setDropDownText("");
              }}
            >
              Add dropdown input
            </button>
          </>
        }
      </div>
    </div>
  );
}
