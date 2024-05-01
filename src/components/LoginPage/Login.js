import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated, notifyLoginSuccess }) => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
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

  const submitHandler = async (e) => {
    try {
      const response = await axios.post("http://localhost:8008/users/login", {
        email: emailRef.current.value,
        password: passwordRef.current.value,
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
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

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
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        ref={passwordRef}
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                    </div>

                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={submitHandler}
                    >
                      Login
                    </button>

                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-white">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-twitter fa-lg mx-4 px-2"></i>
                      </a>
                      <a href="#!" className="text-white">
                        <i className="fab fa-google fa-lg"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0">
                      Don't have an account?{" "}
                      <a href="#!" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
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

export default Login;
