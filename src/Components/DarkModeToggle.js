import React from "react";

export default function DarkModeToggle(props) {
  return (
    <div className="container">

    <div className="container_Dark ">
      <div className="form-check form-switch my-3  ">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          aria-checked="true"
          id="flexSwitchCheckDefault"
          onClick={props.togglemode}
        />
        <label
          className="form-check-label "
          htmlFor="flexSwitchCheckDefault"
          style={{ color: props.modetogglex === "light" ? "black" : "white" }}
          >
          <strong>Enable Dark Mode</strong>
        </label>
      </div>
      <div className="dark_mode_pellet">
        <button className="green_btn" onClick={props.togglemode_green}></button>
        <button className="blue_btn" onClick={props.togglemode_blue}></button>
        <button className="red_btn" onClick={props.togglemode_red}></button>
        <button className="yellow_btn" onClick={props.togglemode_yellow}></button>
      </div>
    </div>
          </div>
  );
}
