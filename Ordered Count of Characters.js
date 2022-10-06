 const orderedCount = function (text) {
  const map1 = new Map();

    for (let index=0;index<text.length;index++) {
        if (map1.has(text[index])==false) {
          map1.set(text[index],1);
        } else {
          map1.set(text[index],map1.get(text[index])+1);
        }
      }
    return [...map1]
  } 

console.log(orderedCount("abracadabra"));
console.log(orderedCount('233312'));

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]