import { useState } from "react"
import Header from '../header';
import { useNavigate } from "react-router-dom";

export default function Main(props){
    const navigate = useNavigate();
    let [logindata,setdata]=useState({
        email:"",
        password:""
    })
    
const Checklogin=()=>{
   
    if(logindata.email=="sangee@gmail.com" && logindata.password==123){
        props.setislogin({
            log:true,
            email:logindata.email
        })
        navigate("/")
    }
    else{
        props.setislogin(false)

    }
}

    return(
        <form>
           <Header/>
            <label>Email</label>
            <input type="text"  onKeyUp={(e)=>setdata({
              ...logindata,
              email:e.target.value  
            })}/>
            <label>password</label> 
            <input type="text" onKeyUp={(e)=>setdata({
                 ...logindata,
                 password:e.target.value 
            })}/>
            <button onClick={()=>Checklogin()}>Login</button>

        </form>
    )
}