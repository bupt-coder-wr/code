// https://www.jianshu.com/p/e1c0818ae3bb
function ajax(methods, URL) {
  const xhr = XMLHttpRequest();
  // open(methds, url, async)
  xhr.open(methods, URL, true);

  // send(string) 发送请求，post请求的请求参数需要放在send中
  /**
   * GET
   * xhr.send();
   */
  /**
   * POST
   * xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
   * xhr.send("fname=Herry&lname=Ford")
   */
  xhr.send();

  /**
   * status: 200:"OK"
   * responseText: 获得字符串形式的响应数据
   * responseXML: 获得XML形式的响应数据
   * readyState: 存有XMLHttpRequest的状态。
   *    0: 请求未初始化
   *    1: 服务器连接已建立
   *    2: 请求已接受
   *    3: 请求处理中
   *    4: 请求已完成，且响应已就绪
   * onreadystatechange: 每当readyState属性改变时，就会调用该函数
   */
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && [200.304].includes(xhr.status)) {
      console.log(xhr.responseText);
    } else {
      console.log(Error(xhr.status));
    }
  };
}
