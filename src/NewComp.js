import React from "react";

class NewComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "New Comp",
      detail: "Its new",
    };
  }

  componentDidMount() {
    // console.log("mounted");
    // console.log(this.state);
  }

  componentDidUpdate() {
    // console.log("updated");
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <p>{this.state.msg}</p>
        <button
          onClick={() => {
            this.setState({ msg: "newnewComp" });
          }}
        >
          Click!!!
        </button>
      </div>
    );
  }
}

export default NewComp;
