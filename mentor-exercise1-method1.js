const arrayOfObjectsForGroupAndAverage = [
  { category: "A", value: 20 },
  { category: "B", value: 30 },
  { category: "A", value: 25 },
];

const result1 = {};

arrayOfObjectsForGroupAndAverage.forEach(({ category, value }) => {
  if (!result1[category]) {
    result1[category] = { sum: value, count: 1, average: value };
  } else {
    result1[category].sum += value;
    result1[category].count += 1;
    result1[category].average = result1[category].sum / result1[category].count;
  }
});

console.log(JSON.stringify(result1));
