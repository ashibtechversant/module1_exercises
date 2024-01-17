const arrayOfObjectsForGroupAndAverage = [
  { category: "A", value: 20 },
  { category: "B", value: 30 },
  { category: "A", value: 25 },
];

const objectData = arrayOfObjectsForGroupAndAverage.reduce((acc, current) => {
  if (!acc[current.category]) {
    acc[current.category] = { sum: 0, count: 0, average: 0 };
  }

  acc[current.category].sum += current.value;
  acc[current.category].count += 1;
  acc[current.category].average =
    acc[current.category].sum / acc[current.category].count;

  return acc;
}, {});

console.log(JSON.stringify(objectData, null, 2));
