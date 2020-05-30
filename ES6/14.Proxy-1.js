let person = {
  name: 'wr',
  age: 19
}
let proxy = new Proxy(person, {
  set(trapTarget, key, value, receiver) {
    if (!trapTarget.hasOwnProperty(key)) {
      if (isNaN(value))
        throw new Error("Property isn't a number")
    }
    return Reflect.set(trapTarget, key, value, receiver)
  },
  get(trapTarget, key, receiver) {
    if (!(key in receiver))
      throw new Error("The property isn't exist")
    return Reflect.get(trapTarget, key, receiver)
  },
  has(trapTarget, key) {
    if (key == "age") {
      return false;
    }
    return Reflect.has(trapTarget, key)
  },
  deleteProperty(trapTarget, key) {
    if (key == "name") {
      return false;
    }
    return Reflect.defineProperty(trapTarget, key)
  }
})

// console.log(proxy.age)  //throw error
// console.log("age" in proxy) //false

// console.log("name" in person)
// let result = delete proxy.name
// console.log(result)
// console.log("name" in person)