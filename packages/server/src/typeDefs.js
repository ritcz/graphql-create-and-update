import { gql } from "apollo-server-express";

export default gql`
  scalar DateTime
  type Query {
    todos: [ToDo]
    todo(id: ID!): ToDo
    users: [User]
    user(id: ID!): User
  }

  type Error {
    message: String
    path: String
  }

  type BaseResponse {
    success: String
    errors: [Error]
  }

  type Mutation {
    addToDo(input: ToDoInput!): BaseResponse
    updateToDo(id: ID!, input: ToDoInput!): BaseResponse
    deleteToDo(id: ID!): BaseResponse
    addUser(input: CreateUserInput!): BaseResponse
    updateUser(id: ID!, input: UpdateUserInput!): BaseResponse
    deleteUser(id: ID!): BaseResponse
  }

  type ToDo {
    id: ID!
    description: String!
    complete: Boolean!
    dueDate: DateTime
    updatedAt: DateTime!
    createdAt: DateTime!
  }

  input ToDoInput {
    description: String
    complete: Boolean
    dueDate: DateTime
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    telephone: String
    email: String!
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    telephone: String
    email: String!
    street: String!
    city: String!
    state: String!
    zip: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    telephone: String
    email: String
    street: String
    city: String
    state: String
    zip: String
  }
`;
