import axios from "axios";
import React, { useEffect, useRef } from "react";

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AddStudent = ({ setStds }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    console.log(dobRef.current.value);
    //@todo api call
    setShow(false);
  };

  const handleStudentCreation = async () => {
    let response = await axios.post("http://localhost:8080/students", {
      rollNo: rollNoRef.current.value,
      email: emailRef.current.value,
      firstname: firstNameRef.current.value,
      lastname: lastNameRef.current.value,
      dateOfBirth: dobRef.current.value,
      address: addressRef.current.value,
      department: departmentRef.current.value,
      parentName: parentNameRef.current.value,
      bloodGroupRef: bloodGroupRef.current.value,
      isActive: true,
    });
    response = response.data;
    setStds((prevStds) => {
      return [...prevStds, response];
    });

    handleClose();
  };

  const handleShow = () => setShow(true);

  //   refs
  const rollNoRef = useRef("");
  const emailRef = useRef("");
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const dobRef = useRef("");
  const addressRef = useRef("");
  const departmentRef = useRef("");
  const parentNameRef = useRef("");
  const bloodGroupRef = useRef("");

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new Student
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-dialog-scrollable">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>RollNo</Form.Label>
              <Form.Control
                type="text"
                placeholder="20XDept123"
                autoFocus
                ref={rollNoRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                ref={emailRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>FirstName</Form.Label>
              <Form.Control
                type="text"
                placeholder="FirstName"
                ref={firstNameRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>LastName</Form.Label>
              <Form.Control
                type="text"
                placeholder="LastName"
                ref={lastNameRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>DateOfBirth</Form.Label>
              <Form.Control type="Date" placeholder="Date" ref={dobRef} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Address"
                ref={addressRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Department</Form.Label>
              <Form.Control
                type="text"
                placeholder="Department"
                ref={departmentRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ParentName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Parent Name"
                ref={parentNameRef}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>BloodGroup</Form.Label>
              <Form.Control
                type="text"
                placeholder="BloodGroup"
                ref={bloodGroupRef}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleStudentCreation}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddStudent;
