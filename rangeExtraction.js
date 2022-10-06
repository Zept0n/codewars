function solution(list){
    let returnArr=[];
    for (let index=0;index<list.length;index++) {
        let endpoint=index;
        let num=1;
        for (let j=index+1;j<list.length;j++) {
            if ((list[index]+num)===list[j]) {
                if (num>=2) {
                    endpoint=j;
                    //index=j;
                }
                num++;
            } 
            
        }
        //console.log(list[index],'---',list[endpoint]);
        let testArray=[];
        testArray.push(list[index],list[endpoint]);
        let uniq= [...new Set(testArray)];
        returnArr.push(uniq.join('-'));
        index=endpoint;
        
    }
    return returnArr.join(',');
   }


console.log(solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
