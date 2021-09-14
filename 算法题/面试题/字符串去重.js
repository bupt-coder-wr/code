function fn(s) {
  return [].filter.call(s, (s, i, o) => o.indexOf(s) === i).join("");
}
