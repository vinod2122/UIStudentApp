import { useRef, useState } from "react";
import axios from "axios";
const StudentCreate=()=>{
    const sid=useRef(" ");
    const sname=useRef(" ");
    const scourse=useRef(" ");
    const sfees=useRef(" ");
    const [res,setRes]=useState({});
    const my_func=()=>{
        axios.post(`http://localhost:1996/vk/save`,{'stdId':sid.current.value,'stdName':sname.current.value,'course':scourse.current.value,'fees':sfees.current.value}).then((posRes) => {
            const {data}=posRes;
            setRes(data);
        },(errRes) => {
            console.log(errRes);
        })
    }
    return(
        <>
        <center>
        <h1 style={{color:"Green"}}>Student Registration Form</h1>
        Enter Student Id: <input type={"text"} ref={sid}></input>
        <br></br><br></br>
        Enter Student Name: <input type={"text"} ref={sname}></input>
        <br></br><br></br>
        Enter Student Course: <input type={"text"} ref={scourse}></input>
        <br></br><br></br>
        Enter Course Fees: <input type={"text"} ref={sfees}></input>
        <br></br><br></br>
        <button onClick={my_func}>Add Student</button>
        {
            Object.keys(res).length==0?(<div></div>):(<div>{JSON.stringify(res)}</div>)
        }
        </center>
        </>
    )

}
export default StudentCreate;