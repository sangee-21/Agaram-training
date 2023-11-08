import { useState } from "react";
export default function Addtodo(props){
    let [inputvalue,setInputvalue]=useState("")
    return(
        <form>
        {/* {inputvalue} */}
        
        <input type="text" onKeyUp={(e)=>setInputvalue(e.target.value)}/>
        
        <button type="button" onClick={()=>{props.settodos([...props.tod,inputvalue])}}>Add</button>
    </form>
    )
}