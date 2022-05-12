import React, { useState } from "react";

export default function Textform(props) {
  const [text, SetText] = useState("This is the default text");

  const onChangeHandler = (event) => {
    SetText(event.target.value);
  };

  const ChangeToUpp = () => {
    let newtext = text.toUpperCase();
    console.log(newtext);
    SetText(newtext);
    props.Notification("Converted To UpperCase !", "success");
  };
  const ChangeToLow = () => {
    let newtext = text.toLowerCase();
    console.log(newtext);
    SetText(newtext);
    props.Notification("Converted To LowerCase !", "success");
  };

  // BY ME
  const onclickTextAreaHandle = () => {
    if (text === "This is the default text") SetText("");
  };
  const Cleartext = () => {
    SetText("");
    props.Notification("Deleted !", "success");
  };
  let extractnum = () => {
    let number=text.replace(/\D/g,'');
    navigator.clipboard.writeText(number);
    alert('Copied to Clipboard '+ number);
    props.Notification("Copied Successfully", "success");
  };
  var extractemail = () => {
    let email=text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    navigator.clipboard.writeText(email);
    alert('Copied to Clipboard '+ email);
    props.Notification("Copied Successfully", "success");

  };
  var TextTospeech = () => {
    if ('speechSynthesis' in window) {
      var msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.Notification("Fetched, Loading......", "success");

     }else{
       // Speech Synthesis Not Supported 😣
       alert("Sorry, your browser doesn't support text to speech!");
     }
  };

  var CapataliseFirstLetter=()=>
  {
    var arr=text.split(" ");
    for(var i=0; i<arr.length; i++)
    {
      arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    var newtext=arr.join(" ");
    SetText(newtext);
    props.Notification("Capatalised The First Letter Successfully", "success");
  }

  var Standardisation=()=>
  {
    var str1=text.charAt(0).toUpperCase()+text.slice(1);
    SetText(str1);
    props.Notification("Standardised Successfully", "success");

  }

  var copy=()=>
  {
    navigator.clipboard.writeText(text);
    alert('Copied! To Clipboard');
    props.Notification("Copied Successfully", "success");
  }

  var Extraspaces=()=>
  {
    let newtext=text.split(/[ ]+/);
    SetText(newtext.join(" "))
    props.Notification("Extra Spaces Removed Successfully", "success");

  }


  return (
      <>
    <div className="container">
     
      <div className="mb-3">

        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          style={{color: props.mode==='light'?'black':'white', background: props.mode==='light'?'white':'black'}}
          value={text}
          onChange={onChangeHandler}
          onClick={onclickTextAreaHandle}
          rows="5"
        ></textarea>      
      </div>
      <button
        type="button"
        onClick={TextTospeech}
        className="btn btn-primary mx-1 my-2"
        >
        Text To Speech
      </button>
      <button
        type="button"
        onClick={extractnum}
        className="btn btn-primary mx-1 my-2"
        >
        Get Number
      </button>
      <button
        type="button"
        onClick={extractemail}
        className="btn btn-primary mx-1 my-2"
        >
        Get Email
      </button>
      <button
        type="button"
        onClick={Extraspaces}
        className="btn btn-primary mx-1 my-2"
        >
        Remove Extra Spaces
      </button>
      <button
        type="button"
        onClick={ChangeToUpp}
        className="btn btn-primary mx-1 my-1"
      >
        Convert To Uppercase
      </button>
      <button
        type="button"
        onClick={ChangeToLow}
        className="btn btn-primary mx-2"
        >
        Convert To Lowercase
      </button>
      <button
        type="button"
        onClick={CapataliseFirstLetter}
        className="btn btn-primary mx-1 my-2"
        >
        Capatalise First Letter
      </button>
      <button
        type="button"
        onClick={Standardisation}
        className="btn btn-primary mx-1 my-2"
        >
        Standardisation
      </button>
      <button
        type="button"
        onClick={Cleartext}
        className="btn btn-primary mx-2"
        >
        Delete 
      </button>
      <button
        type="button"
        onClick={copy}
        className="btn btn-primary mx-1 my-2"
        >
        Copy To Clipboard
      </button>

    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Word <em>&</em> Character</h2>
      <p><b>{text.split(' ').length}</b> Words and <b>{text.length}</b> Characters</p>
      <h2>Reading Time</h2>
      <p><b>{0.08*text.split(' ').length}</b> Minutes required to read this text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Please Enter Something In Text Box To Get Preview"}</p>
    </div>
    </>
  );
}
