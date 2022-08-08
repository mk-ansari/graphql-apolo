import { gql } from "@apollo/client";
export const CREATE_USER = gql`
  mutation createUser($userNew: UserInput!) {
    user: signUp(userNew: $userNew) {
        _id
        firstName
        lastName
        email
    }
  }
`;