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

        <h3 className="mb-2" style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h3>
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
      disabled={text.length===0}
        type="button"
        onClick={TextTospeech}
        className={`btn btn-${props.pellet} mx-1 my-1`}
        >
        Text To Speech
      </button>
      <button
      disabled={text.length===0}
        type="button"
        onClick={extractnum}
        className={`btn btn-${props.pellet} mx-1 my-1`}
        >
        Get Number
      </button>
      <button
      disabled={text.length===0}
        type="button"
        onClick={extractemail}
        className={`btn btn-${props.pellet} mx-1 my-1`}
        >
        Get Email
      </button>
      <button
      disabled={text.length===0}
        type="button"
        onClick={Extraspaces}
        className={`btn btn-${props.pellet} mx-1 my-1`}
        >
        Remove Extra Spaces
      </button>
      <button
      disabled={text.length===0}
        type="button"
        onClick={ChangeToUpp}
        className={`btn btn-${props.pellet} mx-1 my-1`}
      >
        Convert To Uppercase
      </button>
      <button
      disabled={text.length===0}
        type="button"
        onClick={ChangeToLow}
        className={`btn btn-${props.pellet} mx-1 my-1`}
        >
        Convert To Lowercase
      </button>
      <button
      disabled={text.length===0}
        type="button"
        onClick={CapataliseFirstLetter}
        className={`btn btn-${props.pellet} mx-1 my-1`}
        >
        Capatalise First Letter
      </button>
      <button
      disabled={text.length===0}
        type="button"
        onClick={Standardisation}
        className={`btn btn-${props.pellet} mx-1 my-1`}
        >
        Standardisation
        
      </button>
      <button
      disabled={text.length===0}
        type="button"
        onClick={Cleartext}
        className={`btn btn-${props.pellet} mx-1 my-1`}
        >
        Delete 
      </button>
      <button
      disabled={text.length===0}
        type="button"
        onClick={copy}
        className={`btn btn-${props.pellet} mx-1 my-1`}
        >
        Copy To Clipboard
      </button>

    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
      <h2>Word <em>&</em> Character</h2>
      <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> Words and <b>{text.length}</b> Characters</p>
      <h2>Reading Time</h2>
      <p><b>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> Minutes required to read this text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Please Enter Something In Text Box To Get Preview"}</p>
    </div>
    </>
  );
}
