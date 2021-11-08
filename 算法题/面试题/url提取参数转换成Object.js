function transform(url) {
  let object = {}
  if (url.search(/\?/i === -1)) {
    return object;
  }
  let str = url.split('?')[1];
  let array = str.split('&');
  for (let item of array) {
    let key = item.split('=')[0];
    let value = item.split('=')[1];
    object[key] = value;
  }
  return object;
}
let url = 'http://www.baidu.com/'
console.log(transform(url)) 