import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { AddToDo } from "../modules/todo/AddToDo";
import { ToDoList } from "../modules/todo/ToDoList";

export const ToDoPage = () => {
  const [showAddItem, setShowAddItem] = useState(false);
  return (
    <>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="h3">To Do Items</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => setShowAddItem(true)}>Add To Do</Button>
        </Grid>
        <Grid item>
          <ToDoList />
        </Grid>
      </Grid>
      <Dialog onClose={() => setShowAddItem(false)} open={showAddItem}>
        <DialogTitle>Add To Do</DialogTitle>
        <DialogContent>
          <AddToDo onClose={() => setShowAddItem(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
};
