import { useMutation } from "@apollo/client";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import { EditToDo } from "./EditToDo";
import { DELETE_TODO } from "./mutations";

export const ToDoCard = ({ dueDate, description, complete, id }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [editing, setEditing] = useState(false);

  const [deleteToDo, deleteResult] = useMutation(DELETE_TODO, {
    variables: { id },
    refetchQueries: ["GET_TODOS"],
  });

  const handleDelete = async () => {
    await deleteToDo();
    setConfirmDelete(false);
  };
  const loading = deleteResult?.loading;
  const _dueDate =
    dueDate !== null ? DateTime.fromISO(dueDate).toLocaleString() : "";

  return (
    <>
      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="caption">Description</Typography>
              <Typography>{description}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">Complete</Typography>
              <Typography>{complete === true ? "Yes" : "No"}</Typography>
            </Grid>
            {dueDate && (
              <Grid item>
                <Typography variant="caption">Due</Typography>
                <Typography>{_dueDate}</Typography>
              </Grid>
            )}
          </Grid>
        </CardContent>
        <CardActions>
          <Button onClick={() => setEditing(true)}>Edit</Button>
          <IconButton onClick={() => setConfirmDelete(true)}>
            <Icon>delete</Icon>
          </IconButton>
        </CardActions>
      </Card>
      <Dialog open={confirmDelete} onClose={() => setConfirmDelete(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you wish to delete '{description}'?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmDelete(false)} disabled={loading}>
            Cancel
          </Button>
          <Button onClick={() => handleDelete()} disabled={loading}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={editing} onClose={() => setEditing(false)}>
        <DialogTitle>Edit Item</DialogTitle>
        <DialogContent>
          <EditToDo
            onClose={() => setEditing(false)}
            todo={{
              id,
              description,
              dueDate,
              complete,
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
