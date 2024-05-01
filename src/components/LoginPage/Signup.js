import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Signup = ({ setIsAuthenticated, notifyLoginSuccess, setIsSignup }) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const navigate = useNavigate();

  const notifyLoginFailed = () =>
    toast.error("LoginFailed", {
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const switchToLogin = () => {
    setIsSignup(false);
  };

  const submitHandler = async (e) => {
    try {
      if (passwordRef.current.value != confirmPasswordRef.current.value) {
        toast.error("Password and Confirm Password must be same");
        return "password and confirm password must be same";
      }
      const response = await axios.post("http://localhost:8008/users/signup", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        name: nameRef.current.value,
      });
      const currentDatePlusOneHour = new Date();
      currentDatePlusOneHour.setHours(currentDatePlusOneHour.getHours() + 1);
      Cookies.set("email", `${response.data.email}`, {
        expires: currentDatePlusOneHour,
      });
      Cookies.set("password", `${response.data.password}`, {
        expires: currentDatePlusOneHour,
      });
      setIsAuthenticated(true);
      navigate("/dashboard");
      notifyLoginSuccess();
      console.log("navigated");
    } catch (error) {
      console.log(error);
      notifyLoginFailed();
    }
  };
  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your Signup details!
                    </p>

                    <div
                      data-mdb-input-init
                      className="form-outline form-white mb-4"
                    >
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        ref={nameRef}
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Name
                      </label>
                    </div>

                    <div
                      data-mdb-input-init
                      className="form-outline form-white mb-4"
                    >
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        ref={emailRef}
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                    </div>

                    <div
                      data-mdb-input-init
                      className="form-outline form-white mb-4"
                    >
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        ref={passwordRef}
                      />
                      <label className="form-label">Password</label>
                    </div>

                    <div
                      data-mdb-input-init
                      className="form-outline form-white mb-4"
                    >
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        ref={confirmPasswordRef}
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Confirm Password
                      </label>
                    </div>

                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={submitHandler}
                    >
                      Signup
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Back to...?{" "}
                      <span
                        href="#!"
                        className="text-white-50 fw-bold"
                        onClick={switchToLogin}
                        style={{
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Login
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
