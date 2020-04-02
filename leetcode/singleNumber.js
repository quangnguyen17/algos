// Single Number
/*
  Given a non-empty array of integers, every element appears twice except for one. Find that single one.
  * Note: Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

const singleNumber = nums => {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    seen.hasOwnProperty(num) ? seen[num]++ : (seen[num] = 1);
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (seen[num] === 1) {
      return num;
    }
  }
  return null;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
