
function reverseArray(inputArray)
{
  var reversedArray = [];
  for (var i = inputArray.length - 1; i >= 0; i--)
  reversedArray.push(inputArray[i]);
  return reversedArray;
}
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log(reversedArray); // [5, 4, 3, 2, 1]



function uniqueValues(array1, array2)
{
    const uniqueArray = [];
    let isUnique = false;
    for (let i = 0; i < arr1.length; i++) {
        isUnique = false;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr2.splice(j, 1);
                j--;
                isUnique = true;
            }
        if (flag == false) {
        uniqueArray.push(arr1[i]);
        }
        }
    uniqueArray.push(arr2);
    return uniqueArray;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(uniqueValues(array1, array2)); // [1, 2, 3, 4, 5, 6, 7]

