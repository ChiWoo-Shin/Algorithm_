// const arr = [1, 2, 3];

// arr.forEach(console.log);
//------------------------------------

// console.log(score); // undefined 출력

// var score;
// score = 80;

//------------------------------------

// console.log(score); // undefined 출력

// var score = 80;

//------------------------------------

// console.log(score); // undefined 출력

// score = 80;
// var score;

// console.log(score); // 80 출력

// var str = 'My name is ';
// console.log(str)
// str +='Lee';
// console.log(str) // My name is Lee
// str -='Lee'
// console.log(str) // NaN

//------------------------------------------
// switch test -- 동작은 C와 동일 break가 없으면 해당 위치부터 그 이하는 전부 true로 처리됨 == 폴스루 fall through

// var x =3;

// switch (x){
//     case 1:
//         console.log("1");
//         break;
//     case 3:
//         console.log("3");
//         break;
//     case 4:
//         console.log("4");
//         break;

//     default:
//         console.log("default");
// }

// foo:{
//     console.log(1);
//     break foo;
//     console.log(2);
// }

// console.log('Done');

// var string = 'Hello World.';
// var search = 'l';
// var count = 0;

// for(var i=0; i < string.length; i++){
//     if(string[i] !== search) continue;
//     count++;
// }

// console.log(count);

// const regexp = new RegExp(search, 'g'); // 'g'는 전체 문자열을 탐색해서 모든 일치를 반환하도록 지정하는 전역 탐색 flag 
// console.log(regexp)
// console.log(string.match(regexp))
// console.log(string.match(regexp).length);

// if ('') console.log('1'); // false
// if (true) console.log('2'); // true
// if (0) console.log('3'); // false
// if ('str') console.log('4'); // true
// if (null) console.log('5'); // false

//------------------------------------------

// var person1 = {
//     name : 'Lee',
// };

// var person2 = {
//     name : 'Lee',
// };

// console.log(person1 === person2);
// console.log(person1.name === person2.name);

//------------------------------------------

// function add(x,y){
//     return x+y;
// }

// console.dir(add); // dir은 객체의 프로퍼티까지 출력, 단, node.js 환경에서는 consolelog와 같은 결과를 출력
// console.log(add(2,5));

//------------------------------------------

// var add = function foo(x,y){
//     return x+y;
// };

// console.log(add(2,5)); // 7 출력

// console.log(foo(2,5)); // ReferenceError : foo is not defined - 함수 이름은 함수 몸체 내부에서만 유효한 식별자이기 때문에 foo는 Error를 발생시킴

// console.dir(add); // [Function: add] 출력 -- 함수 호이스팅 발생
// console.dir(sub); // undefined  -- 변수 호이스팅 발생

// console.log(add(2,5)); // 7 출력
// console.log(sub(2,5)); // sub is not a function
// 위와같은 차이가 발생하는 이유는 함수 호이스팅과 변수 호이스팅의 차이 - page 165

// function add(x, y){
//     return x + y;
// }

// var sub = function (x, y){
//     return x - y;
// }

// var add = new Function('x','y','return x+y');

// console.log(add(2,5));

// var add1 = (function (){
//     var a = 10;
//     return function (x,y){
//         return x+y+a;
//     };
// }());

// console.log(add1(1,2)); // 13

// var add2 = (function (){
//     var a=10;
//     return new Function('x', 'y', 'return x+y+a');
// }());

// console.log(add2(1,2)); // ReferenceError: a is not defined
// 위와 같은 차이가 발생하는 이유는 Closure의 유무 위에껀 closure가 있고 아래는 closure가 없음 추후에 다룰 예정

// 화살표 함수
// const add3 = (x,y)=> x+y;
// console.log(add3(2,5)); // 7출력


//함수 호출
// function add4(x, y){
//     return x+y;
// }

// var result = add4(1,2);

// console.log(result)

