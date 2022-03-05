// js의 단축평가
// || 연산 전에 cat --> true이므로 cat 만 보고 바로 출력
console.log('cat' || 'dog');

// cat true, and dog true --> dog 출력
console.log('cat' && 'dog');

// || 연산 전에 false -> dog로 넘어감, dog true이므로 dog 출력
console.log(false || 'dog');

// 'cat' true , false false -> false 출력
console.log('cat' && false);

// null 병합 연산자 ??
// 좌항의 피연산자가 Falsy값인 null 또는 undefined인 경우 우항 반환, 아니면 좌항 반환
var foo1 = null ?? 'default string';
console.log(foo1); // 'default string' 반환

// false, undefined, null 0, -0, NaN, '' 등 모두 포함
var foo2 = '' ?? 'default string';
console.log(foo2); // '' 반환

// || 연산자의 경우 -> falsy값인 0 이나 '' 도 기본값으로 유효함
var foo3 = '' || 'default string';
console.log(foo3); // 'default string' 반환
