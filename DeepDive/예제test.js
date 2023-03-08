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

// foo(); // 1 출력 -- 상위스코프는 전역
// bar(); // 1 출력 -- 상위스코프는 전역

// var x= 'global';

// function foo() {
//     console.log(x); // undefined
//     var x='local';
// }

// foo();
// console.log(x); // global

// var Counter = (function (){
//     var num =0; // private

//     return {
//         increase() { // public
//             return ++num;
//         },
//         decrease() { // public
//             return --num;
//         }
//     };
// }());

// console.log(Counter.num); // undefined -- num은 노출되지 않음 : 정보 은닉

// console.log(Counter.increase()); // 1
// console.log(Counter.increase()); // 2
// console.log(Counter.decrease()); // 1
// console.log(Counter.decrease()); // 0

//---------------------------------------------------------------------

// let, const 키워드와 블록레벨 스코프
// var x=1;
// var y=1;

// var x=100;
// var y;

// console.log(x); // 100 출력
// console.log(y); // 1출력

// var x1 = 1;

// if(true){
//     var x1 =100;
// }
// console.log(x1) // 100 출력

// let foo =1;
// {
//     let foo = 2;
//     let bar = 3;
// }

// console.log(foo); // 1 - 전역변수
// console.log(bar); // ReferenceError: bar is not defined - 지역변수

// var 는 호이스팅이 발생하면서 초기화가 같이 일어남, 하지만 let은 호이스팅은 발생하지만 초기화는 일어나지 않음 -- 변수 호이스팅이 발생하지 않는 것처럼 동작한다

// console.log(foo); // ReferenceError: Cannot access 'foo' before initialization

// let foo; // 변수 선언 
// console.log(foo); // undefined

// foo =1; // 할당
// console.log(foo); // 1

// //지역변수에서도 동일
// let bar = 1;
// {
//     console.log(bar); //ReferenceError: Cannot access 'bar' before initialization
//     let bar =2;
// }

// 전역객체와 let
// ---- 이 예제는 브라우저에서만 동작함
// var x = 1;
// y=2;
// function foo() {}

// console.log(window.x);
// console.log(x)

// console.log(window.y);
// console.log(y)

// console.log(window.foo);
// console.log(foo);

// const foo =1;

// const bar; // SyntaxError: Missing initializer in const declaration -- const는 선언과 동시에 초기화를 해줘야함

//---------------------------
// 프로퍼티 어트리뷰트

// const o = {};

// 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없음
// o.[[Prototype]] // SyntaxError: Unexpected token '['

//단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공
// console.log(o.__proto__ )// Object.prototype -- [Object: null prototype] {}

// const person = {
//     name: 'Lee'
// };

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환
// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {
//     name: {
//         value: 'Lee',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// }
        
// person.age = 20; // 프로퍼티 동적 생성

// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// {
//     name: {
//       value: 'Lee',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     age: { value: 20, writable: true, enumerable: true, configurable: true }
// }

// const person = {
//     // 데이터 프로퍼티
//     firstName: 'Ungmo',
//     lastName: 'Lee',

//     // fullName은 접근자 함수로 구성된 접근자 프로퍼티

//     // getter 함수
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     // setter 함수
//     set fullName(name) {
//         //배열 디스트럭처링 할당: "31.1 배열 디스트럭처링 할당" 참고
//         [this.firstName, this.lastName] = name.split(' ');
//     }
// };

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
// console.log(person.firstName + ' '+ person.lastName); // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출됨
// person.fullName = 'Heegun Lee';
// console.log(person); // { firstName: 'Heegun', lastName: 'Lee', fullName: [Getter/Setter] }

// 접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출됨
// console.log(person.fullName); //Heegun Lee

// firstName은 데이터 프로퍼티
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖음

// let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
// console.log(descriptor);
// {
//     firstName: {
//         value: 'Heegun',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     lastName: {
//         value: 'Lee',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     fullName: {
//         get: [Function: get fullName],
//         set: [Function: set fullName],
//         enumerable: true,
//         configurable: true
//     }
// }

