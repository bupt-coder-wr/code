/**
 * 2021/08.17
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let str of strs) {
    let key = str.split("").sort().toString();
    let list = map.get(key) ? map.get(key) : new Array();
    list.push(str);
    map.set(key, list);
  }
  return Array.from(map.values());
};
