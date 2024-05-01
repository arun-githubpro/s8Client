import React from "react";
import SingleStudentList from "./SingleStudentList";
import AddStudent from "./AddStudent";
import ChooseTarget from "./ChooseTarget";

const StudentsList = () => {
  const stds = [
    {
      rollNo: "1",
      email: "a1@gmeil.com",
      firstname: "a",
      lastname: "1",
      dateOfBirth: "12-03-2004",
      address: "address lines",
      department: "cse",
      parentName: "par1",
      bloodGroup: "o-ve",
      isActive: true,
      createdTime: "2024-03-22T18:46:03.285Z",
    },
    {
      rollNo: "1",
      email: "a1@gmeil.com",
      firstname: "a",
      lastname: "1",
      dateOfBirth: "12-03-2004",
      address: "address lines",
      department: "cse",
      parentName: "par1",
      bloodGroup: "o-ve",
      isActive: true,
      createdTime: "2024-03-22T18:46:03.285Z",
    },
    {
      rollNo: "1",
      email: "a1@gmeil.com",
      firstname: "a",
      lastname: "1",
      dateOfBirth: "12-03-2004",
      address: "address lines",
      department: "cse",
      parentName: "par1",
      bloodGroup: "o-ve",
      isActive: true,
      createdTime: "2024-03-22T18:46:03.285Z",
    },
    {
      rollNo: "1",
      email: "a1@gmeil.com",
      firstname: "a",
      lastname: "1",
      dateOfBirth: "12-03-2004",
      address: "address lines",
      department: "cse",
      parentName: "par1",
      bloodGroup: "o-ve",
      isActive: true,
      createdTime: "2024-03-22T18:46:03.285Z",
    },
    {
      rollNo: "1",
      email: "a1@gmeil.com",
      firstname: "a",
      lastname: "1",
      dateOfBirth: "12-03-2004",
      address: "address lines",
      department: "cse",
      parentName: "par1",
      bloodGroup: "o-ve",
      isActive: true,
      createdTime: "2024-03-22T18:46:03.285Z",
    },
    {
      rollNo: "1",
      email: "a1@gmeil.com",
      firstname: "a",
      lastname: "1",
      dateOfBirth: "12-03-2004",
      address: "address lines",
      department: "cse",
      parentName: "par1",
      bloodGroup: "o-ve",
      isActive: true,
      createdTime: "2024-03-22T18:46:03.285Z",
    },
    {
      rollNo: "1",
      email: "a1@gmeil.com",
      firstname: "a",
      lastname: "1",
      dateOfBirth: "12-03-2004",
      address: "address lines",
      department: "cse",
      parentName: "par1",
      bloodGroup: "o-ve",
      isActive: true,
      createdTime: "2024-03-22T18:46:03.285Z",
    },
    {
      rollNo: "1",
      email: "a1@gmeil.com",
      firstname: "a",
      lastname: "1",
      dateOfBirth: "12-03-2004",
      address: "address lines",
      department: "cse",
      parentName: "par1",
      bloodGroup: "o-ve",
      isActive: true,
      createdTime: "2024-03-22T18:46:03.285Z",
    },
    {
      rollNo: "1",
      email: "a1@gmeil.com",
      firstname: "atwgsdfgsf",
      lastname: "1",
      dateOfBirth: "12-03-2004",
      address: "address lines",
      department: "cse",
      parentName: "par1",
      bloodGroup: "o-ve",
      isActive: true,
      createdTime: "2024-03-22T18:46:03.285Z",
    },
    {
      rollNo: "1",
      email: "a1@gmeil.com",
      firstname: "a",
      lastname: "1",
      dateOfBirth: "12-03-2004",
      address: "address lines",
      department: "cse",
      parentName: "par1",
      bloodGroup: "o-ve",
      isActive: true,
      createdTime: "2024-03-22T18:46:03.285Z",
    },
  ];
  return (
    <div className="mainContainer d-flex justify-content-between align-items-center">
      <div className="studentsContainer " style={{ minWidth: "60vw" }}>
        <div className="d-flex justify-content-between align-items-center">
          <h1>StudentContainer</h1>
          <div>
            <AddStudent />
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
