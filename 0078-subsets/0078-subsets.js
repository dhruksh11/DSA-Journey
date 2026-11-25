/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []
    let current = []
    function backtrack(st){
        result.push([...current]);
        for(let i=st ;i<nums.length;i++)
        {
            current.push(nums[i])
            backtrack(i+1);
            current.pop()
        }
    }
    backtrack(0)
    return result;
};