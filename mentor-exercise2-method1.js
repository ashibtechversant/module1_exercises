const arr = [
  { name: 'a', values: [1, 2] },
  { name: 'b', values: [3] },
  { name: 'a', values: [4, 5] },
];

function transform(arr) {
  const result = arr.reduce((acc, { name, values }) => {
    acc[name] = acc[name] ? [...acc[name], ...values] : values;
    console.log(acc);
    return acc;
  }, {});
  return Object.entries(result).map(([name, values]) => ({ name, values }));
}

console.log(transform(arr));
