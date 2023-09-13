import React, { useState } from "react";
import axios from "axios";

export default function AddStudent() {
  const [index, setIndex] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  function sendData(e) {
    e.preventDefault();
    //alert("Insert");

    const newStudent = {
      index,
      name,
      age,
      gender
    };

    //console.log(newStudent);

    axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
      alert("Student Added")
      setIndex("");
      setName("");
      setAge("");
      setGender("");
    }).catch((err)=>{
      alert(err)
    })


  }

  return (
    <div className="container">
      <form onSubmit={sendData}>
      <div className="form-group">
          <label htmlFor="index"><b>Index No</b></label>
          <input
            type="String"
            className="form-control"
            id="index"
            placeholder="Enter Index number"
            onChange={(e) => {
              setIndex(e.target.value);
            }}
            value={index}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name"><b>Student Name</b></label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter Student Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>

        <div className="form-group">
          <label htmlFor="age"><b>Student Age</b></label>
          <input
            type="text"
            className="form-control"
            id="age"
            placeholder="Enter Student age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
            value={age}
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender" ><b>Gender</b></label>
          <div>
          <input
            type="radio"
            //className="form-control"
            id="male"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={() => setGender("Male")}
          />
          <label htmlFor="male">Male </label>
          </div>

          <div>
          <input
            type="radio"
            //className="form-control"
            id="female"
              name="gender"
              value="feMale"
              checked={gender === "Female"}
              onChange={() => setGender("Female")}
          />
          <label htmlFor="female">Female </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
