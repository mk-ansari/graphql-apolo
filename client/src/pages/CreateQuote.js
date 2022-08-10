import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_QUOTE } from "../gqlOperations/mutations";

const CreateQuote = () => {
  const [quote, setQuote] = useState("");
  const [createQuote, { loading, data, error }] = useMutation(CREATE_QUOTE, {
    refetchQueries:[
      'getAllQuotes',
      'getMyProfile',
    ]
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuote({
      variables: {
        name: quote,
      },
    });
    setQuote("")
  };


  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }
 
  if (data) {
    console.log(data);
  }



  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center mt-5">
          <form className="col-6" onSubmit={handleSubmit}>
            <h1 className="text-center my-3">Create Quote</h1>
            {error && <div className="text-danger">{error.message}</div>}
            {data && <div className="text-success">{data.quote}</div>}
            <div className="my-3 ">
              <input
                type="text"
                className="form-control"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                placeholder="write your quote here"
              />
            </div>
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateQuote;
