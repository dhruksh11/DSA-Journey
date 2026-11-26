/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {   
    nums.sort((a,b) => a-b)
    let result = []
    let temp = []
    function backtrack(start){ 

        result.push([...temp])
    for(let i =start ; i<nums.length ; i++){
            if(i > start && nums[i]===nums[i-1]){
                continue;
            }
    
            temp.push(nums[i]);
            backtrack(i+1);
            temp.pop();
    }
    }
    backtrack(0);
    return result;
};