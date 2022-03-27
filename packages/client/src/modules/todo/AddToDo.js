import React from "react";
import { ToDoForm } from "./ToDoForm";

const initialValues = {
  description: "",
  complete: false,
  dueDate: null,
};

export const AddToDo = ({ onClose }) => (
  <ToDoForm onClose={onClose} initialValues={initialValues} />
);
