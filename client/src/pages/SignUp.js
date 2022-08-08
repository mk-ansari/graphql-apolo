import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../gqlOperations/mutations";
import { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [signUp, { data, error }] = useMutation(CREATE_USER);

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
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center mt-5">
          {error && <div className="red card-panel">{error.message}</div>}

          {data && data.user && (
            <div className="green card-panel">
              {data.user.firstName} is SignedUp. You can login now!
            </div>
          )}
          <form className="col-6" onSubmit={handleSubmit}>
            <h1 className="text-center">Sign Up</h1>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="fname"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lname"
                onChange={handleChange}
                className="form-control"
              />
            </div>
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

export default SignUp;
