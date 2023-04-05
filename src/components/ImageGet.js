import {useEffect,useRef,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const ImageGet=()=>{
    const [arr,setArr]=useState([]);
    const navigate=useNavigate();
   
    useEffect(()=>{
        axios.get("http://localhost:1996/vk/getAll").then((posRes)=>{
            const {data}=posRes;
            setArr(data);
            console.log(posRes);
        }, (errRes)=>{
            console.log(errRes);   
        })
    },[]);
    const update=()=>{
        navigate("/update");

    }
    return(
        <>
        <center>
        <h1 style={{color:"tomato"}}>Student Details</h1>
        </center>
        {
            arr.length==0?(<div className=" fa fa-spinner fa-spin" style={{fontSize:60}}> </div>):(
                
                <table border={1}
                       align={"center"}
                       cellPadding={10}
                       cellSpacing={10}>
                        
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Fees</th>
                            <th>Profile</th>
                            <th>Update</th>
                        </tr>
                        {
                            arr.map((ele,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{ele.stdId}</td>
                                        <td>{ele.stdName}</td>
                                        <td>{ele.course}</td>
                                        <td>{ele.fees}</td>
                                        <td><img src={`data:image/jpeg;base64,${ele.stdImage}`}></img></td>
                                        <td>{<a onClick={update}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>}</td>
                                    </tr>
                                )
                            })
                        }

                </table>
            )
        }
        </>
    )

    
    
}
export default ImageGet;
