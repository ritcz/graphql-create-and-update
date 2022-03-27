import { useQuery } from "@apollo/client";
import React from "react";
import { GET_TODOS } from "./queries";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loading } from "../../components/Loading";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Icon,
} from "@mui/material";
import { ToDoCard } from "./ToDoCard";
export const ToDoList = () => {
  const { data, error, loading } = useQuery(GET_TODOS);
  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <Grid container spacing={2}>
      {data.todos.map((t, i) => {
        return (
          <Grid item key={i} xs={12} md={3}>
            <ToDoCard {...t} />
          </Grid>
        );
      })}
    </Grid>
  );
};
