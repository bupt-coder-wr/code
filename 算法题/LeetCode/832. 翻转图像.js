/**
 * 2021/09.27
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let item of image) {
    item = item.reverse();
  }
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[0].length; j++) {
      image[i][j] = image[i][j] === 1 ? 0 : 1;
    }
  }
  return image;
};
