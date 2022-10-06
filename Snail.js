snail = function (array) {
    let resultArr = [];
    function innerSnail(array) {
        innerArr = [...array.shift()];
        for (let index = 0; index < array.length; index++) {
            innerArr.push(array[index].pop());
        }
        if (array.length==0) {
            return innerArr;
        }
        let lastArr = array.pop();
        for (let index = lastArr.length - 1; index >= 0; index--) {
            innerArr.push(lastArr[index]);
        }
        if (array.length==0) {
            return innerArr;
        }
        for (let index = array.length - 1; index >= 0; index--) {
            innerArr.push(array[index].shift());
        }
        return innerArr;
    }
    while (array.length > 0) {
        resultArr.push(...innerSnail(array));
    }
    return resultArr;
}


/* array = [[1, 2, 3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10, 9, 8, 7]] */

array = [[1, 2, 3, 4]]
console.log(snail(array));
