<template>
  <div id="app"></div>
</template>
<script>
export default {
  name: "video",
  mounted() {
    let dataURL = "";
    let video = document.createElement("video");
    video.setAttribute("crossOrigin", "anonymous"); //处理跨域
    video.setAttribute("src", url);
    video.setAttribute("width", 400);
    video.setAttribute("height", 240);
    video.addEventListener("loadeddata", function () {
      let canvas = document.createElement("canvas"),
        width = video.width, //canvas的尺寸和图片一样
        height = video.height;
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d").drawImage(video, 0, 0, width, height); //绘制canvas
      dataURL = canvas.toDataURL("image/jpeg"); //转换为base64
      resolve(dataURL);
    });
  },
};
</script>
