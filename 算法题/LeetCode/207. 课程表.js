/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const inDegree = new Array(numCourses).fill(0); // 统计所有拓扑的入度
  const map = {}; // 统计所有拓扑的相邻节点
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++; // 统计所有拓扑的入度
    // 这里的map以前驱为key，所有后继组成的数组为value
    if (map[prerequisites[i][1]]) {
      map[prerequisites[i][1]].push(prerequisites[i][0]); // map中已有
    } else {
      map[prerequisites[i][1]] = [prerequisites[i][0]]; // 第一次统计
    }
  }
  const queue = []; // 存放入读为0的节点
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);
    }
  }
  let count = 0; // 可以完成的课程节点
  while (queue.length) {
    const selected = queue.shift();
    count++;
    const toEnterQueue = map[selected]; // 其次入度减一的节点
    if (toEnterQueue && toEnterQueue.length) {
      for (let i = 0; i < toEnterQueue.length; i++) {
        inDegree[toEnterQueue[i]]--;
        if (inDegree[toEnterQueue[i]] == 0) {
          // 入度为0时，可以再次进入待完成的节点
          queue.push(toEnterQueue[i]);
        }
      }
    }
  }
  return count == numCourses;
};
