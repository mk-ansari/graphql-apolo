import { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGNIN_USER } from "../gqlOperations/mutations";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
    onCompleted(data) {
      localStorage.setItem("token", data.user.token);
      navigate("/");
    },
  });

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn({
      variables: {
        userSignin: formData,
      },
    });
  };
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center mt-5">
          <form className="col-6" onSubmit={handleSubmit}>
            {error && <div className="text-danger">{error.message}</div>}
            <h1 className="text-center">Login</h1>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
