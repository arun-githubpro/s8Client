import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/LoginPage/Login";
import StudentsList from "./components/Students/StudentsList";
import {
  BrowserRouter,
  Routes,
  Route,
  redirect,
  Navigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const notifyLoginSuccess = () => {
    return toast.success("Login Success");
  };
  useEffect(() => {
    const email = Cookies.get("email");
    const password = Cookies.get("password");
    if (email && password) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  return (
    <div className="App">
      <Header
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/dashboard"
            element={isAuthenticated ? <StudentsList /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/dashboard" />
              ) : (
                <Login
                  setIsAuthenticated={setIsAuthenticated}
                  notifyLoginSuccess={notifyLoginSuccess}
                />
              )
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
}

export default App;
