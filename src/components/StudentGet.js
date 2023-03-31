import {useEffect,useRef,useState} from "react";
import axios from "axios";
const StudentGet=()=>{
    //const sid=useRef("");
    const [arr,setArr]=useState([]);
   
    useEffect(()=>{
        axios.get("http://localhost:1996/vk/getAll").then((posRes)=>{
            const {data}=posRes;
            setArr(data);
            console.log(posRes);
        }, (errRes)=>{
            console.log(errRes);   
        })
    },[]);
    
    return(
        <>
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
                        </tr>
                        {
                            arr.map((ele,i)=>{
                                return(
                                    <tr key={i}>
                                        <td>{ele.stdId}</td>
                                        <td>{ele.stdName}</td>
                                        <td>{ele.course}</td>
                                        <td>{ele.fees}</td>
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
export default StudentGet;
