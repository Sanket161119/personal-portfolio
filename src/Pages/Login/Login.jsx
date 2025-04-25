/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Button, Card, message } from "antd";
import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Shared/Components/Loader/Loader";
import httpLayer from "../../Services/Httplayer";
import { USER_CRED } from "../../Shared/Utils/Config";
import { useSelector } from "react-redux";
import Notification from "../../Shared/Components/Notification/Notification";

const Login = () => {
  const isLoading = useSelector((state) => state.services.loader);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }, getValues
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();
  const { openNotification, contextHolder } = Notification();

  const onSubmit = async (data) => {
    setLoginError(""); // Reset login error
    setLoading(true);

    try {
      const response = await httpLayer.postRequest(USER_CRED, data);
      if (response.status === "success") {
        openNotification(
          response.status,
          response.message,
          "Welcome to home page"
        );
        setTimeout(() => {
          navigate("/personal-portfolio/home");
        }, 500);
      } else {
        openNotification(
          response.status,
          response.message,
          "Invalid credentials. Please try again."
        );
        setLoginError(response.message);
      }
    } catch (error) {
      openNotification("Login Failed!");
      setLoginError("An error occurred during login. Please try again.");
    } finally {
      setLoading(false);
      reset();
    }
  };
  function handleSignUp() {
    setIsSignUp(!isSignUp);
    reset();
  }
  const onSignUpSubmit = async (data) => {
    console.log("Sign Up Data:", data);
  };
  return (
    <div className="login-container">
      {contextHolder}
      {loading || isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <Card title={isSignUp ? "Sign Up" : "Login"} className="login-card">
          <form onSubmit={handleSubmit(isSignUp ? onSignUpSubmit : onSubmit)}>
            <div className="form-item">
              <label>Username</label>
              <input
                type="text"
                {...register("username", { required: "Username is required" })}
                className={errors.username ? "error" : ""}
              />
              {errors.username && (
                <p className="error-message">{errors.username.message}</p>
              )}
            </div>

            <div className="form-item">
              <label>Password</label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                className={errors.password ? "error" : ""}
              />
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}
            </div>
            {loginError && <p className="error-message">{loginError}</p>}

            {isSignUp ? (<div className="form-item">
              <label>Confirm Password</label>
              <input
                type="password"
                {...register("confirmpassword", { required: "Confirm password is required",
                  validate : (value)=>{
                    const {password} = getValues();
                    return value === password || "Passwords do not match"
                  }}
                )}
                className={errors.confirmpassword ? "error" : ""}
              />
              {errors.confirmpassword && (
                <p className="error-message">{errors.confirmpassword.message}</p>
              )}
            </div>):("")}
            {/* {loginError && <p className="error-message">{loginError}</p>} */}

            <div className="form-item">
              <Button type="primary" htmlType="submit">
                {isSignUp ? "Sign Up" : "Login"}
              </Button>
            </div>
          </form>
          <span>
            {isSignUp
              ? "Already have an account?"
              : "Don't you have an account?"}
            <a onClick={handleSignUp}>{isSignUp ? "Login" : "Sign Up"}</a>
          </span>
        </Card>
      )}
    </div>
  );
};

export default Login;
