fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => console.log(data));

const data = async () => {
  const value = await fetch('https://fakestoreapi.com/products');
  const jsonedValue = await value.json();
  console.log(jsonedValue);
};
data();
data = [
  {
    id: 1,
    name: 'name',
    description: 'black',
    image: something.url,
  },
][
  {
    id: 0,
    title: 'string',
    price: 0.1,
    description: 'string',
    category: 'string',
    image: 'http://example.com',
  }
];
