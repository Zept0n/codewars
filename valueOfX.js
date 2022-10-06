function valueX(input) {
    while (input.length!=0) {
        let fnc=input.shift();
        let x=0;
        console.log(fnc);
        let tokens=fnc.split("=");
        let rightSide=tokens[0].split(" ").filter(Boolean);
        let rightSideSum=0;
        let leftSide=tokens[1].split(" ").filter(Boolean);
        let leftSideSum=0;
        let totalSum=0;
        let isXright=rightSide.includes("x");
        if (isXright) {
            for (let index=0;index<rightSide.length;index++) {
                if((isNaN(rightSide[index])===false)) {
                    rightSideSum+=+rightSide[index];
                    index++;
                }
                if (rightSide[index]==="+"&&(isNaN(rightSide[index+1])===false)) {
                    rightSideSum+=+rightSide[index+1];
                }
                if (rightSide[index]==="-"&&isNaN(rightSide[index+1])===false) {
                    rightSideSum-=+rightSide[index+1];
                }
            }
            for (let index=0;index<leftSide.length;index++) {
                if((isNaN(leftSide[index])===false)) {
                    leftSideSum+=+leftSide[index];
                    index++;
                }
                if (leftSide[index]==="+"&&(isNaN(leftSide[index+1])===false)) {
                    leftSideSum+=+leftSide[index+1];
                }
                if (leftSide[index]==="-"&&isNaN(leftSide[index+1])===false) {
                    leftSideSum-=+leftSide[index+1];
                }
            }
            console.log(-rightSideSum,leftSideSum)
        }
        
    }

}


valueX(['x + 1 = 9 - 2',
'x - 2 + 3 = 2', 
'x = + 2 - 5 + 9',
'- 10 = x',
'- x = - 1',
'x - 0 + 0 = 0'
])
    
