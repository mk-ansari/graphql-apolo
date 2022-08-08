import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users:[User]
    user(_id:ID!):User
    quotes:[Quote]
    quote(by:ID!):[Quote]
  }
  type User{
    _id:ID!
    firstName:String
    lastName:String
    email:String
    password:String
    quotes: [Quote]
  }
  type Quote{
    name: String
    by: ID
  }
  type Mutation{
    signUp(userNew:UserInput!):User
    createQuote(name:String!):String
  }
  input UserInput{
    firstName:String!
    lastName:String!
    email:String!
    password:String!
  }
`;

export default typeDefs;