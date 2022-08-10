import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MY_PROFILE } from "../gqlOperations/queries";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { loading, error, data } = useQuery(GET_MY_PROFILE);
  const navigate = useNavigate();

  if(!localStorage.getItem("token")) {
    navigate("/login")
  }
  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }
  if (error) {
    return <h1 className="text-center text-danger">{error.message}</h1>;
  }

  return (
    <div className="container mt-5">
      <div className="text-center">
        <h4>
          {data.user.firstName} {data.user.lastName}
        </h4>
        <p>Email: {data.user.email}</p>
      </div>
      <h3 className="my-3">My Quotes</h3>
      <hr />
      {data.user.quotes.length === 0 ? (
        <h3 className="text-center">No Quotes created yet.</h3>
      ) : (
        data.user.quotes.map((quotes, index) => {
          return (
            <div className="card my-3" key={index}>
              <div className="card-body">
                <blockquote className="blockquote mb  -0">
                  <p>{quotes.name}</p>
                </blockquote>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Profile;