// fullName은 접근자 프로퍼티
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
// 프로퍼티 어트리뷰트를 갖음
// descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log(descriptor);
// {
//     get: [Function: get fullName],
//     set: [Function: set fullName],
//     enumerable: true,
//     configurable: true
// }

// const person = {};

// Object.defineProperty(person, 'firstName', {
//     value: 'Ungmo',
//     writable: true,
//     enumerable: true,
//     configurable: true
// });

// Object.defineProperty(person, 'lastName',{
//     value: 'Lee'
// });

// let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
// console.log('firstName', descriptor);
// firstName {
//     firstName: {
//         value: 'Ungmo',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     lastName: {
//         value: 'Lee',
//         writable: false,
//         enumerable: false,
//         configurable: false
//     }
// }

// descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
// console.log('lastName', descriptor);
// lastName {
//     firstName: {
//       value: 'Ungmo',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     lastName: {
//       value: 'Lee',
//       writable: false,
//       enumerable: false,
//       configurable: false
//     }
// }

// [[Enumerable]] 의 값이 false인 경우
// 해당 프로퍼티는 for ... in 문이나 Object.keys 등으로 열거할 수 없음
// lastName 프로퍼티는 [[Enumerable]]의 값이 false 이므로 열거되지 않음
// console.log(Object.keys(person)); // [ 'firstName' ]

// [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Valse]]의 값을 변경할 수 없음
// lastName 프로퍼티는 [[Writable]]의 값이 false이므로 값을 변경할 수 없음
// 이때 값을 변경하면 에러는 발생하지 않고 무시됨
// person.lastName = 'Kim';

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없음
// lastName 프로퍼티는 [[Configurable]]의 값이 false이므로 삭제할 수 없음
// 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시됨
// delete person.lastName;

// descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
// console.log('lastName', descriptor)
// lastName {
//     firstName: {
//       value: 'Ungmo',
//       writable: true,
//       enumerable: true,
//       configurable: true
//     },
//     lastName: {
//       value: 'Lee',
//       writable: false,
//       enumerable: false,
//       configurable: false
//     }
// }

// Object.defineProperty(person, 'fullName', {
//     get(){
//         return `${this.firstName} ${this.lastName}`;
//     },

//     set(name){
//         [this.firstName, this.lastName] = name.split(' ');
//     },
//     enumerable: true,
//     configurable: true
// });

// descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
// console.log('fullName', descriptor);
// fullName {
//     get: [Function: get],
//     set: [Function: set],
//     enumerable: true,
//     configurable: true
// }

// person.fullName = 'Heegun Lee';
// console.log(person);
// { firstName: 'Heegun', fullName: [Getter/Setter] }

// const person = {};

// Object.defineProperties(person, {
    
//     //데이터 프로퍼티 정의
//     firstName: {
//         value: 'Ungmo',
//         writable: false,
//         enumerable: true,
//         configurable: true
//     },
//     lastName: {
//         value: 'Lee',
//         writable: true,
//         enumerable: false,
//         configurable: true
//     },
    
//     // 접근자 프로퍼티 정의
//     fullName:{
//         //getter 함수
//         get() {
//             return `${this.firstName} ${this.lastName}`;
//         },
//         set(name){
//             [this.firstName, this.lastName] = name.split(' ');
//         },
//         enumerable: true,
//         configurable: true
//     }
// });

// person.fullName = 'Heegun Lee';
// console.log(person); // { firstName: 'Heegun', lastName: 'Lee', fullName: [Getter/Setter] }
// console.log(Object.getOwnPropertyDescriptor(person,'firstName'))

// const person ={
//     name: 'Lee'
// };

// Object.getOwnPropertyDescriptor(person,'name').enumerable = false;

// console.log(Object.getOwnPropertyDescriptor(person,'name'))