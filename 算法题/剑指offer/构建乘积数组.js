function multiply(array) {
  let result = [];
  let len = array.length;
  if (Array.isArray(array) && len > 0) {
    result[0] = 1;
    // 计算C[i]
    for (let i = 1; i < len; i++) {
      result[i] = result[i - 1] * array[i - 1]
    }
    // 计算D[i]
    for (let j = len - 2, temp = 1; j >= 0; j--) {
      temp *= array[j + 1];
      result[j] *= temp;
    }
    return result;
  }
}
/**
 * not done
 */