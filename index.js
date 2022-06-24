function sumAll(arr) {
    let smaller = arr[0] < arr[1] ? arr[0] : arr[1];
    let larger = arr[0] > arr[1] ? arr[0] : arr[1];

    let total = 0;
    for(let i= smaller; i<=larger; i++){
     total += i;
       }
       return total;
    }

    console.log(sumAll([5,10]));