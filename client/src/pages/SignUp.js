import { useMutation } from "@apollo/client";
import { SIGNUP_USER } from "../gqlOperations/mutations";
import { useState } from "react";

const formInitialValue = {
  firstName:"",
  lastName:"",
  email:"",
  password:"",
}

const SignUp = () => {
  const [formData, setFormData] = useState(formInitialValue);
  const [signUp, { data, error }] = useMutation(SIGNUP_USER);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUp({
      variables: {
        userNew: formData,
      },
    });
    setFormData(formInitialValue)
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center mt-5">
          <form className="col-6" onSubmit={handleSubmit}>
          {error && <div className="text-danger">{error.message}</div>}
            <h1 className="text-center">Sign Up</h1>
          {data && data.user && (
            <div className="text-success">
              {data.user.firstName} is SignedUp. You can login now!
            </div>
          )}
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
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

export default SignUp;
