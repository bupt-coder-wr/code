var lengthOfLongestSubstring = function (s) {
  let set = new Set()
  let len = s.length
  let left = 0,
    right = 0,
    result = 0
  while (left < len) {
    // 如果最右边的不在set里，则加进去
    while (right < len && !set.has(s[right])) {
      set.add(s[right])
      right++
    }
    // 最右边的在set里
    result = Math.max(result, right - left)
    set.delete(s[left])
    left++
  }
  return result
}
