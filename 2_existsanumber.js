existsHigher = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > n) {
            console.log(arr[i])   
        }
    }
}
existsHigher([1, 2, 3, 4], 2)