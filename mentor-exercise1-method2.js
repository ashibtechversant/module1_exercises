const arrayOfObjectsForGroupAndAverage = [
  { category: "A", value: 20 },
  { category: "B", value: 30 },
  { category: "A", value: 25 },
];

const result2 = {};
for (const i of arrayOfObjectsForGroupAndAverage) {
  if (!result2[i.category]) {
    result2[i.category] = { sum: i.value, count: 1, average: i.value };
  } else {
    result2[i.category].sum += i.value;
    result2[i.category].count += 1;
    result2[i.category].average =
      result2[i.category].sum / result2[i.category].count;
  }
}

console.log(JSON.stringify(result2, null, 2));
