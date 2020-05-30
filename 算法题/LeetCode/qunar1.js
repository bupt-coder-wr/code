//约束条件
//大人和小孩的总人数并不能超过9人
//一个大人最多可以带两个小孩
//大人必须得有一位

//输入： 大人和小孩人数
//输出：大人和小孩的可以人数
function qunar(man, child) {
    // var num = readline();
    // var man = parseInt(num.split(',')[0])
    // var child = parseInt(num.split(',')[1])
    var manCount = [];
    var childCount = [];
    if ((child < 0) || (man < 1) || (man + child > 9 || (child > 2 * man))) {
        console.log('选择不合法')
    } else {
        for (let i = 9 - child; i >= 1, child <= 2 * i; i--) { //i为大人
            if (i > 0 && i + child < 10)
                manCount.unshift(i)
        }
        for (let i = 0; i < 9 - man, i <= 2 * man; i++) { //i为小孩
            if (i + man < 10)
                childCount.push(i)
        }
        console.log(manCount);
        console.log(childCount);
    }

}
qunar(1, 2)