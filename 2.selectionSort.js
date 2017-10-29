var findSmallest = function(arr) {
  var smallest = arr[0];
  var smallest_index = 0;
  for(i = 0;i < arr.length; i++) {
    if(arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
};
var selectionSort = function(arr) {
  newArr = [];
  for(i = 0;i < arr.length; i++) {
    var smallest = findSmallest(arr);
    newArr.append(arr.pop(smallest));
  }
  return newArr;
};
