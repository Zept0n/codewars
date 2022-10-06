function nextBigger(n) {
    let numberArray=[];
    let numberAsString=n.toString();
    let numberAsArray=numberAsString.split("");
    for (let i=0;i<numberAsArray.length;i++) {
        numberAsArray.push(numberAsArray.shift());
        numberArray.push(numberAsArray.join(''));
        for(let j=i+1;j<numberAsArray.length;j++) {
           let [digit]=numberAsArray.splice(j,1);
           numberAsArray.push(digit);
           numberArray.push(numberAsArray.join(''));
        }
        
    }
    console.log(numberArray)
}


nextBigger(12)   // returns 21
nextBigger(513)  // returns 531
nextBigger(2017) // returns 2071
