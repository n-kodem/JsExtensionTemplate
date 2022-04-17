import React from "react";
import { render } from "react-dom";

function Popup() {
  return (
    <div>
      <h1>Popup</h1>
      <p>
        This is a modal window. You can do the following things with it:
      </p>
      <ul>
        <li>Read my mind.</li>
        <li>Change the world.</li>
        <li>Rule the world.</li>
      </ul>
    </div>
  );
}
render(<Popup />, document.getElementById("react-target"));