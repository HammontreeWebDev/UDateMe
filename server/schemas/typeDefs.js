const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  scalar Date

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(userId: ID!): User
    userByName(username: String!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
  
`;

module.exports = typeDefs;
