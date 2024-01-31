const arr = [
  { name: 'a', values: [1, 2] },
  { name: 'b', values: [3] },
  { name: 'a', values: [4, 5] },
];

function transform(arr) {
  const result = Object.groupBy(arr, ({ name }) => name);
  return Object.entries(result).map(([name, arrOfObjs]) => ({
    name,
    values: arrOfObjs.flatMap((item) => item.values),
  }));
}

console.log(transform(arr));
