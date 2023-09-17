console.log('안녕하세요?');
console.log('문자');
console.log(2);
console.log(true);

let two;
two = 2; //assign
console.log(two);

// let은 값이 변할 수 있음 const는 안됨

const three = 3;
console.log(three);

const four = 4;
console.log(four);

let undefinedVal;
console.log(undefinedVal); //undefined값 출력

let addition = two + four;
console.log(addition); //6

let subtraction = two - four;
console.log(subtraction); // -2

let multiplication = two * four;
console.log(multiplication); //8

let division = two / four;
console.log(division); //0.5

addition = addition + two;
console.log('addition', addition); // addition 8
addition += two;
console.log('더하기', addition); //10

subtraction = subtraction - two;
console.log('빼기', subtraction); // 빼기 -4
subtraction -= two;
console.log('빼기', subtraction); // 빼기 -6
subtraction += -two;
console.log('빼기', subtraction); // 빼기 -8
subtraction += -1 * two;
console.log('빼기', subtraction); // 빼기 -10

multiplication = multiplication * two;
console.log('곱하기', multiplication); // 곱하기 16
multiplication *= two;
console.log('곱하기', multiplication); // 곱하기 32

division = division / two;
console.log('나누기', division); // 나누기 0.25
division /= two;
console.log('나누기', division); // 나누기 0.125
division *= 1 / two;
console.log('나누기', division); // 나누기 0.0625

console.log('square, 제곱', 8 ** 2); //square, 제곱 64
console.log('세제곱', 8 ** 3); //세제곱 512
console.log('root square 제곱근', 8 ** 0.5); //root square 제곱근 2.8284271247461903
console.log('root square 제곱근', 4 ** (1 / 2)); //root square 제곱근 2

let counter = 0;
counter += 1;
console.log(counter); //1
counter += 1;
console.log(counter); //2
counter++;
console.log(counter); //3
counter++;
console.log(counter); //4
counter++;
console.log(counter); //5
counter--;
console.log(counter); //4

let remainder = counter % 8; // 나누기
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);
counter++;
remainder = counter % 8;
console.log('counter', counter);
console.log('remainder', remainder);

let boolean = true; //boolean은 true와 false의 값만 가질 수 있다.
console.log(boolean);
boolean = false;
console.log(boolean);
boolean = !boolean;
console.log(boolean); //ture

const textTwo = '2';
console.log('num + txt', two + textTwo); //22
console.log('num + num', two + two); //4
console.log('txt + txt', textTwo + textTwo); //2
console.log('solution', two + Number(textTwo)); //4
