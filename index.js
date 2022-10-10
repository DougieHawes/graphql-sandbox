const { typeDefs } = require("./schema");
const { products, categories, reviews } = require("./data");

const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");

const { ApolloServer } = require("apollo-server");

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Category, Product },
  context: { products, categories, reviews },
});

server.listen().then(({ url }) => {
  console.log(`server is running on ${url}`);
});
