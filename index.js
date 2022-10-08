const { ApolloServer, gql } = require("apollo-server");

const products = [
  {
    productName: "CobraKai T-Shirt",
    description: "The ultimate accessory to looking and being badass",
    image: "img-001",
    quantity: 42,
    price: 18.5,
    onSale: false,
  },
  {
    productName: "House of the Dragon eyepatch",
    description:
      "You will have no depth perception, but you will gain Vhagar. A fair trade",
    image: "img-002",
    quantity: 70,
    price: 4.2,
    onSale: false,
  },
  {
    productName: "Mr Robot Darlene's glasses",
    description: "Only a rose-tinted view in the literal sense",
    image: "img-003",
    quantity: 60,
    price: 10.5,
    onSale: true,
  },
];

const typeDefs = gql`
  type Query {
    products: [Product!]!
  }

  type Product {
    productName: String!
    description: String!
    image: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
  }
`;

const resolvers = {
  Query: {
    products: () => {
      return products;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`server is running on ${url}`);
});
