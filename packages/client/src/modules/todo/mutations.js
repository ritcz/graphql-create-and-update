import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation ADD_TODO($input: ToDoInput!) {
    addToDo(input: $input) {
      success
      errors {
        message
      }
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DELETE_TODO($id: ID!) {
    response: deleteToDo(id: $id) {
      success
      errors {
        message
      }
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UPDATE_TODO($id: ID!, $input: ToDoInput!) {
    updateToDo(id: $id, input: $input) {
      success
      errors {
        message
      }
    }
  }
`;
