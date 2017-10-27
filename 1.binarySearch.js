var myBinarySearch = function (arr, num) {
	var low = 0;
	var high = arr.length - 1;
	for (i = 0; i < arr.length; i++) {
		var mid = (low + high) / 2;
		var temp = arr[mid];
		if(temp == num) {
			return mid;
		} else if (num < temp) {
			high = mid -1;
		} else {
			low = mid + 1;
		}
	}
	return 0;
};
		
