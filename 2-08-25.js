// 1. Problem:
// Write a function that checks whether one string is a rotation of another.
// Rotation means you can shift characters from the start to the end.

function isrotation(str1,str2)
{
    if(str1.length!==str2.length)
        return false;
    return(str1+str1).includes(str2)
}
console.log(isrotation("waterbottle","erbottlewat"));



// 2. Longest Consecutive Subsequence (Unsorted Array)

function longestConsecutive(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let streak = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        streak++;
      }

      longest = Math.max(longest, streak);
    }
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 1])); // 9


//3. Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
  let seen = new Set();
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3

