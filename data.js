const products = [
  {
    id: "1",
    productName: "CobraKai T-Shirt",
    description: "The ultimate accessory to looking and being badass",
    image: "img-001",
    quantity: 42,
    price: 18.5,
    onSale: false,
    categoryId: "1",
  },
  {
    id: "2",
    productName: "House of the Dragon eyepatch",
    description:
      "You will have no depth perception, but you will gain Vhagar. A fair trade",
    image: "img-002",
    quantity: 70,
    price: 4.2,
    onSale: false,
    categoryId: "2",
  },
  {
    id: "3",
    productName: "Mr Robot Darlene's glasses",
    description: "Only a rose-tinted view in the literal sense",
    image: "img-003",
    quantity: 60,
    price: 10.5,
    onSale: true,
    categoryId: "2",
  },
  {
    id: "4",
    productName: "Game of Thrones Sword",
    description:
      "You can name it if you want, but you know what The Hound will think",
    image: "img-004",
    quantity: 12,
    price: 70,
    onSale: false,
    categoryId: "3",
  },
];

const categories = [
  { id: "1", categoryName: "clothing" },
  { id: "2", categoryName: "accessories" },
  { id: "3", categoryName: "art and decor" },
  { id: "4", categoryName: "pop-culture memorabilia" },
];

const reviews = [
  {
    id: "1",
    date: "03.03.2022",
    title: "Badass",
    comment: "lorem ipsum sit amet...",
    rating: 5,
    productId: "1",
  },
  {
    id: "2",
    date: "09.03.2022",
    title: "Kinda Badass",
    comment: "lorem ipsum sit amet...",
    rating: 4,
    productId: "1",
  },
  {
    id: "3",
    date: "07.03.2022",
    title: "Does not make you able to fly a dragon",
    comment: "lorem ipsum sit amet...",
    rating: 2,
    productId: "2",
  },
  {
    id: "4",
    date: "14.03.2022",
    title: "Turned me lesbian",
    comment: "lorem ipsum sit amet...",
    rating: 4,
    productId: "3",
  },
  {
    id: "5",
    date: "21.03.2022",
    title: "too heavy",
    comment: "lorem ipsum sit amet...",
    rating: 3,
    productId: "4",
  },
  {
    id: "6",
    date: "19.03.2022",
    title: "I now rule the seven kingdoms",
    comment: "lorem ipsum sit amet...",
    rating: 5,
    productId: "4",
  },
];

module.exports = {
  products,
  categories,
  reviews,
};
