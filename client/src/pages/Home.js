import { useQuery } from "@apollo/client";
import { GET_ALL_QUOTES } from "../gqlOperations/queries";
import { Link } from "react-router-dom";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }
  if (error) {
    return <h1 className="text-center">{error.message}</h1>;
  }
  if (data) {
    console.log(data);
  }

  return (
    <div className="container mt-5">
      {data.quotes.map((quote, index) => {
        return (
          <div className="card my-3" key={index}>
            <Link
              to={`/profile/${quote.by._id}`}
              style={{ textDecoration: "none", color: "inherit" }}  
            >
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>{quote.name}</p>
                  <footer className="blockquote-footer">
                    <cite title="Source Title">{quote.by.firstName}</cite>
                  </footer>
                </blockquote>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
