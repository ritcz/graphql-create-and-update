import { ToDo, User } from "./model.js";
import { DateTimeResolver } from "graphql-scalars";

export default {
  Query: {
    todo: async (_, { id }) => ToDo.findByPk(id),
    todos: async () => await ToDo.findAll(),
    user: async (_, { id }) => await User.findByPk(id),
    users: async () => await User.findAll(),
  },
  Mutation: {
    addToDo: async (_, { input }) => {
      await ToDo.create({
        ...input,
        complete: false,
      });
      return {
        success: true,
      };
    },
    updateToDo: async (_, { id, input }) => {
      await ToDo.update({ ...input }, { where: { id } });
      return {
        success: true,
      };
    },
    deleteToDo: async (_, { id }) => {
      const record = await ToDo.findByPk(id);
      if (!record) {
        throw new Error(`Record with id ${id} was not found.`);
      }
      await record.destroy();
      return {
        success: true,
      };
    },
    addUser: async (_, { input }) => {
      await User.create({
        ...input,
        complete: false,
      });
      return {
        success: true,
      };
    },
    updateUser: async (_, { id, input }) => {
      await User.update({ ...input }, { where: { id } });
      return {
        success: true,
      };
    },
    deleteUser: async (_, { id }) => {
      const record = await User.findByPk(id);
      if (!record) {
        throw new Error(`Record with id ${id} was not found.`);
      }
      await record.destroy();
      return {
        success: true,
      };
    },
  },
  DateTime: DateTimeResolver,
};
