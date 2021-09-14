/**
 * coverter({"a_bc_def": 1}) => {"aBcDef": 1}
 * @param {*} obj
 */
function coverter(obj) {
  const keys = Object.keys(obj);
  const helper = (s) => {
    if (typeof s !== "string") return s;
    const tmp = s.split("_");
    for (let i = 1; i < tmp.length; i++) {
      tmp[i] = tmp[i].slice(0, 1).toUpperCase() + tmp[i].slice(1);
    }
    return tmp.join("");
  };

  for (let key of keys) {
    const value = obj[key];
    delete obj[key];
    const newKey = helper(key);
    obj[newKey] = value;
  }
  return obj;
}
const obj = { a_asd_aw: 1, a: 2 };
coverter(obj);
