function spinWords(string){
    let stringArray=string.split(" ");
    for (let index=0;index<stringArray.length;index++) {
        if (stringArray[index].length>=5) {
            stringArray[index]=stringArray[index].split('').reverse().join("");
        }
    }
    return stringArray.join(" ");
  }


spinWords( "Hey fellow warriors" )// => returns "Hey wollef sroirraw" 
spinWords( "This is a test")// => returns "This is a test" 
spinWords( "This is another test" )//=> returns "This is rehtona test"




//const reverse = a => a.map((item,i) => a[a.length-1-i])
//let reverse=a=>[...a].map(a.pop,a)


//const result = words.filter(word => word.length > 6);
//checkRange=(a,x,y)=>a.filter(e>=x&&e<=y).length
//checkRange=(a,x,y)=>a.filter(e=>e>=x&e<=y)
//checkRange=(a,x,y)=>a.map(e=>i+=x>e==e>y,i=0)|i  //You're given an array of integers a and two integers x and y. Count the number of elements in the array such that `x ≤ a[i] ≤ y, where i is the 0-based index of the element.