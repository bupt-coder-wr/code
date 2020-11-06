let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],
  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],
    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};
/**
 * 采用递归的方式：如果子项是个数组就进行遍历累加值；如果是个对象就递归进行遍历
 */
const getSum = (department) => {
  if (Array.isArray(department)) {
    return department.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let item of Object.values(department)) {
      sum += getSum(item);
    }
    return sum;
  }
};

console.log(getSum(company));
