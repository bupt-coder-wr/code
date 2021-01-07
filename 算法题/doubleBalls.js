function getPrizeNumber() {
  let PrizeNumber = [];
  for (let i = 0; i < 6; i++) {
    const redNumber = parseInt(Math.random() * 32 + 1);
    if (PrizeNumber.includes(redNumber)) {
      i--;
    } else {
      PrizeNumber.push(redNumber);
    }
  }
  PrizeNumber.sort((a, b) => a - b);
  const blueNumber = parseInt(Math.random() * 16 + 1);
  PrizeNumber.push(blueNumber);
  return PrizeNumber.join("-");
}

function main() {
  const bigPrizeNumber = getPrizeNumber();
  let index = 1;
  while (1) {
    const myPrizeNumber = getPrizeNumber();
    if (myPrizeNumber === bigPrizeNumber) {
      break;
    } else {
      index++;
      console.log(index);
    }
  }
  console.log("index", index);
}

main();
