function binarySearch(arrOut, numOut) {
  let [...newArrIndexList] = arrOut.keys();

  function inner(array, num) {
    let middleArrIndex = Math.floor(array.length / 2);

    if (array.length === 1) {
      return newArrIndexList[middleArrIndex];
    }

    if (array[middleArrIndex] === num) {
      return newArrIndexList[middleArrIndex];
    } else if (array[middleArrIndex] < num) {
      let newArr = array.slice(middleArrIndex);
      newArrIndexList = newArrIndexList.slice(middleArrIndex);

      return inner(newArr, num);
    } else {
      let newArr = array.slice(0, middleArrIndex);
      newArrIndexList = newArrIndexList.slice(0, middleArrIndex);

      return inner(newArr, num);
    }
  }

  return inner(arrOut, numOut);
}

let arr = [1, 3, 7, 12, 23, 45, 67, 87, 100];
let num = 100;
console.log(binarySearch(arr, num));
