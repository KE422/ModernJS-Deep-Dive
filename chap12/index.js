// 함수 선언 방식

// 1. 함수 선언문
function add(x, y) {
  return x + y;
}

// 2. 함수 표현식
var add = function (x, y) {
  return x + y;
};

// 3. Function 생성자 함수
var add = new Function('x', 'y', 'return x+y');

// 4. 화살표 함수 (ES6)
var add = (x, y) => x + y;

// 함수 참조
console.dir(add); // [Function: add]
console.dir(sub); // undefined --> 변수호이스팅이기 때문

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // error

// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식
var sub = function (x, y) {
  return x - y;
};

// 콜백 함수
// ex.
function repeat(n) {
  for (var i = 0; i < n; i++) console.log(i);
}

function repeat1(n) {
  for (var i = 0; i < n; i++) {
    if (i % 2) console.log(i);
  }
}

repeat(5);
repeat1(5);

// --> 두 함수 모두 출력하고자 하나 전체 출력 or 홀수만 출력이냐에 따라 두번 정의해야함 (비효율적)

// 해결책 -> 콜백함수
// 전달받은 함수 f를 n만큼 반복 호출하는 함수
function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i);
  }
}

// 전체 로그 찍기
var logAll = function (i) {
  console.log(i);
};

// 홀수만 로그 찍기
var logOdds = function (i) {
  if (i % 2) console.log(i);
};

// 호출
repeat(5, logAll);
repeat(5, logOdds);
