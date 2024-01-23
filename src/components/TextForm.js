import React, { useState } from 'react'


export default function TextForm(props) {

  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!", "success");
  }

  const handleLoClick = () =>{
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!", "success");
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
    props.showAlert("Copied to clipboard..!", "success");
   }

   const handleExtraSpace =()=>{
    let newText = text.split(/[ ]+/); // removing space and making an array of words
    setText(newText.join(" "))
    props.showAlert("Extraa space removed successfully!", "success");
   }

   const handleClearClick = ()=>{
    let newText = " ";
    setText(newText)
    props.showAlert("Text cleared successfully!", "success");
   }


  const [text, setText] = useState('')
  // text = "new text"; // wrong way to change state
  // setText = (new text); // correct way to change state

  return (
   <>
<div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
<h1>{props.heading} </h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
<button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text </button>
<button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text </button>
<button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove Extra space </button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").length} Words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} Minutes read</p>
  <h2>Preview Zone</h2>
  <p>{text.length>0?text:"Enter something in textform above to preview it here>>>"}</p>
</div>
</>
  )
}
