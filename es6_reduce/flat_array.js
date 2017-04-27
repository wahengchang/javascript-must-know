var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( acc, cur ) => acc.concat(cur),
  []
);

console.log(flattened)