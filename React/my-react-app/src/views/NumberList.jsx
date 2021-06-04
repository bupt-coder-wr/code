function NumberList() {
  const listItem = [1, 2, 3, 4];
  //   const newList = listItem.map((item) => {
  //     return <li key={item}>{item}</li>;
  //   });
  return listItem.map((item) => <li key={item}>{item}</li>);
}

export default NumberList;
