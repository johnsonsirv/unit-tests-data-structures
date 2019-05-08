function binarySearch(arr, elt) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end)/2);
    while (elt !== arr[middle] && start <= end){
        if(elt < arr[middle]) end = middle -1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2); 
    }
    return arr[middle] === elt? middle: -1;
}
function binarySearchInForLoop(arr, elt){
    let end =  Math.floor(arr.length-1);
    let middle = end/2;
    for(let start=0; start<=end && elt !==arr[middle];){
            if(elt < arr[middle]) end = middle -1;
            else start = middle + 1;
            middle = Math.floor((start + end) / 2); 
    }
    return arr[middle] === elt? middle: -1;
}
