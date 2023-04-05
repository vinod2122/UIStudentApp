import React, { useState, useRef } from 'react';
import axios from 'axios';

function ImageAdd() {
  const [stdId, setStdId] = useState('');
  const [stdName, setStdName] = useState('');
  const [course, setCourse] = useState('');
  const [fees, setFees] = useState('');
  const [file, setFile] = useState('');
  const [message, setMessage] = useState('');

  const fileInputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', fileInputRef.current.files[0]);
    formData.append('stdId', stdId);
    formData.append('stdName', stdName);
    formData.append('course', course);
    formData.append('fees', fees);

    try {
      const response = await axios.post('http://localhost:1996/vk/save', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data);
    } catch (error) {
      console.error(error);
      setMessage('Error uploading file');
    }
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
    <div>
      <center>
      <h1>Upload Student Data</h1>
      <form onSubmit={handleSubmit} style={{maxWidth: "300px"}} backgroundColor={"red"}>
        <div>
          <label htmlFor="stdId" style={labelStyle}>Student ID:</label>
          <input type="text" id="stdId" style={inputStyle} name="stdId" value={stdId} onChange={(e) => setStdId(e.target.value)} />
        </div>
        <div>
          <label htmlFor="stdName" style={labelStyle}>Student Name:</label>
          <input type="text" id="stdName" style={inputStyle} name="stdName" value={stdName} onChange={(e) => setStdName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="course" style={labelStyle}>Course:</label>
          <input type="text" id="course" style={inputStyle} name="course" value={course} onChange={(e) => setCourse(e.target.value)} />
        </div>
        <div>
          <label htmlFor="fees" style={labelStyle}>Fees:</label>
          <input type="text" id="fees" style={inputStyle} name="fees" value={fees} onChange={(e) => setFees(e.target.value)} />
        </div>
        <div>
          <label htmlFor="file" style={labelStyle}>Select file:</label>
          <input type="file" id="file" style={inputStyle} name="file" ref={fileInputRef} onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <button type="submit" style={buttonStyle}>Add Student</button>
      </form>
      {message && <p>{message}</p>}
      </center>
    </div>
  );
}

export default ImageAdd;
