function remove(array) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (!map.has(array[i])) {
      map.set(array[i], 1)
      result.push(array[i])
    }

  }
  console.log(result)
}

let arr = [1, 2, 3, [1, 2, 3, [1, 23]]].toString().split(',').map(val => parseInt(val))
console.log(arr)