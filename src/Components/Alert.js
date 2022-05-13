import React from "react";

export default function Alert(props) {
  var toupper = (word) => {
    var capitalise = word.toLowerCase();
    return capitalise.charAt(0).toUpperCase() + capitalise.slice(1);
  };
  return (
    <div style={{height: '45px'}}>
    {props.alertt &&
    <div
      className={`alert alert-${props.alertt.type} fade show`}
      role="alert"
    >
      <strong> {toupper(props.alertt.type)} </strong> : {props.alertt.msg}
    </div>}
    </div>
  );
}
