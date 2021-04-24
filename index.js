function findMinAndRemove(array){
  if (array.length === 1) {
    return array[0]
  }
  if (array.length > 1) {
    let i = 0;
    let least; 
    while (i <= array.length - 1) {
      least = Math.min(array[i], array[i+1]);
      i+=1;
    }
    return least
  }
}

// function selectionSort(array){
//   let finalArray = [];
//   while (array.length > 0) {
//     finalArray.push(findMinAndRemove(array))
//   }
//   return finalArray
// }
