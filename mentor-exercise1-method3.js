const arrayOfObjectsForGroupAndAverage = [
  { category: "A", value: 20 },
  { category: "B", value: 30 },
  { category: "A", value: 25 },
];

const objectData = arrayOfObjectsForGroupAndAverage.reduce((acc, current) => {
  acc[current.category] = {
    sum: arrayOfObjectsForGroupAndAverage.reduce(
      (accumulator, { category, value }) => {
        if (category === current.category) accumulator += value;
        return accumulator;
      },
      0
    ),
    count: arrayOfObjectsForGroupAndAverage.filter(
      ({ category }) => category === current.category
    ).length,
  };
  acc[current.category].average =
    acc[current.category].sum / acc[current.category].count;
  return acc;
}, {});

console.log(JSON.stringify(objectData, null, 2));
