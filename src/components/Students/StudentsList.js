import React, { useEffect, useState } from "react";
import SingleStudentList from "./SingleStudentList";
import AddStudent from "./AddStudent";
import ChooseTarget from "./ChooseTarget";
import axios from "axios";

const StudentsList = () => {
  const [stds, setStds] = useState([]);
  useEffect(() => {
    const asyncMethod = async () => {
      try {
        let response = await axios.get("http://localhost:8080/students");
        response = response.data;
        setStds(response);
        console.log(response);
      } catch (error) {
        console.log("Error occured", error);
      }
    };
    asyncMethod();
    // return () => {};
  }, []);

  return (
    <div className="mainContainer d-flex justify-content-between align-items-center">
      <div className="studentsContainer " style={{ minWidth: "60vw" }}>
        <div className="d-flex justify-content-between align-items-center">
          <h1>StudentContainer</h1>
          <div>
            <AddStudent setStds={setStds} />
          </div>
        </div>
        <ul
          className="studentListContainer overflow-auto list-group"
          style={{ height: "75vh", scrollbarWidth: "thin" }}
        >
          {stds.map((student, index) => {
            return <SingleStudentList key={index} student={student} />;
          })}
        </ul>
      </div>
      <div style={{ minWidth: "20vw" }}>value</div>
      <div style={{ minWidth: "20vw" }}>
        <ChooseTarget />
      </div>
    </div>
  );
};

export default StudentsList;
