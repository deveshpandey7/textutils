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
    document.getSelection().removeAllRanges();
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
<h1 className='mb-4 my-2'>{props.heading} </h1>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to LowerCase</button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text </button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text </button>
<button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpace}>Remove Extra space </button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
  <h2>Your text summary</h2>
  <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
  <h2>Preview Zone</h2>
  <p>{text.length>0?text:"Nothing to preview>>>"}</p>
</div>
</>
  )
}
