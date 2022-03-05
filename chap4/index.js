// 변수 호이스팅 --> JS는 인터프리터 언어로 한줄씩 실행되나
// 변수, 클래스, 함수 등 선언은 미리 모아 읽어 실행 후 나머지 코드 실행
// 따라서 error 발생 x -> undefined 출력
console.log(result);

// 선언 시 undefined로 자동 초기화 -> 쓰레기값 방지 장점
var result;
result = 80;

// 변수에 값 할당 후 출력되므로 80 출력 --> 주의할 점 (undefined였던 변수와 80 이라는 값은 서로 다른 메모리에 저장됨)
console.log(result);

// 값 재할당-->var로 선언된 변수는 값 재할당 가능, 값 재할당이 불가능한 건 상수(constant)
// ES6 기준으로 사용하는 const 는 상수 (재할당이 금지됨)
// 재할당 시 이전과 같이 undefined, 80, 90 서로 다른 메모리에 저장됨 --> undefined와 80과 같은 불필요한 값은 나중에 가비지 콜렉터에 의해 자동 메모리 해제됨.
result = 90;

// 재할당 된 값 90 출력
console.log(result);
