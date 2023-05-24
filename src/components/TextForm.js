import React,{useState} from 'react'



export default function TextForm(props) {

    const handleUpClick =()=>{
        // console.log("Upper case is click" + text);

        let newtext=text.toUpperCase();

        setText(newtext);

        props.showAlert("Converted to UPPER CASE","success");
    }

    const handleLoClick=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lower case","success");
    }

   
    const handleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

   const handleClearClick=()=>{
    let newtext="";
    setText(newtext);
    props.showAlert("cleared successfully","success");
   
   }    

   const handleCopy=()=>{
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" successfully copied at clipboard","success")
   }


   const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
   }
 


    const [text, setText] = useState('');
    
  return (
    <>
    <div className='container'>
    
      <h1>{props.heading}</h1>
        <div className="mb-3">
                
             <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
       
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
       
       
    </div>
   

    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} <b> words </b> </p>
        <p> {text.length} <b>character</b> </p>
        <p>{0.008 * text.split(" ").length} <b>Minutes read</b> </p>
        
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>


    </>
  )
}