// function add5(x, y){
//     console.log(arguments); // [Arguments] { '0': 2, '1': 5, '2': 10 } - 매개변수가 더 많은 것은 문제가 되지 않음(사용은 하지 않지만 arguments로 보면 넘어올때 같이 넘어오는것을 확인 가능)

//     return x+y;
// }

// add5(2,5,10);

// function add6(x, y){
//     if(typeof x !=='number' || typeof y !== 'number'){
//         throw new TypeError("인수는 모두 숫자 값이어야 합니다.");
//     }

//     return x+y;
// }

// console.log(add6(2));
// console.log(add6('a', 'b'));

// function add7(a=0, b=0, c=0){
//     return a+b+c;
// }

// console.log(add7(1,2,3)); // 6
// console.log(add7(1,2)); // 3
// console.log(add7(1)); // 1
// console.log(add7()); // 0
// console.log(add7('x','y','z')); // xyz

// function foo () {
//     return;
// }

// console.log(foo()); // undefined 

// function foo1 () {
// }

// console.log(foo1()); // undefined

// function multiply(x, y){
//     return // ASI에 의해 세미콜론 추가
//     x+y; // 무시됨
// }

// console.log(multiply(3,5)) // undefined


// function changeVal(primitive, obj){
//     primitive +=100;
//     obj.name = 'Kim';
// }

// var num = 100;
// var person = {name : 'Lee'};

// console.log(num); // 100
// console.log(person); // {name : "Lee"}

// changeVal(num, person);

// console.log(num); // 100 -- 원시값인 원본이 훼손되지 않음
// console.log(person); // {name : 'Kim'} -- 객체는 원본이 훼손됨

// (function (){
//     var a=3;
//     var b=5;
//     return a*b;
// }()); // 익명 즉시 실행 함수 -- 다시 호출할 수는 없음, 즉시 실행함수는 반드시 () 로 감싸야함 안그러면 에러발생

// (function foo() {
//     var a=3;
//     var b=5;
//     return a*b;
// }());

// foo(); // ReferenceError: foo is not defined -- 다시 호출할 수 없음

// function (){ // SyntaxError: Function statements require a function name
//     var a=3;
//     var b=5;
//     return a*b;
// }();

// function foo() { //SyntaxError: Unexpected token ')'
//     var a=3;
//     var b=5;
//     return a*b;
// }();

// var res = (function () {
//     var a=3;
//     var b=5;
//     return a*b;
// }());

// console.log(res); // 15

// res = (function(a, b){
//     return a*b;
// }(3, 5));

// console.log(res); // 15

//재귀 함수 - 자기 자신을 호출하는 행위

// function countdown(n){
//     for(var i=n; i>-0;i--) console.log(i);
// }

// countdown(10);

// function countdown2(n){
//     if(n<0) return;
//     console.log(n);
//     countdown(n-1);
// }

// countdown2(10);

// 위 두개는 같은 결과를 보여줌
//재귀를 이용하여 팩토리얼 만들기

// function factorial(n){
//     if(n<=1) return 1;

//     return n*factorial(n-1);
// }

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

// var factorial2 = function foo(n){
//     if(n <=1) return 1;

//     // return n* factorial(n-1);

//     console.log(factorial2 === foo);
//     return n*foo(n-1);
// }

// console.log(factorial2(5));
// factorial, factorial2 도 정상적으로 동작함

//재귀를 반복문으로
// function factorial3(n){
//     if(n<=1) return 1;

//     var res = n;
//     while (--n) res*=n;
//     return res;
// }

// console.log(factorial3(0));
// console.log(factorial3(1));
// console.log(factorial3(2));
// console.log(factorial3(3));
// console.log(factorial3(4));
// console.log(factorial3(5));

// 중첩함수
// function outer() { // 외부함수
//     var x=1;

//     function inner() { // 중첩함수 === 내부함수 === 헬퍼함수
//         var y=2;
//         console.log(x+y); //3
//     }

//     inner();
// }

// outer();

//Callback function 콜백함수
// function repeat(n){
//     for(var i=0; i<n;i++) console.log(i);
// }

