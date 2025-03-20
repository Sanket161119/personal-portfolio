/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Button, Card } from "antd";
import "./Login.scss";
// import { useDispatch } from "react-redux";
// import { setUser } from "../../reducers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
//   const dispatch = useDispatch();
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate()
  const predefinedCred =  {
    userName: "Sanket",
    password: "1202",
  };

  const onSubmit = (data) => {
    if(data.userName === predefinedCred.userName && data.password === predefinedCred.password){
        // dispatch(setUser(data));
        localStorage.setItem("user name", data.userName);
        localStorage.setItem("password", data.password);
        console.log("Login successful!")
        navigate('/personal-portfolio/home')
        setLoginError('')
        reset();
    }
    else{
        setLoginError("Invalid credential")
    }
  };

  return (
    <div className="login-container">
      <Card title="Login" className="login-card">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item">
            <label>Username</label>
            <input
              type="text"
              {...register("userName", { required: "Username is required" })}
              className={errors.userName ? "error" : ""}
            />
            {errors.userName && (
              <p className="error-message">{errors.userName.message}</p>
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
          {loginError && <p className='error-message'>{loginError}</p>}
          <div className="form-item">
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
