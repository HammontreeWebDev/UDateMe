import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($email: String!, $password: String!, $username: String!) {
  addUser(email: $email, password: $password, username: $username) {
    user {
      email
      username
      _id
    }
  }
}
`;

export const LOGIN_USER = gql`
 mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      email
      _id
      username
    }
  }
}
`;