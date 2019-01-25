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
      return nextIndex;
    }
  }
};
const numberOfSmallerElements = (partiallySortedArray, insertIndex, sizeOfArray) => {
  let s = 0;
  let currentIndex = (insertIndex-1+sizeOfArray)%sizeOfArray;
  while (partiallySortedArray[currentIndex]!== -1) {
    s += 1;
    currentIndex = (currentIndex-1+sizeOfArray)%sizeOfArray;
  }
  return s;
}
const numberOfLargerElements = (partiallySortedArray, insertIndex, sizeOfArray) => {
  let l = 0;
  let currentIndex = insertIndex;
  while (partiallySortedArray[currentIndex]!== -1) {
    l += 1;
    currentIndex = (currentIndex+1+sizeOfArray)%sizeOfArray;
  }
  return l;
}
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
      let s = numberOfSmallerElements(y, insertIndex, inputArraySize);
      let l = numberOfLargerElements(y, insertIndex, inputArraySize);
      if (s<l) {
        // shifting all the smaller elements
        let currentIndex = (h-1+inputArraySize)%inputArraySize;
        insertIndex = (insertIndex-1+inputArraySize)%inputArraySize;
        while(currentIndex!==insertIndex){
          let nextIndex = (currentIndex+1)%inputArraySize;
          y[currentIndex] = y[nextIndex];
          currentIndex=nextIndex;
        }
        y[insertIndex] = temp;
        h = (h-1+inputArraySize)%inputArraySize;
      } else {
        // shifting all the larger elements
        let currentIndex = (t+1+inputArraySize)%inputArraySize;
        while(currentIndex!==insertIndex){
          let previousIndex = (currentIndex-1+inputArraySize)%inputArraySize;
          y[currentIndex] = y[previousIndex];
          currentIndex=previousIndex;
        }
        y[insertIndex] = temp;
        t = (t+1+inputArraySize)%inputArraySize;
      }
    }
    console.log(y);
  }
  return y;
};
//modifiedInsertionSort([9, 50, 45, 47, 46, 100, 10, 2, 80, 60]);
module.exports = modifiedInsertionSort;
