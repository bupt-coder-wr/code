function minNumberInRotateArray(rotateArray)
{
  if(!rotateArray) return 0;
  return Math.min(...rotateArray);
}