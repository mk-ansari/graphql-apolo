import { useQuery } from "@apollo/client";
import { GET_USERS } from "../gqlOperations/queries";
import {Link} from "react-router-dom"

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) {
    return (
      <h1 className="d-flex justify-content-center align-items-center">
        Loading...
      </h1>
    );
  }
  if (error) {
    return (
      <h1 className="d-flex justify-content-center align-items-center">
        {error.message}
      </h1>
    );
  }

  return (
    <div className="container">
      <table className="table mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Profile</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((user) => {
            return (
              <tr key={user._id}>
                <th scope="row">1</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td><Link className="btn btn-primary" to="/profile">Check Profile</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
