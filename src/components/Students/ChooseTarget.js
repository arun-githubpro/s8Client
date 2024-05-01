import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";

const ChooseTarget = () => {
  const [title, setTitle] = useState("Choose Application");
  const [appChosen, setAppChosen] = useState();
  const titleRef = useRef("Choose Application");
  const appRef = useRef("");
  const oauthTokenRef = useRef("");
  const organizationIdRef = useRef("");
  const applicationChooseHandler = (e) => {
    console.log("clicked", e.target.name);
    setTitle(titleRef.current.name);
  };
  const chooseAppHandler = () => {
    setAppChosen(appRef.current.value);
    console.log(appChosen);
  };
  const onApplicationChooseClicked = () => {};
  return (
    <>
      <input
        type="text"
        className="input-group"
        placeholder="oauth Token"
        style={{
          margin: "8px 0px",
          display: `${appChosen == "1" ? "" : "none"}`,
        }}
        ref={oauthTokenRef}
      />
      <input
        type="text"
        className="input-group"
        placeholder="organizationId"
        style={{
          margin: "8px 0px",
          display: `${appChosen == "1" ? "" : "none"}`,
        }}
        ref={organizationIdRef}
      />
      <Form.Select
        aria-label="Default select example"
        style={{ margin: "8px 0px" }}
        onClick={chooseAppHandler}
        ref={appRef}
      >
        <option value="0">Open this select menu</option>
        <option value="1">ZohoBooks</option>
      </Form.Select>
      <button className="btn btn-primary" style={{ margin: "8px 0px" }}>
        Invoke
      </button>
    </>
  );
};

export default ChooseTarget;
