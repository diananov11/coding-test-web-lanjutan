const calculateArray = (array) => {
  let reverse = array.reverse();
  reverse.map(item => item * 2)
}

console.log(calculateArray([1, 2, 3]));
