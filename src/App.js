let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let odd = [];
let even = [];
const findOddEven = (num) => {
  for (i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      even.push(num[i]);
    } else {
      odd.push(num[i]);
    }
  }

  console.log(odd, even);
};
findOddEven(array);
