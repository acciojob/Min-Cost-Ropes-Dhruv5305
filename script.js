function mincost(arr) {
  if (arr.length === 0) return 0;

  // Step 1: Turn array into a min-heap (sort ascendingly)
  arr.sort((a, b) => a - b);
  
  let totalCost = 0;

  while (arr.length > 1) {
    // Take the two smallest ropes
    let first = arr.shift();
    let second = arr.shift();
    let cost = first + second;

    // Add this cost
    totalCost += cost;

    // Insert the new rope back into the array
    // and keep it sorted (binary insertion for efficiency)
    let index = arr.findIndex(x => x > cost);
    if (index === -1) arr.push(cost);
    else arr.splice(index, 0, cost);
  }

  return totalCost;
}

module.exports = mincost;