// repeat(5); // 0 1 2 3 4

// function repeat2(n){
//     for (var i=0; i<n; i++){
//         if (i%2) console.log(i);
//     }
// }

// repeat2(5); // 1 3

// function repeat(n, f){ // f가 callback 함수===헬퍼함수, repeat은 고차함수(HOF)
//     for(var i=0; i<n; i++){
//         f(i); // i를 전달하면서 f를 호출
//     }
// }

// var logAll = function(i){ // callback 함수로 사용됨
//     console.log(i);
// }

// repeat(5, logAll); // 0 1 2 3 4 

// var logOdds = function(i){ // callback 함수로 사용됨
//     if(i%2) console.log(i);
// }

// repeat(5, logOdds); // 1 3

// // 콜백 함수를 사용하는 고차함수 map
// var res=[1,2,3].map(function (item){
//     return item*2;
// })
// console.log(res); // [2, 4, 6]

// //콜백 함수를 사용하는 고차함수 filter
// res = [1,2,3].filter(function (item){
//     return item%2;
// });
// console.log(res); // [1, 3]

// //콜백 함수를 사용하는 고차함수 reduce
// res = [1,2,3].reduce(function(acc, cur){
//     return acc+cur;
// }, 0);
// console.log(res); // 6


// 순수 함수와 비순수 함수
// var count =0;
// function increase(n){ // 순수함수 increase
//     return ++n;
// }

// 순수 함수가 반환한 결과값을 변수에 재할당해서 상태를 변경
// count = increase(count);
// console.log(count); // 1

// count = increase(count);
// console.log(count); // 2

// var cnt =0;
// function increase1(){ // 비순수함수 increase1 - 외부상태를 직접 참조함 cnt의 변화에 따라 함수의 출력이 달라짐 그래서 비순수함수
//     return ++cnt;
// }

// increase1();
// console.log(cnt); // 1

// increase1();
// console.log(cnt); // 2

//-----------------------------------------------

// 스코프

// var var1 = 1; // 코드의 가장 바깥

// if(true){
//     var var2 = 2; // 코드 블록 내에서 선언
//     if(true){
//         var var3 = 3; // 중첩된 코드 블록 내에서 선언
//     }
// }

// function foo() {
//     var var4 = 4; // 함수 내에서 선언

//     function bar() {
//         var var5 = 5; // 중첩된 함수 내에서 선언
//     }
// }

// console.log(var1); // 1
// console.log(var2); // 2
// console.log(var3); // 3
// console.log(var4); // ReferenceError: var4 is not defined
// console.log(var5); // ReferenceError: var5 is not defined

// var x = 'global';

// function foo(){
//     var x = 'local';
//     console.log(x) // local
// }

// foo();
// console.log(x) // global

// var는 한 스코프 내에서 중복 선언이 가능 -- 마지막에 선언한걸로 바뀜
// 하지만 let이나 const는 안됨

// function foo () {
//     var x = 1;

//     var x = 2;
//     console.log(x); // 2
// }

// foo();

// function bar () {
//     let x = 1;

//     let x = 2; //SyntaxError: Identifier 'x' has already been declared
//     console.log(x);
// }

// bar();

// function foo() {
//     console.log('global function foo');
// }

// function bar() {
    
//     function foo(){
//         console.log('local function foo')
//     }
//     foo();
// }

// bar(); // 출력은 'local function foo' 이게 나옴
// foo(); // 출력은 'global function foo' 이게 나옴

// var x = 1;

// function foo() {
//     var x = 10;
//     bar();
// }

// function bar() {
//     console.log(x);
// }

// foo(); // 1 출력
// bar(); // 1 출력

var x= 'global';

function foo() {
    console.log(x); // undefined
    var x='local';
}

foo();
console.log(x); // global

var Counter = (function (){
    var num =0;

    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());

console.log(Counter.num); // undefined -- num은 노출되지 않음 : 정보 은닉

console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0
