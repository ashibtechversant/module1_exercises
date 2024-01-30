const arr = [
  { name: 'a', values: [1, 2] },
  { name: 'b', values: [3] },
  { name: 'a', values: [4, 5] },
];

function transform(arr) {
  return arr.reduce((acc, curr) => {
    const alreadyAvailable = acc.find((obj) => obj.name === curr.name);
    alreadyAvailable
      ? alreadyAvailable.values.push(...curr.values)
      : acc.push(curr);
    return acc;
  }, []);
}

console.log(transform(arr));
