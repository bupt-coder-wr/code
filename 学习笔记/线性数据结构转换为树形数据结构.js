var sourceData = [
  { id: 1, name: '用户管理', pid: 0 },
  { id: 2, name: '菜单申请', pid: 1 },
  { id: 3, name: '信息申请', pid: 1 },
  { id: 4, name: '模块记录', pid: 2 },
  { id: 5, name: '系统设置', pid: 0 },
  { id: 6, name: '权限管理', pid: 5 },
  { id: 7, name: '用户角色', pid: 6 },
  { id: 8, name: '菜单设置', pid: 6 },
]
var targetData = [
  {
    id: 1,
    name: '用户管理',
    pid: 0,
    children: [
      {
        id: 2,
        name: '菜单申请',
        pid: 1,
        children: [{ id: 4, name: '模块记录', pid: 2 }],
      },
      { id: 3, name: '信息申请', pid: 1 },
    ],
  },
  {
    id: 5,
    name: '系统设置',
    pid: 0,
    children: [
      {
        id: 6,
        name: '权限管理',
        pid: 5,
        children: [
          { id: 7, name: '用户角色', pid: 6 },
          { id: 8, name: '菜单设置', pid: 6 },
        ],
      },
    ],
  },
]
/**
 *
 * @param {*} sourceData
 */
function toTree(sourceData) {
  // 删除所有children，以防止多次调用
  sourceData.forEach(item => {
    delete item.children
  })

  // 讲数据存储为 以 id为 KEY 的map索引数据
  let map = new Map()
  sourceData.forEach(item => {
    map[item.id] = item
  })

  let result = []
  sourceData.forEach(item => {
    let parent = map[item.pid]
    if (parent) {
      // 对 children初始化
      if (!parent.children) {
        parent.children = []
      }
      // 作为内部元素处理
      parent.children.push(item)
    } else {
      // 作为顶级元素处理
      result.push(item)
    }
  })
  return result
}
console.log(toTree(sourceData))
