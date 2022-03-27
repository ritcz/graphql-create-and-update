import express from "express";
import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs.js";
import resolvers from "./resolvers.js";

const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await server.listen();

console.log(`Server ready at ${url}`);
