function moveZeros(arr) {
    for (let index=0;index<arr.length;index++) {
        let arrayOfZeros=[];
        while(arr[index]===0) {
            arrayOfZeros.push(...arr.splice(index,1));
        }
        arr.push(...arrayOfZeros);
    }
    return arr;
  }


//console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]

console.log(moveZeros([ 9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0 ])) //[ 9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]