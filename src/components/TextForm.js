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

   const handleCopy = ()=>{
    console.log("I am copy")
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
   }

   const handleExtraSpace =()=>{
    let newText = text.split(/[ ]+/); // removing space and making an array of words
    setText(newText.join(" "))
   }

   const handleClearClick = ()=>{
    let newText = " ";
    setText(newText)
   }


  const [text, setText] = useState('Enter text here2')
  // text = "new text"; // wrong way to change state
  // setText = (new text); // correct way to change state

  return (
   <>
<div className='container'>
<h1>{props.heading} </h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'grey':'white'}} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
<button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text </button>
<button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text </button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra space </button>
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
