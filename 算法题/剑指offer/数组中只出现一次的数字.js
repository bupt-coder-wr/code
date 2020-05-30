function FindNumsAppearOnce(array)
{
    // write code here
    // return list, 比如[a,b]，其中ab是出现一次的两个数字
  if(array.length === 0) return [];
  let res = [];
  for(let i =0;i<array.length;i++){
    if(array.indexOf(array[i])==array.lastIndexOf(array[i])){
      res.push(array[i])
    }
  }
  return res;
}