import React, { useState } from 'react'


export default function TextForm(props) {

  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLoClick = () =>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
  }

   const handleOnChange = (event) =>{
    console.log("On Change");
    setText(event.target.value)
   }


  const [text, setText] = useState('Enter text here2')
  // text = "new text"; // wrong way to change state
  // setText = (new text); // correct way to change state

  return (
   <>
<div className='container'>
<h1>{props.heading} </h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to Upper Case</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lower Case</button>
</div>
<div className="container my-3">
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
}
