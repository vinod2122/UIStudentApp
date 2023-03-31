import {Route,Routes,NavLink} from "react-router-dom";
import Home from "./Home";
import StudentCreate from "./StudentCreate";
import StudentGet from "./StudentGet";
import StudentDelete from "./StudentDelete";
const Dashboard=()=>{
    return(
        <>
        <div className="container mt-5">
            
        <center>
        <h1 style={{color:"Green"}}>Welcome To Student Management System</h1>
          
           
        <NavLink to="/home" style={{marginRight:150}}>Home</NavLink>
        <NavLink to="/addstud" style={{marginRight:150}}>Add Student</NavLink>
        <NavLink to="/getstud" style={{marginRight:150}}>Get Student</NavLink>
        <NavLink to="/deletestud" style={{marginRight:150}}>Delete Student</NavLink>
        <br></br><br></br>
        </center>
        
        <Routes>
            <Route path="home" element={<Home />}></Route>
            <Route path="addstud" element={<StudentCreate />}></Route>
            <Route path="getstud" element={<StudentGet />}></Route>
            <Route path="deletestud" element={<StudentDelete />}></Route>
        </Routes>
        </div>
        </>
    )

}
export default Dashboard;