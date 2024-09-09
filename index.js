const calculateArray = (array) => {
  let reverse = array.reverse();
  let map = reverse.map(item => item * 2);
  return map;
}

console.log(calculateArray([1, 4, 6, 7] ));
console.log(calculateArray([7, 4, 2, 1] ));
console.log(calculateArray([5]));
console.log(calculateArray([1, 3]));


