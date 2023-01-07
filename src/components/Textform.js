import React,{useState} from 'react'

export default function Textform(props) {
    const [myStyle,setStyle] = useState({
        color:"black",
        backgroundColor:"white",
    })
    const [btntext,setdark] = useState("Enable")
    const toggleStyle =  ()=>{
        if(myStyle.color==='black'){
            setStyle({
                color:"white",
                backgroundColor:"black"
            })
            setdark("Disable")
        }
        else{
            setStyle({
                color:"black",
                backgroundColor:"white"
            })
            setdark("Enable")
        }
    }    

        
    const changeUpper = ()=>{
        // setText("You clicked on the button ")
        setText(text.toUpperCase())
    }
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const [text,setText] = useState("Enter text here")
    // setText("Enter text in here")
    return (
        <>
        <div className='container my-4'>
            <div className="mb-3">
                <div className="d-flex justify-content-between">
                <h2>{props.heading}</h2>
                <div className="d-flex">
                <div className="btn btn-info m-1">{text.split(' ').length-1} Words</div>
                <div className="btn btn-info m-1">{text.length} Characters</div>
                <div className="btn btn-info m-1">{(text.split(' ').length-1)*0.008} min read</div>
                </div>
                </div>
                <textarea style={myStyle} className="form-control" onChange={handleChange} value={text} id="exampleFormControlTextarea1" rows="6"></textarea>
            </div>
            <div className="buttons">
                <button className='btn btn-primary m-1' onClick={()=>{setText('')}}>Clear All</button>
                <button className='btn btn-primary m-1' onClick={changeUpper}>Convert to Uppercase</button>
                <button className='btn btn-primary m-1' onClick={()=>{setText(text.toLowerCase())}}>Convert to Lowercase</button>
                <button className='btn btn-primary m-1' onClick={()=>{setText(text.trim())}}>Trim</button>
                <button className='btn btn-dark m-1' onClick={toggleStyle}>{btntext} Dark Mode</button>
            </div>
        </div>
        </>
    )
}