let i = 0;

fn1 = async function () {
  await undefined;
  i++;
  console.log(i);
  return fn1();
};

fn1();
