// import React, { useState } from 'react'
export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: "black",
  //   backgroundColor: "white"
  // });
  let myStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'rgb(18 32 156)':'white',
  }
  return (
    <div className="accordion" id="accordionExample" >
      <h1 className="my-3" style={{color: props.mode === 'dark'?'white':'black'}}>About US</h1>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" style={myStyle}>
          <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze Your text</strong>
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or characters, convert to uppercase, lowercase, titlecase and Turkish-uppercase. It can read what you wrote and copy it to your clipboard and also remove extra spaces from your text. It also tells us about time required to read and displays a preview of the text.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" style={myStyle}>
          <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the numebr of words and characters. That it is suitable for writing text with word/ characters limit.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" style={myStyle}>
          <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            This word counter software worsk in any browers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essay, etc. 
          </div>
        </div>
      </div>
    </div>
  );
}
