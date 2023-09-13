import React, { useState, useEffect } from "react";
import axios from "axios";
//import { format } from "date-fans"

export default function AllStudents(){
    
    const [Students, setStudents] = useState([]);

    useEffect(() => {
        function getStudents() {
            axios.get("http://localhost:8070/student/").then((res) => {
                setStudents(res.data);
                //console.log(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        } 
        getStudents(); 
    }, [])

    const tableStyle = {
        borderCollapse: "collapse",
        width: "100%",
      };
    
      const thStyle = {
        border: "1px solid #dddddd",
        textAlign: "left",
        padding: "8px",
      };
    
      const tdStyle = {
        border: "1px solid #dddddd",
        textAlign: "left",
        padding: "8px",
      };
    

    return(
        <div className="container">
            <h1>All Students</h1>
            <table style={tableStyle}>
                <tr>
                    <th style={thStyle}>Index</th>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Age</th>
                    <th style={thStyle}>Gender</th>
                    <th style={thStyle}>Registered Date</th>
                    <th style={thStyle}>Action</th>
                </tr>
                {Students.map((student) => (
                        <tr key = {student.id}>
                            <td style={tdStyle}>{student.index}</td>
                            <td style={tdStyle}>{student.name}</td>
                            <td style={tdStyle}>{student.age}</td>
                            <td style={tdStyle} >{student.gender}</td>
                            <td style={tdStyle} >{student.registeredDate}</td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}


