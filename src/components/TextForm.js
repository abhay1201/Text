import { useState } from "react"



export default function TextForm(props) {
    const handleUpClick=() =>{
        console.log("uppercasae was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=() =>{
        console.log("Lowercasae was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=() =>{
        console.log(" " + text);
        let newText=" ";
        setText(newText);
    }
        
    
    
    const handleonChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
   const [text, setText] = useState(""); 
//    text="New text"//  wrong way change the text
//    setText=("New text") // correct way to change the text
       return (
        <>
    <div>
        <h1>{props.heading}</h1>
     <div className="form-floating mb-3">
        <textarea className="form control" value={text} onChange= {handleonChange} id="my box" rows ="10" cols="150"  placeholder="Enter your Text here"></textarea>
        </div> 
        <button className="btn btn-primary mx-1 " onClick= {handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-1 " onClick= {handleLoClick}>convert to lowercase</button>
        <button className="btn btn-primary mx-1 " onClick= {handleClearClick}>Clear text</button>
    </div>

    <div className="container my-3" >
        <h2>Text summary </h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.08 * text.split(" ").length} minutes read</p>
    </div>
    <div className="container">
        <h2> Preview </h2>
        <p>{text}</p>
    </div>
    </>
    
  )
}
