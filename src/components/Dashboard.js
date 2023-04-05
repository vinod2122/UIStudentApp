import {Route,Routes,NavLink} from "react-router-dom";
import Home from "./Home";
import StudentCreate from "./StudentCreate";
import StudentGet from "./StudentGet";
import StudentDelete from "./StudentDelete";
import ContactUs from "./ContactUs";
import StudentGetOne from "./StudentGetOne";
import ImageGet from "./ImageGet";
import ImageAdd from "./ImageAdd";
import StudentUpdate from "./StudentUpdate";

const Dashboard=()=>{
    return(
        <>
        
        <div className="dash" style={{ backgroundColor: "cyan", padding: "20px" }}>
            
        <center>
        <h1 style={{ color: "green", fontSize: "30px" }}>Welcome To Student Management System</h1>
          
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
               
        <NavLink to="/home" style={{ marginRight: "30px", fontSize: "20px" }}>Home</NavLink>
        <NavLink to="/addstud" style={{ marginRight: "30px", fontSize: "20px" }}>Add Student</NavLink>
        <NavLink to="/addimg" style={{ marginRight: "30px", fontSize: "20px" }}>Add Image</NavLink>
        <NavLink to="/getstud" style={{ marginRight: "30px", fontSize: "20px" }}>Get Student</NavLink>
        <NavLink to="/getimg" style={{ marginRight: "30px", fontSize: "20px" }}>Get Image</NavLink>
        <NavLink to="/update" style={{ marginRight: "30px", fontSize: "20px" }}>Update Student</NavLink>
        <NavLink to="/deletestud" style={{ marginRight: "30px", fontSize: "20px" }}>Delete Student</NavLink>
        <NavLink to="/contact" style={{ marginRight: "30px", fontSize: "20px" }}>Contact</NavLink>
        </div>
       
        </center>
        
        <Routes>
            <Route path="home" element={<Home />}></Route>
            <Route path="addstud" element={<StudentCreate />}></Route>
            <Route path="addimg" element={<ImageAdd />}></Route>
            <Route path="getstud" element={<StudentGet />}></Route>
            <Route path="getimg" element={<ImageGet />}></Route>
            <Route path="update" element={<StudentUpdate />}></Route>
            <Route path="deletestud" element={<StudentDelete />}></Route>
            <Route path="contact" element={<ContactUs />}></Route>
        </Routes>
        </div>
      
        </>
    )
}

export default Dashboard;
