import { GraphQLServer } from "graphql-yoga";
import db from './db';
import Query from './resolvers/Query';

const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers: {
        Query,
    },
    context: {
        db
    }
});

server.start({ port: 4001 }, () => console.log('The server is up'));