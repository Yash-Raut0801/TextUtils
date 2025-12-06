import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To Uppercase","success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To Lowercase","success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text has been Cleared","success");
  };
  const handleTitleClick = () => {
    if (text.length !== 0) {
      let titleText = text.charAt(0).toUpperCase() + text.slice(1);
      setText(titleText);
      props.showAlert("Converted To Titlecase","success");
    }
    else
    {
      props.showAlert("Please enter text to convert","warning");
      return;
    }
    
    props.showAlert("Converted To Titlecase","success");
  };
  const handleTurkUpClick = () => {
    let turkey;
    turkey = text.toLocaleUpperCase("tr-TR");
    setText(turkey);
    props.showAlert("Converted To Turkishcase","success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById('toggle')
    if (toogle.textContent === "Speak") {
      toogle.innerHTML = "Stop";
      props.showAlert("Speak Enabled","success");
    }
    else {
      toogle.innerHTML = "Speak"
      if (toogle.innerHTML === "Speak") {
        window.speechSynthesis.cancel();
        props.showAlert("Speak Disabled","success");
      }
    }
    
  }
  const handleCopyClick = () => {
    var text = document.getElementById("box");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copies to clipboard","success");
  }
  const handleExSpcClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed","success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const wordCount = (text) => {
    if(text.length !== 0)
    {
      return text.split(" ").length;
    }
    else
    {
      return 0;
    }
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="contaienr" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'#020736', color:props.mode==='light'?'black':'white'}} id="box" rows="10" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleTitleClick}>Convert to TitleCase(<i>Only first letter is capitalazied</i>)</button>
        <button className="btn btn-primary mx-1" onClick={handleTurkUpClick}>Convert to TurkishUpperCase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={speak} id="toggle">Speak</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExSpcClick}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode === 'light' ? 'black':'white' }}>
        <h2>Your Text Summary</h2>
        <p><i>{wordCount(text)} words, {text.length} characters</i></p>
        <p><b>{0.008 * text.split(" ").length} Minutes read</b></p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the above text-box to preview it here."}</p>
      </div>
    </>
  );
}
