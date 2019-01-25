const correctIndex = (partiallySortedArray, element, sizeOfArray, h, t) => {
  if (element < partiallySortedArray[h]) {
    return (h-1+sizeOfArray)%sizeOfArray;
  } else if (element > partiallySortedArray[t]) {
    return (t+1+sizeOfArray)%sizeOfArray;
  }
  let i, currentIndex;
  for (i = 0; i < sizeOfArray; i += 1) {
    currentIndex = (h+i)%sizeOfArray;
    let nextIndex = (h+i+1) % sizeOfArray;
    if (partiallySortedArray[currentIndex] < element && partiallySortedArray[nextIndex] > element) {
      return currentIndex;
      break;
    }
  }
};
const modifiedInsertionSort = (inputArray) => {
  const inputArraySize = inputArray[0];
  if (inputArraySize < 2) {
    return;
  }
  inputArray.shift();
  const invalidInput = inputArray.find( (element) => {
    return element < 0;
  })
  if (invalidInput !== undefined) {
    return;
  }
  let y = Array(inputArraySize).fill(-1);
  y[0] = inputArray[0];
  let h = 0; // holds smallest value
  let t = 0; // holds largest value
  console.log(y);
  for (let i = 1; i < inputArraySize; i += 1) {
    const temp = inputArray[i];
    let insertIndex = correctIndex(y, temp, inputArraySize, h, t);
    if(insertIndex === (h+inputArraySize-1)%inputArraySize) {
      y[insertIndex] = temp;
      h = (h-1+inputArraySize)%inputArraySize;
    } else if (insertIndex === (t+1)%inputArraySize) {
      y[insertIndex] = temp;
      t = (t+1)%inputArraySize;
    } else {

    }
    console.log(y);
  }
  return y;
};
//modifiedInsertionSort([91,81,71,61,51,41,31,21,11]);
module.exports = modifiedInsertionSort;
