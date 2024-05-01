//////////*Func-1*//////////
/*
function power(a, n) {
  console.log(a ** n);
}
power(
  +prompt("A ning qiymatini kiriting"),
  +prompt("N ning qiymatini kiriting")
);
*/
//////////*Func-2*//////////
/*
function mean(a, b) {
  let arifmetik = (a + b) / 2;
  let geometrik = (a + b) ** (1 / 2);
  console.log(arifmetik);
  console.log(geometrik);
}
mean(
  +prompt("a ning qiymatini kiriting"),
  +prompt("b ning qiymatini kiriting")
);
*/
//////////*Func-3*//////////
/*
function sign(n) {
  if (n < 0) {
    return -1;
  }

  if (n > 0) {
    return 1;
  }

  if (n === 0) {
    return 0;
  }
}
console.log(sign(5563655));
*/
//////////*Func-4*//////////
/*
function numberOfRoots(A, B, C) {
  let D = B * B - 4 * A * C;
  if (D > 0) {
    return 2;
  } else if (D === 0) {
    return 1;
  } else {
    return 0;
  }
}

console.log(numberOfRoots(1, -3, 9)); // 1
*/
//////////*Func-5*//////////
/*
function areaCircle(R) {
  let S = Math.PI * R ** 2;

  console.log(S);
}
areaCircle(2);
*/
//////////*Func-6*//////////
/*
function sumRange(A, B) {
  if (A > B) {
    return 0;
  }
  let sum = 0;
  for (let i = A; i < B; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumRange(10, 20));
*/
//////////*Func-7*//////////
/*
function calc(A, B, S) {
    let result = 0;
    switch (S) {
        case "+":
            result = A + B;
            break;
        case "-":
            result = A - B;
            break;
        case "*":
            result = A * B;
            break;
        case "/":
            if (B !== 0) {
                result = A / B;
            } else {
                result = 0;
            }
            break;
        default:
            result = 0;
            break;
    }
    return result;
}
console.log(calc(10, 15, "*"));
console.log(calc(7, 8, "+"));
*/
//////////*Func-8*//////////
//////////*Func-9*//////////
//////////*Func-10*/////////
//////////*Func-11*/////////
//////////*Func-12*/////////
//////////*Func-14*/////////
/*
function inverseNumber(n) {
  let javob = toString(n);
  let javob1 = javobreplace();
  return javob1;
}
let result = inverseNumber(1234);
console.log(result);
*/
//////////*Func-15*/ ////////
/*
function isPalindrom(N) {
  function inverseNumber(num) {
    let reversedNum = 0;
    while (num > 0) {
      let digit = num % 10;
      reversedNum = reversedNum * 10 + digit;
      num = Math.floor(num / 10);
    }
    return reversedNum;
  }
  let invertedN = inverseNumber(N);
  return N === invertedN;
}
console.log(isPalindrom(1678761));
*/
//////////*Func-16*/////////
