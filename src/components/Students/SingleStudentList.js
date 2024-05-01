import React, { useEffect, useState } from "react";

const SingleStudentList = ({ student }) => {
  const [isActive, setIsActive] = useState(false);
  const activateHandler = (e) => {
    console.log("isACtive : ", isActive);
    setIsActive(!isActive);
  };
  return (
    <div
      className="d-flex justify-content-around align-items-center list-group-item"
      style={{
        width: "100%",
        border: "1px solid black",
        margin: "5px 0px",
        borderRadius: "8px",
      }}
    >
      <div id="rollNo">Roll NO : {student.rollNo}</div>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-between">
          <div id="firstName">FirstName : {student.firstname}</div>
          <div id="department">Dept : {student.department}</div>
        </div>
        <div id="email">email : {student.email}</div>
      </div>
      <div id="isActive">
        {student.isActive}
        <button
          className={`btn ${isActive ? "btn-success" : "btn-danger"}`}
          onClick={activateHandler}
          style={{ width: "80px" }}
        >
          {isActive ? "Active" : "InActive"}
        </button>
      </div>
    </div>
  );
};

export default SingleStudentList;
