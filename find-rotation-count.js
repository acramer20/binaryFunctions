function findRotationCount(arr, low = 0, high =  arr.length - 1) {
  if(high < low) return 0;
  if(high === low) return low;
  //I do not understand why we are doing the top of high
  let mid = Math.floor((high+low)/2);

  
  if(mid > low && arr[mid] < arr[mid - 1]) {
    return mid;
  }
  if(mid < high && arr[mid] > arr[mid + 1]) {
    return mid + 1
  }

  //deciding to go to the left or the right [15, 18, 19, 20, 21, 22, 3, 6, 12]
  if(arr[high] > arr[mid]){
    return findRotationCount(arr, low, mid - 1);
  } else {
    return findRotationCount(arr, mid + 1, high);
  }
}

module.exports = findRotationCount