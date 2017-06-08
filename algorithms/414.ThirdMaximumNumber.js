/**
 * Created by eicyan on 2017/6/8.
 */
//https://leetcode.com/problems/third-maximum-number/#/description
//Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).
//
//    Example 1:
//
//Input: [3, 2, 1]
//
//Output: 1
//
//Explanation: The third maximum is 1.
//
//Example 2:
//
//Input: [1, 2]
//
//Output: 2
//
//Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
//
//    Example 3:
//
//Input: [2, 2, 3, 1]
//
//Output: 1
//
//Explanation: Note that the third maximum here means the third maximum distinct number.
//    Both numbers with value 2 are both considered as second maximum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    var list = [];
    for(var i = 0;i<nums.length;i++){
        if(nums[i]<=list[2]) continue;
        list = insertMax(0,list,nums[i]);
    }
    return list.length == 3 ? list[2]:list[0];
};
var insertMax = function(index,list,num){
    if(index > 2 ) return list;
    if(!list[index] && list[index] !== 0){
        list[index] = num;
        return list;
    }else{
        if(num > list[index]){
            var insertList = [];
            for(var i in list){
                if(index == i) {
                    insertList.push(num);
                }
                if(insertList.length>=3)break;
                insertList.push(list[i]);
            }
            list = insertList;
            return list;
        }else if(num !== list[index]){
            return insertMax(index+1,list,num);
        }
        return list;
    }
};