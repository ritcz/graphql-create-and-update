import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query GET_TODOS {
    todos {
      id
      description
      complete
      dueDate
      createdAt
      updatedAt
    }
  }
`;