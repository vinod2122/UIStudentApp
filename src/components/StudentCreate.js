import { useRef, useState } from "react";
import axios from "axios";

const StudentCreate = () => {
  const sid = useRef("");
  const sname = useRef("");
  const scourse = useRef("");
  const sfees = useRef("");
  const [res, setRes] = useState({});

  const my_func = () => {
    axios
      .post(`http://localhost:1996/vk/save`, {
        stdId: sid.current.value,
        stdName: sname.current.value,
        course: scourse.current.value,
        fees: sfees.current.value,
      })
      .then(
        (posRes) => {
          const { data } = posRes;
          setRes(data);
        },
        (errRes) => {
          console.log(errRes);
        }
      );
  };

  const labelStyle = {
    display: "block",
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  };

  const inputStyle = {
    padding: "0.5rem",
    fontSize: "1.2rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
    maxWidth: "400px",

  };

  const buttonStyle = {
    backgroundColor: "#008CBA",
    color: "white",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.2rem",
    cursor: "pointer",
  };

  return (
    <center>
  <h1 style={{color:"orange"}}>Student Registration Form</h1>
  <form style={{maxWidth: "300px"}} backgroundColor={"red"}>
    <label style={labelStyle}>
      Enter Student Id:
      <input type="number" ref={sid} style={inputStyle} required minLength={3} maxLength={5} pattern="\d+" title="Please enter a valid student ID (3-5 digits)." />
    </label>
    <br />
    <br />
    <label style={labelStyle}>
      Enter Student Name:
      <input type="text" ref={sname} style={inputStyle} required minLength={3} maxLength={20} pattern="[a-zA-Z\s]+" title="Please enter a valid name (3-20 characters, letters and spaces only)." />
    </label>
    <br />
    <br />
    <label style={labelStyle}>
      Enter Course:
      <input type="text" ref={scourse} style={inputStyle} required minLength={3} maxLength={20} pattern="[a-zA-Z\s]+" title="Please enter a valid course name (3-20 characters, letters and spaces only)." />
    </label>
    <br />
    <br />
    <label style={labelStyle}>
      Enter Course Fees:
      <input type="number" ref={sfees} style={inputStyle} required min={5000} max={100000} title="Please enter a valid fees amount (between 5000 and 100000)." />
    </label>
    <br />
    <br />
    <button onClick={my_func} style={buttonStyle}>Add Student</button>
  </form>
</center>
  );
};
export default StudentCreate;
