import {useRef,useState} from "react";
import axios from "axios";
const StudentGetOne=()=>{
    const sid=useRef();
    const [arr,setArr]=useState([]);
    const fetch=()=>{
        axios.get(`http://localhost:1996/vk/get/${sid.current.value}`).then((posRes)=>{
            const {data}=posRes;
            setArr(data);
            console.log(posRes);
        },(errRes)=>{
            console.log(errRes);
        })
    }
    return(
        <>
        <center>
        <input type={"number"} ref={sid}></input>
        <button onClick={fetch}>Get Student</button>
        <hr></hr>
        
        </center>
        </> 
    ) 
}
export default StudentGetOne;