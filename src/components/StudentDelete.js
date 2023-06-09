import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const StudentDelete=()=>{
    const sid=useRef(" ");
    const [res,setRes]=useState({});
    const navigator=useNavigate();
    const my_func=()=>{
        axios.delete(`http://localhost:1996/vk/delete/${sid.current.value}`).then((posRes) => {
            const {data}=posRes;
            setRes(data);
            if(data)
            {
                navigator("/home");
            }
            else{
                navigator("/error");
            }
        },(errRes) => {
            console.log(errRes);
        })
    }
    return(
        <>
        <center>
        <h1 style={{color:"Red"}}>Delete Student From Here</h1>
        Enter Student Id: <input type={"number"} ref={sid}></input>
        <br></br><br></br>
        <button onClick={my_func}>Delete</button>
        {
            Object.keys(res).length==0?(<div></div>):(<div>{res}</div>)
        }
        </center>
        </>
    )

}
export default StudentDelete;