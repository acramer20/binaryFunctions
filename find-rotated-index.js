function findRotatedIndex(arr, num) {
 let rotation = findRotation(arr);
 if(rotation > 0 && num >=arr[0] && num <= arr[rotation -1]){
    return binarySearch(arr, num, 0, rotation -1);
 } else {return binarySearch(arr, num, rotation, arr.length - 1)}
}

function findRotation(arr) {
    let low = 0;
    let high = arr.length -1;
    while (low <= high){
        let mid = Math.floor((high + low)/2);
        if(arr[mid] > arr[mid + 1]) return mid + 1;
        else if (arr[low] <= arr[mid +1]){
            low = mid + 1;
        } else{high = mid -1};
    }
}

function binarySearch(arr, num, low, high) {
    if (arr.length === 0) return -1;
    if (num < arr[low] || num > arr[high]) return -1;

    while(low <= high) {
        let mid = Math.floor((high + low)/2);
        if(arr[mid] === num) return mid;
        else if( num < arr[mid]){
            high = mid -1;
        } else {low = mid + 1};
    }
    return -1;
}



module.exports = findRotatedIndex