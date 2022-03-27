import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  TextField,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { ADD_TODO, UPDATE_TODO } from "./mutations";
import { ErrorMessage } from "../../components/ErrorMessage";
import { DateTime } from "luxon";
import * as yup from "yup";

const validationSchema = yup.object({
  description: yup.string().label("Description").required().min("1"),
});

export const ToDoForm = ({ onClose, initialValues, id }) => {
  const isNew = id === undefined;
  const mutation = isNew ? ADD_TODO : UPDATE_TODO;

  const [saveToDo, result] = useMutation(mutation, {
    refetchQueries: ["GET_TODOS"],
    onCompleted: () => onClose && onClose(),
  });

  const {
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const dueDate = values.dueDate
        ? DateTime.fromISO(values.dueDate).toJSDate()
        : undefined;
      saveToDo({
        variables: {
          input: {
            ...values,
            dueDate,
          },
          id,
        },
      });
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Grid container spacing={2} direction="column">
        <Grid item>
          <TextField
            name="description"
            label="Description"
            type="text"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            error={!!errors.description}
            helperText={errors.description}
          />
        </Grid>
        <Grid item>
          <TextField
            name="dueDate"
            label="Due Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={values.dueDate || ""}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item>
          <FormGroup>
            <FormControlLabel
              label="Complete"
              control={
                <Switch
                  name="complete"
                  checked={values.complete}
                  onChange={handleChange}
                />
              }
            />
          </FormGroup>
        </Grid>
        {result.error && (
          <Grid item>
            <ErrorMessage message={result.error.message} />
            {Array.isArray(result.error.networkError?.result?.errors) &&
              result.error.networkError.result.errors.map((networkError, i) => (
                <ErrorMessage message={networkError.message} key={i} />
              ))}
          </Grid>
        )}
        <Grid item>
          <Button type="submit" disabled={isSubmitting}>
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
