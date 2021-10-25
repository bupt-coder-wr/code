var listArray = [0];

// 添加在输入框自动聚焦功能  (已测试)
EventUtil.addHandler(window, "load", function (event) {
  var element = document.getElementById("inputText");
  if (element.autofocus !== true) {
    element.focus();
  }
});

// 初始化数据 打开页面 加载localstorage中的数据 (已测试)
window.addEventListener(
  "load",
  function () {
    if (this.window.localStorage.getItem("todo") == null) {
      //第一次打开则创建存储
      this.window.localStorage.setItem("todo", JSON.stringify([]));
    }
    if (this.window.localStorage.getItem("todo") != "") {
      // 如果localstorage有内容则进行解析
      var todo = this.window.localStorage.getItem("todo");
      listArray = JSON.parse(todo); ////加载页面时 先将localstorage中的信息放入数组中
      console.log("这是打开页面的初始数据");
      console.log(listArray);
    }
    loading();
  },
  false
);

//对localstorage中的内容进行挂载(已测试)
function loading(event) {
  //debugger;

  var todoUl = document.getElementById("todoUl"); //获取ul标签
  var doneUl = document.getElementById("doneUl");
  var allTodo = todoUl.getElementsByTagName("li"); //获取所有li标签
  var allDone = doneUl.getElementsByTagName("li");
  for (let i = allTodo.length - 1; i >= 0; i--) {
    todoUl.removeChild(allTodo[i]);
  }
  for (let i = allDone.length - 1; i >= 0; i--) {
    doneUl.removeChild(allDone[i]);
  }

  var texxtNode, timeNode;
  for (var i = 0; i < listArray.length; i++) {
    var liNode = document.createElement("li");
    var inputNode = document.createElement("input");

    if (listArray[i].done) {
      //事件已完成
      doneUl.appendChild(liNode);
      liNode.appendChild(inputNode);
      inputNode.name = "done";
    } else {
      //事件未完成
      todoUl.appendChild(liNode);
      liNode.appendChild(inputNode);
      inputNode.name = "todo";
    }

    inputNode.type = "radio";
    textNode = document.createTextNode(listArray[i].value);
    timeNode = document.createTextNode(listArray[i].time);
    liNode.appendChild(textNode);
    liNode.appendChild(timeNode);
  }
}

// 响应添加事件 将数据添加到localStorage中  (已测试)
var btn = document.getElementById("addBtn");
EventUtil.addHandler(btn, "click", function (event) {
  var todothing = {
    value: "",
    done: false,
    time: new Date().toUTCString(),
  };
  todothing.value = document.getElementById("inputText").value.trim(); //去除多余空格
  // console.log(todothing.value);
  if (todothing.value.length == 0) {
    alert("内容不能为空");
    return;
  }

  listArray.push(todothing);

  // console.log("这是更新后的数组")
  // console.log(JSON.stringify(listArray).toString())
  saveDate(listArray); //每次添加是将数组里的信息加入到localstorage中

  document.getElementById("inputText").value = "";
  loading();
  event.preventDefault();
});

// 保存数据 (已测试)
function saveDate(date) {
  window.localStorage.setItem("todo", JSON.stringify(date));
}

// 模块切换(优化，使用事件委托)  (已测试)
var changeModule = document.getElementById("changeModule");
EventUtil.addHandler(changeModule, "click", function (event) {
  event = EventUtil.getEvent(event);
  var target = EventUtil.getTarget(event);
  switch (target.id) {
    case "showAll":
      var todo = document.getElementById("todo");
      var done = document.getElementById("done");
      todo.style.display = "block";
      done.style.display = "block";
      break;
    case "showTodo":
      var todo = document.getElementById("todo");
      var done = document.getElementById("done");
      todo.style.display = "block";
      done.style.display = "none";
      break;
    case "showDone":
      var todo = document.getElementById("todo");
      var done = document.getElementById("done");
      todo.style.display = "none";
      done.style.display = "block";
  }
});

// 完成todo事件
var todoUl = document.getElementById("todoUl");
EventUtil.addHandler(todoUl, "click", function () {
  var e = event.target; //所触发的li元素
  var theLi = listArray.find((item) => item.time === e.childNodes[2].nodeValue);
  // alert(theLi);
  theLi.done = true;
  saveDate(listArray);
  loading();
  alert(e.childNodes[1].nodeValue + "   已完成，加油！");
});

//清除done事件
var clean = document.getElementById("clean");
EventUtil.addHandler(clean, "click", function () {
  for (var i = listArray.length - 1; i >= 0; i--) {
    if (listArray[i].done === true) {
      listArray.splice(i, 1);
    }
  }
  saveDate(listArray);
  loading();
});
