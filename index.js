const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Query {
    hello: String!
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return  'Hello from GraphQL';
    }
  }
};

const options = {
  port: 7777,
  endpoint: '/graphql'
}

const server = new GraphQLServer({ typeDefs, resolvers, options });

server.start(() => {
  console.log(`Server started on port ${options.port}${options.endpoint}`);
});

