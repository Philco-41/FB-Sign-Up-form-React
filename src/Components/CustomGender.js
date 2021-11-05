import React from "react";
import "./SignUpStyles.css";

function CustomGender() {
  return (
    <div className="flexC">
      <select className="SUselect2">
        <option disabled selected>
          Select your pronoun{" "}
        </option>
        <option>She: "Wish him a happy birthday!"</option>
        <option>He: "Wish her a happy birthday!"</option>
        <option>They: "Wish them a happy birthday!"</option>
      </select>
      <p className="SUtext5">Your pronoun is visible to everyone.</p>
      <input type="text" placeholder="Gender (optional)" className="SUinput2" />
    </div>
  );
}

export default CustomGender;
