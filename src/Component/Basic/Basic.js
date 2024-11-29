import React, { Component } from "react";

const Button = ({ value, onUpdate }) => {
  return (
    <button type="button" onClick={onUpdate}>
      Clicks:{value}
    </button>
  );
};

class Basic extends Component {
  state = {
    a: 0,
    b: 0,
  };
  updateA = () => {
    this.setState((prevState) => {
      return {
        a: prevState.a + 1,
      };
    });
  };
  updateB = () => {
    this.setState((prevState) => {
      return {
        b: prevState.b + 1,
      };
    });
  };
  //   increment = () => {
  //     this.setState((prevState) => {
  //       return {
  //         clicks: prevState.clicks + 1,
  //       };
  //     });
  //   };
  //   decrement = () => {
  //     this.setState((prevState) => {
  //       return {
  //         clicks: prevState.clicks - 1,
  //       };
  //     });
  //   };
  render() {
    const { a, b } = this.state;
    const total = a + b;
    return (
      <div>
        {total > 0 && (
          <>
            {<p>A={a}</p>}
            {<p>B={b}</p>}
            {<p>Total={total}</p>}
          </>
        )}

        <Button value={a} onUpdate={this.updateA} />
        <Button value={b} onUpdate={this.updateB} />
      </div>
    );
  }
}

export default Basic;
