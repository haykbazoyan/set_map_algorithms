// BubbleSort without recursion
const numbers2 = [3, 5, 6, 4, 2, 1];

const bubbleSortV2 = (array) => {
  let result = [];

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 1 + i; j < array.length; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  return array;
};

console.log(bubbleSortV2(numbers2)); // [1, 2, 3, 4, 5, 6]

// USING RECURSION

const numbers = [3, 5, 6, 4, 2, 1];

const bubbleSort = (items) => {
  if (items.length === 0) return "Empty Array";
  let iter = 0;

  let check = (item, ind = 0) => {
    if (ind === item.length) {
      return true;
    }
    if (item[ind] > item[ind + 1]) {
      return false;
    } else {
      ind += 1;
      return check(item, ind);
    }
  };

  if (check(items)) return items;

  function inner(numArr) {
    if (iter === numArr.length - 1) {
      return bubbleSort(numArr);
    }

    if (numArr[iter] > numArr[iter + 1]) {
      [numArr[iter], numArr[iter + 1]] = [numArr[iter + 1], numArr[iter]];
    }

    iter += 1;
    return inner(numArr);
  }

  return inner(items);
};

console.log(bubbleSort(numbers)); // [1, 2, 3, 4, 5, 6]
