import { useQuery, useApolloClient, gql } from "@apollo/client";
import { GET_USER_BY_ID } from "../gqlOperations/queries";
import { useParams } from "react-router-dom";

const OtherUserProfile = () => {
  const client = useApolloClient();
  const GET_USER_BY_ID = gql`
    query getUserById($userid: ID!) {
      user(_id: $userid) {
        _id
        firstName
        lastName
        email
        quotes {
          name
        }
      }
    }
  `;
  const { userid } = useParams();
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { userid },
  });

  const datas = client.readQuery({ GET_USER_BY_ID });
  console.log(datas);

  if (data) {
    console.log("sdasd", data);
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

export default OtherUserProfile;
