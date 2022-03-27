import React from "react";
import { ToDoForm } from "./ToDoForm";
import { DateTime } from "luxon";

export const EditToDo = ({ onClose, todo }) => {
  const { id, ...others } = todo;
  const dueDate = others.dueDate
    ? DateTime.fromISO(others.dueDate).toFormat("yyyy-MM-dd")
    : "";
  const initialValues = {
    ...others,
    dueDate,
  };
  return <ToDoForm onClose={onClose} id={id} initialValues={initialValues} />;
};
