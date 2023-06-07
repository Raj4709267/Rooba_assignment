const isPerfectTree = (pairs) => {
  const childCount = {};
  const parentCount = {};

  // Count the occurrences of each child and parent
  for (let i = 0; i < pairs.length; i++) {
    const [child, parent] = pairs[i].match(/\d+/g);
    childCount[child] = (childCount[child] || 0) + 1;
    parentCount[parent] = (parentCount[parent] || 0) + 1;
  }

  // Check if each child has exactly one parent
  for (let child in childCount) {
    if (childCount[child] !== 1) {
      return false;
    }
  }

  // Check if each parent has exactly one child
  for (let parent in parentCount) {
    if (parentCount[parent] !== 1) {
      return false;
    }
  }

  // If there is only one root node, the tree is perfect
  return Object.values(parentCount).filter((count) => count === 0).length === 1;
};

// Example usage
const pairs = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"];

const isPerfect = isPerfectTree(pairs);
console.log(isPerfect); // Output: false
