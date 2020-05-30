var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let ans = strs[0];
  let result = "";
  for (let i = 1; i < strs.length; i++) {
    let st = strs[i];
    if (st === "") return "";
    for (let j = 0; j < Math.min(st.length, ans.length); j++) {
      if (ans[j] === st[j]) {
        result += ans[j];
      }
    }
    ans = result;
    result = "";
  }
  return ans;
};
console.log(longestCommonPrefix(["aa", "a"]));
