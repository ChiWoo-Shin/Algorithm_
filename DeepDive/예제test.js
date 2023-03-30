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

//------------------------------------------------------
// 17장 생성자 함수에 의한 객체 생성

//예제 17-01-----------------------------------------------
// 빈 객체 생성
// const person = new Object();
// console.log(person); // {}

// 프로퍼티 추가
// person.name = 'Lee';
// person.sayHello = function () {
//     console.log('Hi! My name is '+ this.name);
// };

// console.log(person); // { name: 'Lee', sayHello: [Function (anonymous)] }
// person.sayHello(); // Hi! My name is Lee

//-------------------------------------------------

//예제 17-02 ----------------------------------------------------
// const strObj = new String('Lee');
// console.log(typeof strObj); // Object
// console.log(strObj); // [String: 'Lee']

// const numObj = new Number(123);
// console.log(typeof numObj); // Object
// console.log(numObj); // [Number: 123]

// const boolObj = new Boolean(true);
// console.log(typeof boolObj); // Object
// console.log(boolObj); // [Boolean: true]

// const func = new Function('x', 'return x * x');
// console.log(typeof func); // function
// console.dir(func); // [Function: anonymous]

// const arr = new Array(1, 2, 3);
// console.log(typeof arr); // object
// console.log(arr); // [ 1, 2, 3 ]

// const regExp = new RegExp(/ab+c/i);
// console.log(typeof regExp); //object
// console.log(regExp); // /ab+c/i

// const date = new Date();
// console.log(typeof date); //object
// console.log(date) // 2023-03-09T14:22:32.580Z
//-------------------------------------------------------------------

// 예제 17-03 -------------------------------------------------------
// const circle1 = {
//     radius: 5,
//     getDiameter() {
//         return 2* this.radius;
//     }
// };

// console.log(circle1.getDiameter()); // 10

// const circle2 = {
//     radius: 10,
//     getDiameter() {
//         return 2 * this.radius;
//     }
// };

// console.log(circle2.getDiameter()); // 20

// ----------------------------------------------------------------------

// 예제 17-04 ----------------------------------------------------------
// function Circle(radius) {
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2*this.radius;
//     }
// }

// const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
// const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

// console.log(circle1.getDiameter()); // 10
// console.log(circle2.getDiameter()); // 20
// ----------------------------------------------------------------------

// 예제 17-05 ----------------------------------------------------------
// 함수는 다양한 방식으로 호출될 수 있음
// function foo() {
//     console.log(this);
// }

// 일반적인 함수로서 호출
// 전역 객체는 브라우저 환경에서는 window, Node.js 환경에서는 global을 가리킴
// foo(); // window

// const obj = { foo }; // ES6 프로퍼티 축약 표현

// 메서드로서 호출
// obj.foo(); // obj

// 생성자 함수로서 호출
// const inst = new foo();
// ----------------------------------------------------------------------

// 예제 17-06 ----------------------------------------------------------
// function Circle(radius) {
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2*this.radius;
//     }
// }

// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않음
// 즉, 일반 함수로서 호출
// const circle3 = Circle(15);

// 일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환
// console.log(circle3); // undefined

//일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다.
// console.log(radius); // 15
// ----------------------------------------------------------------------

// 예제 17-07 ----------------------------------------------------------
// 생성자 함수
// function Circle(radius) {
//     // 인스턴스 초기화
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2*this.radius;
//     }
// }

// 인스턴스 생성
// const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
// ----------------------------------------------------------------------

// 예제 17-08 ----------------------------------------------------------
// function Circle(radius) {
     // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩됨
//     console.log(this); // Circle {}

//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2*this.radius;
//     }
// }

// const circle1 = new Circle(5);

// ----------------------------------------------------------------------

// 예제 17-09 ~ 10  ----------------------------------------------------------
// function Circle(radius) {
//     // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩됨

//     // 2. this에 바인딩되어 있는 인스턴스를 초기화함
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2*this.radius;
//     }
//     // 3. 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환
// }

// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환
// const circle = new Circle(5);

// console.log(circle); // Circle { radius: 5, getDiameter: [Function (anonymous)] }

// ----------------------------------------------------------------------

// 예제 17-11 ----------------------------------------------------------
// function Circle(radius) {
//     // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩됨

//     // 2. this에 바인딩되어 있는 인스턴스를 초기화함
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2*this.radius;
//     }
//     // 3. 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환
//     // 명시적으로 객체를 반환하면 암묵적인 this 반환이 무시됨
//     return {};
// }

// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환
// const circle = new Circle(5);

// console.log(circle); // Circle {}

// ----------------------------------------------------------------------

// 예제 17-12 ----------------------------------------------------------
// function Circle(radius) {
//     // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩됨

//     // 2. this에 바인딩되어 있는 인스턴스를 초기화함
//     this.radius = radius;
//     this.getDiameter = function () {
//         return 2*this.radius;
//     }
//     // 3. 완성된 인스턴스가 바인딩된 this를 암묵적으로 반환
//     // 명시적으로 원시 값을 반환하면 원시 값 반환은 무시되고 암묵적으로 this 가 반환
//     return 100;
// }

// // 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환
// const circle = new Circle(5);

// console.log(circle); // Circle { radius: 5, getDiameter: [Function (anonymous)] }

// ----------------------------------------------------------------------

// 예제 17-13 ----------------------------------------------------------
// 함수는 객체다.
// function foo() {}

// // 함수는 객체이므로 프로퍼티를 소유할 수 있다.
// foo.prop = 10;

// foo.method = function() {
//     console.log(this.prop); // 10
// }

// foo.method();

// ----------------------------------------------------------------------

// 예제 17-14 ----------------------------------------------------------
// function foo() {}

// 일반적인 함수로서 호출 : [[Call]] 이 호출
// foo();

// 생성자 함수로서 호출 : [[Construct]] 가 호출
// new foo();

// ----------------------------------------------------------------------

// 예제 17-15 ----------------------------------------------------------
// 일반 함수 정의 : 함수 선언문, 함수 표현식
// function foo () {}
// const bar = function() {};
// //프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수. 이는 메서드로 인정하지 않음

// const baz = {
//     x: function () {}
// };

// // 일반 함수로 정의된 함수만이 constructor
// new foo(); // foo {}
// new bar(); // bar {}
// new baz.x(); // x {}

// // 화살표 함수 정의
// const arrow = () => {};

// // new arrow(); // TypeError: arrow is not a constructor

// // 메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정
// const obj = {
//     x() {}
// };

// new obj.x(); // TypeError: obj.x is not a constructor
// ----------------------------------------------------------------------

// 예제 17-16 ----------------------------------------------------------
// function foo() {}

// 일반 함수로서 호출
// [[Call]]이 호출됨. 모든 함수 객체는 [[Call]]이 구현
// foo();

// 생성자 함수로서 호출
// [[Construct]]가 호출됨. 이때 [[Construct]]를 갖지 않는다면 에러가 발생
// new foo();
// ----------------------------------------------------------------------

// 예제 17-17 ----------------------------------------------------------
// 생성자 함수로서 정의하지 않은 일반 함수
// function add(x, y){
//     return x + y;
// }

// // 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
// let inst = new add();

// // 함수가 객체를 반환하지 않았으므로 반환문이 무시됨. 따라서 빈 객체가 생성되어 반환됨
// console.log(inst); // add {}

// // 객체를 반환하는 일반 함수
// function createUser(name, role){
//     return {name, role};
// }

// // 일반 함수를 new 연산자와 함께 호출
// inst = new createUser('Lee', 'admin');
// // 함수가 생성한 객체를 반환
// console.log(inst); // { name: 'Lee', role: 'admin' }
// ----------------------------------------------------------------------

// 예제 17-18 ----------------------------------------------------------
// 생성자 함수
// function Circle(radius) {
//     this.radius = radius;
//     this.getDiameter = function() {
//         return 2*this.radius;
//     }
// }

// // new 연산자 없이 생성자 함수 호출하면 일반 함수로서 호출됨
// const circle = Circle(5);
// console.log(circle); // undefined

// // 일반 함수 내부의 this는 전역 객체 window를 가리킴
// console.log(radius); // 5
// console.log(getDiameter()); // 10

// circle.getDiameter(); // TypeError: Cannot read properties of undefined (reading 'getDiameter')
// ----------------------------------------------------------------------

// 예제 17-19 ----------------------------------------------------------
// 생성자 함수
// function Circle(radius) {
//     // 이 함수가 new 연산자와 함게 호출되지 않았다면 new.target은 undefined 다.
//     if (!new.target){
//         // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환
//         return new Circle(radius);
//     }

//     this.radius = radius;
//     this.getDiameter = function() {
//         return 2* this.radius;
//     };
// }

// // new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출됨
// const circle = Circle(5);
// console.log(circle.getDiameter()); // 10
// ----------------------------------------------------------------------

// 예제 17-20 ----------------------------------------------------------
// 스코프 세이프 생성자 패턴
// function Circle(radius) {
//     // 생성자 함수가 new 연사자와 함께 호출되면 함수의 선두에서 빈 객체를 생성
//     // this 에 바인딩하고, 이때 this 와 Circle은 프로토타입에 의해 연결됨

//     // 이 함수가 new 연산자와 함게 호출되지 않았다면 이 시점의 this는 전역 객체 window를 가리킴
//     // 즉, this 와 Circle은 프로토타입에 의해 연결되지 않음
//     if(!(this instanceof Circle)){
//         // new 연산자와 함께 호출하여 생성된 인스턴스를 반환함
//         return new Circle(radius);
//     }

//     this.radius = radius;
//     this.getDiameter = function() {
//         return 2* this.radius;
//     };
// }

// // new 연산자 없이 생성자 함수를 호출하여도 생성자 함수로서 호출됨
// const circle = Circle(5);
// console.log(circle.getDiameter()); // 10
// ----------------------------------------------------------------------

// ------------------------------------------------------------------------
// 예제 18-01 ----------------------------------------------------------

// 1. 함수는 무영의 리터럴로 생성할 수 있음
// 2. 함수는 변수에 저장할 수 있음
// 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당 됨
// const increase = function (num) {
//     return ++num;
// }

// const decrease = function (num) {
//     return --num;
// }

// // 2. 함수는 객체에 저장할 수 있음
// const auxs = { increase, decrease };

// // 3. 함수의 매개변수에 전달할 수 있음
// // 4. 함수의 반환값으로 사용할 수 있음
// function makeCounter(aux) {
//     let num = 0;

//     return function () {
//         num = aux(num);
//         return num;
//     };
// }

// // 3. 함수는 매개변수에게 함수를 전달할 수 있음
// const increaser = makeCounter(auxs.increase);
// console.log(increaser()); // 1
// console.log(increaser()); // 2

// // 3. 함수는 매개변수에게 함수를 전달할 수 있음
// const decreaser = makeCounter(auxs.decrease);
// console.log(decreaser()); // -1
// console.log(decreaser()); // -2

// ----------------------------------------------------------------------

// 예제 18-02 ----------------------------------------------------------

// function square (number) {
//     return number * number;
// }

// console.dir(square); // [Function: square]

// ----------------------------------------------------------------------

// 예제 18-03 ----------------------------------------------------------

// function square(number) {
//     return number * number;
// }

// console.log(Object.getOwnPropertyDescriptors(square));
// {
//     length: { value: 1, writable: false, enumerable: false, configurable: true },
//     name: {
//       value: 'square',
//       writable: false,
//       enumerable: false,
//       configurable: true
//     },
//     arguments: {
//       value: null,
//       writable: false,
//       enumerable: false,
//       configurable: false
//     },
//     caller: {
//       value: null,
//       writable: false,
//       enumerable: false,
//       configurable: false
//     },
//     prototype: { value: {}, writable: true, enumerable: false, configurable: false }
// }

// __proto__는 square 함수의 프로퍼티가 아님
// console.log(Object.getOwnPropertyDescriptor(square, '__proto__')); // undefined

// __proto__는 Object.prototype 객체의 접근자 프로퍼티다.
// square 함수는 Object.prototype 객체로부터 __proto__ 접근자 프로퍼티를 상속받음
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {
//     get: [Function: get __proto__],
//     set: [Function: set __proto__],
//     enumerable: false,
//     configurable: true
// }

// ----------------------------------------------------------------------

// 예제 18-04 ----------------------------------------------------------

// function multiply(x, y){
//     console.log(arguments);
//     // [Arguments] {}
//     // [Arguments] { '0': 1 }
//     // [Arguments] { '0': 1, '1': 2 }
//     // [Arguments] { '0': 1, '1': 2, '2': 3 }
//     return x * y;
// }

// console.log(multiply()); // NaN
// console.log(multiply(1)); // NaN
// console.log(multiply(1, 2)); // 2
// console.log(multiply(1, 2, 3)); // 2

// ----------------------------------------------------------------------

// 예제 18-05 ----------------------------------------------------------

// function multiply(x, y){

//     // 이터레이터
//     const iterator = arguments[Symbol.iterator]();
    
//     // 이터레이터의 next 메서드를 호출하여 이터러블 객체 arguments를 순회
//     console.log(iterator.next()); // { value: 1, done: false }
//     console.log(iterator.next()); // { value: 2, done: false }
//     console.log(iterator.next()); // { value: 3, done: false }
//     console.log(iterator.next()); // { value: undefined, done: true }

//     return x * y;
// }

// multiply(1, 2, 3);

// ----------------------------------------------------------------------

// 예제 18-06 ----------------------------------------------------------

// function sum(){
//    let res = 0;

//    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이므로 for 문으로 순회할 수 있음
//    for ( let i=0; i<arguments.length; i++){
//     res += arguments[i];
//    }

//    return res;
// }

// console.log(sum()); // 0
// console.log(sum(1, 2)); // 3
// console.log(sum(1, 2, 3)); // 6
// ----------------------------------------------------------------------

// 예제 18-07 ----------------------------------------------------------

// function sum() {
//     // arguments 객체를 배열로 변환
//     const array = Array.prototype.slice.call(arguments);
//     return array.reduce(function (pre, cur){
//         return pre + cur;
//     }, 0);
// }

// console.log(sum(1, 2)); // 3
// console.log(sum(1, 2, 3, 4, 5)); // 15
// ----------------------------------------------------------------------

// 예제 18-08 ----------------------------------------------------------
// ES6 Rest parameter
// function sum(...args) {
//     return args.reduce((pre, cur) => pre + cur, 0);
// }

// console.log(sum(1, 2)); // 3
// console.log(sum(1, 2, 3, 4, 5)); // 15
// ----------------------------------------------------------------------

// 예제 18-09 ----------------------------------------------------------
// function foo(func) {
//     return func();
// }

// function bar() {
//     return 'caller : ' + bar.caller;
// }

// console.log(foo(bar));
// // caller : function foo(func) {
// //     return func();
// // }
// console.log(bar()); // caller : null

// ----------------------------------------------------------------------

// 예제 18-10 ----------------------------------------------------------

// length 는 매개변수의 개수를 가리킴
// function foo() {}
// console.log(foo.length); // 0

// function bar(x) {
//     return x;
// }
// console.log(bar.length); // 1

// function baz(x, y){
//     return x*y;
// }
// console.log(baz.length); // 2

// ----------------------------------------------------------------------

// 예제 18-11 ----------------------------------------------------------

// 기명 함수 표현식
// var namedFunc = function foo() {};
// console.log(namedFunc.name); // foo

// 익명 함수 표현식
// var anonymousFunc = function () {};
// ES5 : name 프로퍼티는 빈 문자열을 값으로 갖음
// ES6 : name 프로퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖음
// console.log(anonymousFunc.name); // anonymousFunc

// 함수 선언문(Function declaration)
// function bar() {}
// console.log(bar.name); // bar

// ----------------------------------------------------------------------

// 예제 18-12 ----------------------------------------------------------

// const obj = { a : 1};

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype 임
// console.log(obj.__proto__ === Object.prototype); // true

// 객체 리터럴 방식으로 생성한 객체는 프로토타입 객체인 Object.prototype의 프로퍼티를 상속받음
// hasOwnProperty 메서드는 Object.prototype 의 메서드임

// console.log(obj.hasOwnProperty('a')); // true
// console.log(obj.hasOwnProperty('__proto__')); // false

// ----------------------------------------------------------------------

// 예제 18-13 ----------------------------------------------------------
// 함수 객체는 prototype 프로퍼티를 소유함
// console.log((function () {}).hasOwnProperty('prototype')); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않음
// console.log
// (({}).hasOwnProperty('prototype')); // false

// ----------------------------------------------------------------------

// 예제 19-01 ----------------------------------------------------------
// const person = {
//      name: 'Lee',
//      address: 'Seoul'
// };

// console.log(person); // { name: 'Lee', address: 'Seoul' }
// ----------------------------------------------------------------------

// 예제 19-02 ----------------------------------------------------------
// const circle = {
//      radius: 5, // 반지름
     
//      getDiameter () {
//           return 2* this.radius;
//      },

//      getPerimeter () {
//           return 2*Math.PI * this.radius;
//      },

//      getArea() {
//           return Math.PI * this.radius**2;
//      }
// };

// console.log(circle);
/*
{
  radius: 5,
  getDiameter: [Function: getDiameter],
  getPerimeter: [Function: getPerimeter],
  getArea: [Function: getArea]
}
*/
// console.log(circle.getDiameter()); // 10
// console.log(circle.getPerimeter()); // 31.41592653589793
// console.log(circle.getArea()); // 78.53981633974483
// ----------------------------------------------------------------------

// 예제 19-03 ----------------------------------------------------------

// 생성자 함수
// function Circle(radius){
//      this.radius = radius;
//      this.getArea = function() {
//           // Math.PI는 원주율을 사타내는 상수
//           return Math.PI * this.radius**2;
//      };
// }

// const circle1 = new Circle(1);

// const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때마다 동일한 동작을 하는
// getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유함
// getArea 메서드는 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직함

// console.log(circle1.getArea === circle2.getArea); // false
// console.log(circle1.getArea()); // 3.141592653589793
// console.log(circle2.getArea()); // 12.566370614359172
// ----------------------------------------------------------------------

// 예제 19-04 ----------------------------------------------------------

// 생성자 함수
// function Circle(radius){
//      this.radius = radius;
// }

// Circle 생성자 함수가 생성한 모든 인스턴스가 getArea 메서드를
// 공유해서 사용할 수 있도록 프로토타입에 추가
// 프로토타입은 Circle 생성자 함수의 prototype 프로퍼티에 바인딩 되어 있다
// Circle.prototype.getArea = function () {
//      return Math.PI * this.radius**2;
// }

// 인스턴스 생성
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토타입 Circle.prototype으로부터 getArea 메서드를 상속받음
// 즉, Circle 생성자 함수가 생성하는 모든 인스턴스는 하나의 getArea 메서드를 공유함

// console.log(circle1.getArea === circle2.getArea); // true
// console.log(circle1.getArea()); // 3.141592653589793
// console.log(circle2.getArea()); // 12.566370614359172
// ----------------------------------------------------------------------

// 예제 19-06 ----------------------------------------------------------

// const obj = {};
// const parent = {x: 1};

// getter 함수인 get __proto__ 가 호출되어 obj 객체의 프로토타입을 취득
// obj.__proto__;

// setter 함수인 set __proto__ 가 호출되어 obj 객체의 프로토타입을 교체
// obj.__proto__ = parent;

// console.log(obj.x); // 1
// ----------------------------------------------------------------------

// 예제 19-07 ----------------------------------------------------------

// const person = {name : 'Lee'};

// person 객체는 __proto__ 프로퍼티를 소유하지 않음
// console.log(person.hasOwnProperty('__proto__')); // false

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype 의 접근자 프로퍼티
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
/*
{
  get: [Function: get __proto__],
  set: [Function: set __proto__],
  enumerable: false,
  configurable: true
}
*/

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있음
// console.log({}.__proto__===Object.prototype); // true
// ----------------------------------------------------------------------

// 예제 19-08 ----------------------------------------------------------

// const parent = {};
// const child = {};

// child의 프로토타이을 parent로 설정
// child.__proto__ = parent;

// parent의 프로토타입을 child로 설정
// parent.__proto__ = child; // TypeError: Cyclic __proto__ value

// ----------------------------------------------------------------------

// 예제 19-09 ----------------------------------------------------------

// obj는 프로토타입 체인의 종점이다. 따라서 Object.__proto__를 상속받을수 없음
// const obj = Object.create(null); // undefined

// obj는 Object.__proto__ 를 상속받을 수 없다
// console.log(obj.__proto__); // null

// 따라서 __proto__보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다
// console.log(Object.getPrototypeOf(obj));

// ----------------------------------------------------------------------

// 예제 19-10 ----------------------------------------------------------

// const obj = {};
// const parent = { x: 1 };

// obj 객체의 프로토타입을 취득
// Object.getPrototypeOf(obj); // obj.__proto__;

// obj 객체의 프로토타입을 교체
// Object.setPrototypeOf(obj, parent); // obj.__proto__ = parent;

// console.log(obj.x); // 1

// ----------------------------------------------------------------------

// 예제 19-11 ----------------------------------------------------------

// 함수 객체는 prototype 프로퍼티를 소유함
// (function () {}).hasOwnProperty('prototype'); // true

// 일반 객체는 prototype 프로퍼티를 소유하지 않음
// ({}).hasOwnProperty('prototype'); // false

// ----------------------------------------------------------------------

// 예제 19-12 ----------------------------------------------------------

// 화살표 함수는 non-constructor
// const Person = name => {
//      this.name = name;
// };

// non-constructor는 prototype 프로퍼티를 소유하지 않음
// console.log(Person.hasOwnProperty('prototype')); // false

// non-constructor는 프로토타입을 생성하지 않음
// console.log(Person.prototype); // undefined

// ES6의 메서드 축약 표현으로 정의한 메서드는 non-constructor 
// const obj = {
//      foo() {}
// };

//non-constructor 는 prototype 프로퍼티를 소유하지 않음
// console.log(obj.foo.hasOwnProperty('prototype')); // false

//non-constructor는 프로토타입을 생성하지 않음
// console.log(obj.foo.prototype); // undefined

// ----------------------------------------------------------------------

// 예제 19-13 ----------------------------------------------------------

// function Person(name) {
//      this.name = name;
// }

// const me = new Person('Lee');

// 결국 Person.prototype과 me.__proto__는 결국 동일한 프로토타입을 가리킴
// console.log(Person.prototype === me.__proto__); // true

// ----------------------------------------------------------------------

// 예제 19-14 ----------------------------------------------------------

// 생성자 함수
// function Person(name) {
//      this.name = name;
// }

// me 객체의 생성자 함수는 Person 
// const me = new Person('Lee');

// console.log(me.constructor === Person); // true

// ----------------------------------------------------------------------

// 예제 19-15 ----------------------------------------------------------
// obj 객체를 생성자 함수는 Object
// const obj = new Object();
// console.log(obj.constructor === Object); // true

// add 함수 객체를 생성한 생성자 함수는 Function
// const add = new Function('a', 'b', 'return a+b');
// console.log(add.constructor === Function); // true

// 생성자 함수 
// function Person(name){
//   this.name = name;
// }

// me 객체를 생성한 생성자 함수 Person
// const me = new Person('Lee');
// console.log(me.constructor === Person); //true

// ----------------------------------------------------------------------

// 예제 19-16 ----------------------------------------------------------
// 객체 리터럴
// const obj = {};

// 함수 리터럴
// const add = function (a, b) {return a+b;};

// 배열 리터럴
// const arr = [1, 2, 3];

// 정규 표현식 리터럴
// const regexp = /is/ig;
// ----------------------------------------------------------------------

// 예제 19-17 ----------------------------------------------------------
// obj 객체는 Object 생성자 함수로 생성한 객첵가 아니라 객체 리터럴로 생성
// const obj = {};

// 하지만 obj 객체의 생성자 함수는 Object 생성자 함수
// console.log(obj.constructor === Object); // true
// ----------------------------------------------------------------------

// 예제 19-18 ----------------------------------------------------------
// 2. OBject 생성자 함수에 의한 객체 생성
// 인수가 전달되지 않았을 때 추상 연상 OrdinaryObjectCreate를 호출하여 빈 객체를 생성
// let obj = new Object();
// console.log(obj); // {}

// 1. new.target 이 undefined 나 Object가 아닌 경우
// 인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입 체인이 생성
// class Foo extends Object {}
// new Foo();

// 3. 인수가 전달된 경우에는 인수를 객체로 변환
// Number 객체 생성
// obj = new Object(123);
// console.log(obj); // [Number: 123]

// String 객체 생성
// obj = new Object('123');
// console.log(obj); //[String: '123']

// ----------------------------------------------------------------------

// 예제 19-19 ----------------------------------------------------------
// foo 함수는 FUnction 생성자 함수로 생성한 함수 객체가 아니라 함수 선언문으로 생성
// function foo() {}

// 하지만 constructor 프로퍼티를 통해 확인해보면 함수 foo의 생성자 함수는 Function 생성자 함수
// console.log(foo.constructor === Function); // true

// ----------------------------------------------------------------------

// 예제 19-20 ----------------------------------------------------------
// 함수 정의 (constructor)가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성됨
// console.log(Person.prototype); // 교재 - {constructor: f}, VScode - {}, Browser - {constructor: f}

// 생성자 함수
// function Person(name){
//   this.name = name;
// }

// ----------------------------------------------------------------------

// 예제 19-21 ----------------------------------------------------------
// 화살표 함수는 non-constructor
// const Person = name =>{
//   this.name = name;
// }

// non-constructor는 프로토타입이 생성되지 않음
// console.log(Person.prototype); // undefined

// ----------------------------------------------------------------------

// 예제 19-22 ----------------------------------------------------------
// 전역 객체 window는 브라우저에 종속적이므로 아래 코드는 브라우저 환경에서 실행
// 빌트인 객체인 Object는 전역 객체 window의 프로퍼티
// console.log(window.Object===Object) // Browser - true, VScode - ReferenceError: window is not defined

// ----------------------------------------------------------------------

// 예제 19-23 ----------------------------------------------------------
// const obj = {x:1};

// ----------------------------------------------------------------------

// 예제 19-28 ----------------------------------------------------------
// function Person(name){
//   this.name = name;
// }

// 프로토타입 메서드
// Person.prototype.sayHello = function() {
//   console.log(`Hi! My name is ${this.name}`);
// };

// const me = new Person('Lee');
// const you = new Person('Kim');

// me.sayHello(); // Hi! My name is Lee
// you.sayHello(); // Hi! My name is Kim

// ----------------------------------------------------------------------

// 예제 19-29 ----------------------------------------------------------
// function Person(name){
//   this.name = name;
// }

// // 프로토타입 메서드
// Person.prototype.sayHello = function() {
//   console.log(`Hi! My name is ${this.name}`);
// };

// const me = new Person('Lee');

// hasOwnProperty는 Object.prototype의 메서드
// console.log(me.hasOwnProperty('name')); // true

// ----------------------------------------------------------------------

// 예제 19-30 ----------------------------------------------------------
// Object.getPrototypeOf(me) === Person.prototype; // 19-29와 연결됨 - true
// ----------------------------------------------------------------------

// 예제 19-31 ----------------------------------------------------------
// Object.getPrototypeOf(Person.prototype) === Object.prototype; // 19-29와 연결됨 - true
// ----------------------------------------------------------------------

// 예제 19-32 ----------------------------------------------------------
// me.hasOwnProperty('name'); // 19-29와 연결됨 - true
// ----------------------------------------------------------------------

// 예제 19-33 ----------------------------------------------------------
// Object.prototype.hasOwnProperty.call(me, 'name'); // true
// ----------------------------------------------------------------------

// 예제 19-34 ----------------------------------------------------------
// console.log(me.foo) // undefined
// ----------------------------------------------------------------------

// 예제 19-35 ----------------------------------------------------------
// me.hasOwnProperty('name'); // true
// ----------------------------------------------------------------------


// 예제 19-36 ----------------------------------------------------------
// const Person = (function () {
//   // 생성자 함수
//   function Person(name) {
//     this.name = name;
//   };
  
//   // 프로토타입 메서드
//   Person.prototype.sayHello = function() {
//     console.log(`Hi! My name is ${this.name}`);
//   }

//   // 생성자 함수를 반환
//   return Person;
// }());

// const me = new Person('Lee');

// // 인스턴스 매서드
// me.sayHello = function() {
//   console.log(`Hey! My name is ${this.name}`);
// };

// // 인스턴스 메서드가 호출된다. 프로토타입 메서드는 인스턴스 메서드에 의해 가려진다.
// me.sayHello(); // Hey! My name is Lee

// // 예제 19-37 ----------------------------------------------------------
// // 인스턴스 메서드를 삭제
// delete me.sayHello;

// // 인스턴스에는 sayHello 메서드가 없으므로 프로토타입 메서드가 호출됨
// me.sayHello(); // Hi! My name is Lee

// // 예제 19-38 ----------------------------------------------------------
// // 프로토타입 체인을 통해 프로토타입 메서드가 삭제되지 않음
// delete me.sayHello;
// //프로토타입 메서드가 호출
// me.sayHello(); // Hi! My name is Lee

// // 예제 19-39 ----------------------------------------------------------
// // 프로토타입 메서드 변경
// Person.prototype.sayHello = function () {
//   console.log(`Hey! mY name is ${this.name}`);
// };
// me.sayHello(); // Hey! mY name is Lee

// // 프로토타입 메서드 삭제
// delete Person.prototype.sayHello;
// me.sayHello(); // TypeError: me.sayHello is not a function

// ----------------------------------------------------------------------

// 예제 19-40 ----------------------------------------------------------
// const Person = (function () {
//   function Person(name) {
//     this.name = name;
//   }
  
//   // 1. 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
//   Person.prototype = {
//     sayHello() {
//       console.log(`Hi My name is ${this.name}`);
//     }
//   };
  
//   return Person;
// }())

// const me = new Person('Lee');

// // 예제 19-41 ----------------------------------------------------------
// // 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴됨
// console.log(me.constructor === Person); // false
// // 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색됨
// console.log(me.constructor === Object); // true

// ----------------------------------------------------------------------

// 예제 19-42 ----------------------------------------------------------
// const Person = (function () {
//   function Person(name) {
//     this.name = name;
//   }
  
//   // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
//   Person.prototype = {
//     // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
//     constructor: Person,
//     sayHello() {
//       console.log(`Hi My name is ${this.name}`);
//     }
//   };
  
//   return Person;
// }())

// const me = new Person('Lee');

// console.log(me.constructor === Person); // true
// console.log(me.constructor === Object); // false
// ----------------------------------------------------------------------

// 예제 19-43 ----------------------------------------------------------
// function Person(name) {
//   this.name = name;
// }

// const me  = new Person('Lee');

// // 프로토타입으로 교체할 객체
// const parent = {
//   sayHello() {
//     console.log(`Hi! My name is ${this.name}`);
//   }
// };

// // 1. me 객체의 프로토타입을 parent 객체로 교체
// // Object.setPrototypeOf(me, parent);
// // 위 코드는 아래 코드와 동일하게 동작
// me.__proto__ = parent;

// me.sayHello(); // Hi! My name is Lee
// // 예제 19-44 ----------------------------------------------------------
// // 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴됨
// console.log(me.constructor === Person); // false
// // 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색됨
// console.log(me.constructor === Object); // true
// ----------------------------------------------------------------------

// 예제 19-45 ----------------------------------------------------------
// function Person(name) {
//   this.name = name;
// }

// const me  = new Person('Lee');

// // 프로토타입으로 교체할 객체
// const parent = {
//   // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
//   constructor: Person,
//   sayHello() {
//     console.log(`Hi! My name is ${this.name}`);
//   }
// };

// // 생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
// Person.prototype = parent;

// // me 객체의 프로토타입을 parent 객체로 교체
// Object.setPrototypeOf(me, parent); // === me.__proto__ = parent;

// me.sayHello(); // Hi! My name is Lee

// // constructor 프로퍼티가 생성자 함수를 가리킨다
// console.log(me.constructor === Person); // true
// console.log(me.constructor === Object); // false

// // 생성자 함수의 prototype 프로퍼티가 교체된 프로토타입을 가리킴
// console.log(Person.prototype === Object.getPrototypeOf(me)); // true
// ----------------------------------------------------------------------

// 예제 19-46 ----------------------------------------------------------
// 생성자 함수
// function Person(name) {
//   this.name = name;
// }

// const me = new Person('Lee');

// // Person.prototype 이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가
// console.log(me instanceof Person); // true
// // Object.prototype 이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가
// console.log(me instanceof Object); // true
// ----------------------------------------------------------------------

// // 예제 19-47 ----------------------------------------------------------
// // 생성자 함수
// function Person(name) {
//   this.name = name;
// }

// const me = new Person('Lee');

// // 프로토타입으로 교체할 객체
// const parent = {};

// // 프로토타입의 교체
// Object.setPrototypeOf(me, parent);

// // Person 생성자 함수와 parent 객체는 연결되어 있지 않음
// console.log(Person.prototype === parent); // false
// console.log(parent.constructor === Person); // false

// // Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 때문에 false로 평가
// console.log(me instanceof Person); // false

// // Object.prototype이 me 객체의 프로토타입 체인상에 존재하므로 true로 평가
// console.log(me instanceof Object); // true
// // ----------------------------------------------------------------------

// 예제 19-48 ----------------------------------------------------------
// 생성자 함수
// function Person(name) {
//   this.name = name;
// }

// const me = new Person('Lee');

// // 프로토타입으로 교체할 객체
// const parent = {};

// // 프로토타입의 교체
// Object.setPrototypeOf(me, parent);

// // Person 생성자 함수와 parent 객체는 연결되어 있지 않음
// console.log(Person.prototype === parent); // false
// console.log(parent.constructor === Person); // false

// // parent 객체를 Person 생성자 함수의 prototype 프로퍼티에 바인딩
// Person.prototype = parent;

// // Person.prototype이 me 객체의 프로토타입 체인 상에 존재하지 않기 때문에 true 평가
// console.log(me instanceof Person); // true

// // Object.prototype이 me 객체의 프로토타입 체인상에 존재하므로 true로 평가
// console.log(me instanceof Object); // true
// ----------------------------------------------------------------------

// 예제 19-49 ----------------------------------------------------------

// function Person(name) {
//   this.name = name;
// }

// const me = new Person('Lee');

// function isInstanceOf(instance, constructor){
//   // 프로토타입 취득
//   const prototype = Object.getPrototypeOf(instance);

//   // 재귀 탈출 조건
//   // prototype이 null이면 프로토타입 체인의 종점에 다다른 것
//   if (prototype === null) return false;

//   // 프로토타입이 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true를 반환
//   // 그렇지 않다면 재귀 호출로 프로토타입 체인 상의 상위 프로토타입으로 이동하여 확인
//   return prototype === constructor.prototype || isInstanceOf(prototype, constructor);
// }

// console.log(isInstanceOf(me, Person)); // true
// console.log(isInstanceOf(me, Object)); // true
// console.log(isInstanceOf(me, Array)); // false

// ----------------------------------------------------------------------

// 예제 19-50 ----------------------------------------------------------
// const Person = (function () {
//   function Person(name) {
//     this.name = name;
//   }

//   // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
//   Person.prototype = {
//     sayHello() {
//       console.log(`Hi! My name is ${this.name}`);
//     }
//   };

//   return Person;
// }());

// const me = new Person('Lee');

// // constructor 프로퍼티와 생성자 함수 간의 연결이 파괴되어도 instanceof는 아무런 영향을 받지 않음
// console.log(me.constructor === Person); // false

// // Person.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가됨
// console.log(me instanceof Person); // true
// // Object.prototype이 me 객체의 프로토타입 체인 상에 존재하므로 true로 평가됨
// console.log(me instanceof Object); // true
// ----------------------------------------------------------------------

// 예제 19-51 ----------------------------------------------------------
// 프로토타입이 null인 객체를 생성함. 생성된 객체는 프로토타입 체인의 종점에 위치
// obj -> null
// let obj = Object.create(null);
// console.log(Object.getPrototypeOf(obj) === null); // true
// // Object.prototype을 상속받지 못함
// console.log(obj.toString()); // TypeError: obj.toString is not a function

// // obj -> Object.prototype -> null
// // obj = {}; 와 동일함
// obj = Object.create(Object.prototype);
// console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// // obj -> Object.prototype -> null
// // obj = { x : 1 }; 과 동일함
// obj = Object.create(Object.prototype, {
//   x : { value: 1, writable: true, enumerable: true, configurable: true}
// });
// // 위 코드는 아래와 동일
// // obj = Object.create(Object.prototype);
// // obj.x = 1;
// console.log(obj.x); // 1
// console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// const myProto = {x : 10};
// // 임의의 객체를 직접 상속받음
// // obj -> myProto -> Object.prototype -> null
// obj = Object.create(myProto);
// console.log(obj.x);
// console.log(Object.getPrototypeOf(obj)===myProto); // true

// // 생성자 함수
// function Person(name) {
//   this.name = name;
// }

// // obj -> Person.prototype -> Object.prototype -> null
// // obj = new Person('Lee') 와 동일
// obj = Object.create(Person.prototype);
// obj.name = 'Lee';
// console.log(obj.name); // Lee
// console.log(Object.getPrototypeOf(obj) === Person.prototype); // true
// ----------------------------------------------------------------------

// 예제 19-52 ----------------------------------------------------------
// const obj = {a:1};

// console.log(obj.hasOwnProperty('a')) // true
// console.log(obj.propertyIsEnumerable('a')) // true
// ----------------------------------------------------------------------

// 예제 19-53 ----------------------------------------------------------
// 프로토타입이 null 인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성
// const obj = Object.create(null);
// obj.a = 1;

// console.log(Object.getPrototypeOf(obj) === null); // true

// // obj 는 Object.prototype의 빌트인 메서드를 사용할 수 없음
// console.log(obj.hasOwnProperty('a')); // TypeError: obj.hasOwnProperty is not a function
// ----------------------------------------------------------------------

// 예제 19-54 ----------------------------------------------------------
// 프로토타입이 null 인 객체, 즉 프로토타입 체인의 종점에 위치하는 객체를 생성
// const obj = Object.create(null);
// obj.a = 1;

// obj 는 Object.prototype의 빌트인 메서드를 사용할 수 없음
// console.log(obj.hasOwnProperty('a')); // TypeError: obj.hasOwnProperty is not a function

// Object.prototype의 빌트인 메서드는 객체로 직접 호출하지 않음
// console.log(Object.prototype.hasOwnProperty.call(obj, 'a')); // true
// ----------------------------------------------------------------------

// 예제 19-55 ----------------------------------------------------------
// const myProto = {x:10};

// 객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있음
// const obj ={
//   y: 20,
//   // 객체를 직접 상속받음
//   // obj -> myProty -> Object.prototype -> null
//   __proto__: myProto
// };
// 위 코드는 아래와 동일
// const obj = Object.create(myProto, {
//   y: {value: 20, writable: true, enumerable: true, configurable: true}
// });

// console.log(obj.x, obj.y); // 10 20
// console.log(Object.getPrototypeOf(obj) === myProto); // true
// ----------------------------------------------------------------------

// 예제 19-56 ----------------------------------------------------------
// 생성자 함수
// function Person(name) {
//   this.name = name;
// }

// // 프로토타입 메서드
// Person.prototype.sayHello = function() {
//   console.log(`Hi! My name is ${this.name}`);
// };

// // 정적 프로퍼티
// Person.staticProp = 'static prop';

// // 정적 메서드
// Person.staticMethod = function() {
//   console.log('staticMethod');
// };

// const me = new Person('Lee');

// // 생성자 함수에 추가한 정적 프로퍼티/메서드는 생성자 함수로 참조/호출 함
// Person.staticMethod(); // staticMethod

// // 정적 프로퍼티/메서드는 생성자 함수가 생성한 인스턴스로 참조/호출할 수 없음
// // 인스턴스로 참조/호출할 수 있는 프로퍼티/메서드는 프로토타입 체인 상에 존재해야 함
// me.staticMethod(); // TypeError: me.staticMethod is not a function

// ----------------------------------------------------------------------

// 예제 19-57 ----------------------------------------------------------
// Object.create는 정적 메서드
// const obj = Object.create({name : 'Lee'});

// Object.prototype.hasOwnProperty 는 프로토타입 메서드
// console.log(obj.hasOwnProperty('name')) // false
// ----------------------------------------------------------------------

// 예제 19-58 ----------------------------------------------------------
// function Foo() {}
  
// // 프로토타입 메서드
// // this를 참조하지 않는 프로토타입 메서드는 정적 메서드로 변경하여도 동일한 효과를 얻을 수 있음
// Foo.prototype.x = function() {
//   console.log('x');
// }

// const foo = new Foo();
// // 프로토타입 메서드를 호출하려면 인스턴스를 생성해야 함
// foo.x(); // x

// // 정적 메서드
// Foo.x = function() {
//   console.log('x');
// };

// // 정적 메서드는 인스턴스를 생성하지 않아도 호출할 수 있음
// Foo.x(); // x
// ----------------------------------------------------------------------

// 예제 19-59 ----------------------------------------------------------
// const person = {
//   name: 'Lee',
//   address: 'Seoul'
// };

// person 객체에 name 프로퍼티가 존재함
// console.log('name' in person); // true
// person 객체에 address 프로퍼티가 존재함
// console.log('address' in person); // true
// person 객체에 age 프로퍼티가 존재하지 않음
// console.log('age' in person); // false
// ----------------------------------------------------------------------

// 예제 19-60 ----------------------------------------------------------
// const person = {
//   name: 'Lee',
//   address: 'Seoul'
// };

// console.log('toString' in person); // true
// 예제 19-61 ----------------------------------------------------------
// console.log(Reflect.has(person, 'name')); // true 
// console.log(Reflect.has(person, 'toString'));  // false
// 예제 19-62 ----------------------------------------------------------
// console.log(person.hasOwnProperty('name'));  // true
// console.log(person.hasOwnProperty('age'));  // false
// 예제 19-63 ----------------------------------------------------------
// console.log(person.hasOwnProperty('toString')); // false
// ----------------------------------------------------------------------

// 예제 19-64 ----------------------------------------------------------
// const person = {
//   name: 'Lee',
//   address: 'Seoul'
// };

// for ... in 문의 변수 prop에 person 객체의 프로퍼티 키가 할당
// for (const key in person) {
//   console.log(key + ': '+ person[key]);
// }
// name: Lee
// address: Seoul

// ----------------------------------------------------------------------

// 예제 19-65 ----------------------------------------------------------
// const person = {
//   name: 'Lee',
//   address: 'Seoul'
// };

// in 연산자는 객체가 상속받은 모든 프로토타입의 프로퍼티를 확인
// console.log('toString' in person); // true

// for...in 문도 객체가 상속받은 모든 프로토타입의 프로퍼티를 열거함
// 하지만 toString과 같은 Object.prototype의 프로퍼티가 열거되지 않음
// for (const key in person) {
//   console.log(key+': '+person[key]);
// }
// name: Lee
// address: Seoul

// 예제 19-66 ----------------------------------------------------------
// Object.getOwnPropertyDescriptor 메서드는 프로퍼티 디스크립터 객체를 반환
// 프로퍼티 디스크립터 객체는 프로퍼티 어트리뷰트 정보를 담고 있는 객체
// console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));
// {
//   value: [Function: toString],
//   writable: true,
//   enumerable: false,
//   configurable: true
// }

// ----------------------------------------------------------------------

// 예제 19-67 ----------------------------------------------------------
// const person = {
//   name: 'Lee',
//   address: 'Seoul',
//   __proto__: {age: 20}
// };

// for (const key in person) {
//   console.log(key + ': '+ person[key]);
// }
// // name: Lee
// address: Seoul
// age: 20

// ----------------------------------------------------------------------

// 예제 19-68 ----------------------------------------------------------
// const sym = Symbol();
// const obj = {
//   a: 1,
//   [sym]: 10
// };

// for(const key in obj){
//   console.log(key + ': '+obj[key]); // a: 1
// }
// ----------------------------------------------------------------------

// 예제 19-69 ----------------------------------------------------------
// const person = {
//   name: 'Lee',
//   address: 'Seoul',
//   __proto__: {age: 20}
// };

// for (const key in person){
//   // 객체 자신의 프로퍼티인지 확인
//   if (!person.hasOwnProperty(key)) continue;
//   console.log(key+': '+ person[key]);
//   // name: Lee
//   // address: Seoul
// }
// ----------------------------------------------------------------------

// 예제 19-70 ----------------------------------------------------------
// const obj = {
//   2:2,
//   3:3,
//   1:1,
//   b: 'b',
//   a: 'a'
// };

// for (const key in obj){
//   if(!obj.hasOwnProperty(key)) continue;
//   console.log(key+': '+obj[key]);
// }
/* 
1: 1
2: 2
3: 3
b: b
a: a
*/
// ----------------------------------------------------------------------

// 예제 19-71 ----------------------------------------------------------
// const arr = [1, 2, 3];
// arr.x = 10; // 배열도 객체이므로 프로퍼티를 가질 수 있음

// for (const i in arr){
  // 프로퍼티 x도 출력
//   console.log(arr[i]); // 1 2 3 10
// };

// arr.length 는 3
// for(let i=0; i< arr.length; i++){
//   console.log(arr[i]); // 1 2 3
// }

// forEach 메서드는 요소가 아닌 프로퍼티는 제외
// arr.forEach(v => console.log(v)); // 1 2 3

// for...of는 변수 선언문에서 선언한 변수에 키가 아닌 값을 할당
// for(const value of arr){
//   console.log(value); // 1 2 3
// };
// ----------------------------------------------------------------------

// 예제 19-72 ----------------------------------------------------------
// const person = {
//   name: 'Lee',
//   address: 'Seoul',
//   __proto__: {age: 20}
// };

// console.log(Object.keys(person)); // [ 'name', 'address' ]
// 예제 19-73 ----------------------------------------------------------
// console.log(Object.values(person)); // [ 'Lee', 'Seoul' ]
// 예제 19-74 ----------------------------------------------------------
// console.log(Object.entries(person)); // [ [ 'name', 'Lee' ], [ 'address', 'Seoul' ] ]

// Object.entries(person).forEach(([key, value]) => console.log(key, value));
// name Lee
// address Seoul

// ----------------------------------------------------------------------

// 예제 20-01 ----------------------------------------------------------
// function foo() {
//   x = 10;
// }
// foo();

// console.log(x); // 10
// ----------------------------------------------------------------------

// 예제 20-02 ----------------------------------------------------------
// 'use strict'; // strict mode 적용

// function foo() {
//   x = 10;
// }
// foo();

// console.log(x); // ReferenceError: x is not defined
// ----------------------------------------------------------------------

// 예제 20-07 ----------------------------------------------------------
// (function (){
//   // non-strict mode
//   var let = 10; // 에러가 발생하지 않음

//   function foo(){
//     'use strict';

//     let = 20; // SyntaxError: Unexpected strict mode reserved word
//   }
//   foo();
// }());
// ----------------------------------------------------------------------

// 예제 20-08 ----------------------------------------------------------
// (function () {
//   'use strict';

//   x = 1;
//   console.log(x); // ReferenceError: x is not defined
// }());
// ----------------------------------------------------------------------

// 예제 20-09 ----------------------------------------------------------
// (function () {
//   'use strict';

//   var x = 1;
//   delete x; //SyntaxError: Delete of an unqualified identifier in strict mode.

//   function foo(a);{
//     delete a; // SyntaxError: Delete of an unqualified identifier in strict mode.
//   } 
//   delete foo; // SyntaxError: Delete of an unqualified identifier in strict mode.
// }());
// ----------------------------------------------------------------------

// 예제 20-10 ----------------------------------------------------------
// (function () {
//   'use strict';

//   function foo(x, x){ // SyntaxError: Duplicate parameter name not allowed in this context
//     return x+x;
//   }
//   console.log(foo(1,2));
// }());
// ----------------------------------------------------------------------

// 예제 20-11 ----------------------------------------------------------
// (function () {
//   'use strict';

//   with({ x : 1}){ // SyntaxError: Strict mode code may not include a with statement
//     console.log(x);
//   }
// }());
// ----------------------------------------------------------------------

// 예제 20-12 ----------------------------------------------------------
// (function () {
//   'use strict';

//   function foo() {
//     console.log(this); // undefined
//   }
//   foo();

//   function Foo() {
//     console.log(this); // Foo
//   }
//   new Foo();
// }());
// ----------------------------------------------------------------------

// 예제 20-13 ----------------------------------------------------------
// (function (a) {
//   'use strict';
//   // 매개변수에 전달된 인수를 재할당하여 변경
//   a =2;


//   console.log(arguments); // [Arguments] { '0': 1 } - 변경된 인수가 arguments 객체에 반영되지 않음
//   console.log(a); // 2
// }(1));
// ----------------------------------------------------------------------

// 예제 21-01 ----------------------------------------------------------
// // String 생성자 함수에 의한 String 객체 생성
// const strObj = new String('Lee'); // String {"Lee"}
// console.log(typeof strObj); // object
// console.log(strObj); // [String: 'Lee']

// // Number 생성자 함수에 의한 Number 객체 생성
// const numObj = new Number(123); // Number {123}
// console.log(typeof numObj); // object
// console.log(numObj); // [Number: 123]

// // Boolean 생성자 함수에 의한 Boolean 객체 생성
// const boolObj = new Boolean(true); // Boolean {true}
// console.log(typeof boolObj); // object
// console.log(boolObj); // [Boolean: true]

// // Function 생성자 함수에 의한 Function 객체(함수) 생성
// const func = new Function('x', 'return x*x'); // f anonymous(x)
// console.log(typeof func); // function
// console.log(func); // [Function: anonymous]

// // Array 생성자 함수에 의한 Array 객체(배열) 생성
// const arr = new Array(1, 2, 3); // (3) [1, 2, 3]
// console.log(typeof arr); // object
// console.log(arr); // [ 1, 2, 3 ]

// //RegExp 생성자 함수에 의한 RegExp 객체(정규 표현식) 생성
// const regExp = new RegExp(/ab+c/i) // /ab+c/i
// console.log(typeof regExp); // object
// console.log(regExp); // /ab+c/i

// // Date 생성자 함수에 의한 Date 객체 생성
// const date = new Date();
// console.log(typeof date); // object
// console.log(date); // 2023-03-20T12:43:00.492Z
// ----------------------------------------------------------------------

// 예제 21-02 ----------------------------------------------------------
// // String 생성자 함수에 의한 String 객체 생성
// const strObj = new String('Lee');

// // String 생성자 함수를 통해 생서한 strObj 객체의 프로토타입은 String.prototype이다.
// console.log(Object.getPrototypeOf(strObj) === String.prototype); // true
// ----------------------------------------------------------------------

// 예제 21-03 ----------------------------------------------------------
// Number 생성자 함수에 의한 Number 객체 생성
// const numObj = new Number(1.5);
// console.log(numObj); // [Number: 1.5]

// toFixed는 Number.prototype의 프로토타입 메서드
// Number.prototype.toFixed는 소수점 자리를 반올림하여 문자열로 반환
// console.log(numObj.toFixed()); // 2

// isInteger는 Number의 정적 메서드
// Number.isInteger는 인수가 정수(inter)인지 검사하여 그 결과를 Boolean으로 반환
// console.log(Number.isInteger(0.5)); // false
// ----------------------------------------------------------------------

// 예제 21-04 ----------------------------------------------------------
// const str = 'hello';

// // 원시 타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작
// console.log(str.length); // 5
// console.log(str.toUpperCase()); // HELLO
// ----------------------------------------------------------------------

// 예제 21-05 ----------------------------------------------------------
// const str = 'hi';

// 원시 타입인 문자열이 래퍼 객체인 String 인스턴스로 변환됨
// console.log(str.length); // 2
// console.log(str.toUpperCase()); // HI

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌림
// console.log(typeof str); // string
// ----------------------------------------------------------------------

// 예제 21-06 ----------------------------------------------------------
// 1. 식별자 str은 문자열을 값으로 가지고 있음
// const str = 'hello';

// 2. 식별자 str은 암묵적으로 생성된 래퍼 객체를 가리킴
// 식별자 str의 값 'hello'는 래퍼 객체의 [[StringData]] 내부 슬롯에 할당됨
// 래퍼 객체에 name 프로퍼티가 동적 추가
// str.name = 'Lee';

// 3. 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 가짐
// 이때 2번에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 됨

// 4. 식별자 str은 새롭게 암묵적으로 생성된(2번에서 생성된 래퍼 객체왕는 다른) 래퍼 객체를 가리킴
// 새롭게 생성된 래퍼 객체에는 name 프로퍼티가 존재하지 않음
// console.log(str.name); // undefined

// 5. 식별자 str은 다시 원래의 문자열, 즉 래퍼 객체의 [[StringData]] 내부 슬롯에 할당된 원시값을 가짐
// 이때 4번에서 생성된 래퍼 객체는 아무도 참조하지 않는 상태이므로 가비지 컬렉션의 대상이 됨
// console.log(typeof str, str); //string Hello
// ----------------------------------------------------------------------

// 예제 21-07 ----------------------------------------------------------
// const num = 1.5;

// 원시 타입인 숫자가 래퍼 객체인 Number 객체로 변환됨
// console.log(num.toFixed()); // 2

// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후, 다시 원시값으로 되돌림
// console.log(typeof num, num); // number 1.5
// ----------------------------------------------------------------------

// 예제 21-08 ----------------------------------------------------------
// console.log(globalThis === this) // false
// console.log(globalThis === global) // true
// -- browser
// console.log(globalThis === this) // true
// console.log(globalThis === window) // true
// console.log(globalThis === self) // true
// console.log(globalThis === frames) // true
// ----------------------------------------------------------------------

// 예제 21-09 ----------------------------------------------------------
// Browser 환경에서 동작
// 문자열 'F' 를 16진수로 해석하여 10진수로 변환하여 반환함
// window.parseInt('F', 16); // 15
// window.parseInt는 parseInt로 호출할 수 있음
// parseInt('F', 16); // 15

// console.log(window.parseInt === parseInt); // true
// ----------------------------------------------------------------------

// 예제 21-10 ----------------------------------------------------------
// var 키워드로 선언한 전역 변수
// var foo = 1;
// console.log(window.foo); // 1

// 선언하지 않은 변수에 값을 암묵적 전역. bar는 전역 변수가 안라 전역 객체의 프로퍼티
// bar = 2; // window.bar = 2
// console.log(window.bar); 

// 전역변수
// function baz() {return 3;}
// console.log(window.baz()); // 3

// ----------------------------------------------------------------------

// 예제 21-11 ----------------------------------------------------------
// -- browser 환경 확인
// let foo = 123;
// console.log(window.foo); // undefined

// ----------------------------------------------------------------------

// 예제 21-15 ----------------------------------------------------------
// 표현식인 문
// console.log(eval('1 + 2;')) // 3

// 표현식이 아닌 문
// console.log(eval('var x = 5;')) // undefined

// eval 함수에 의해 런타임에 변수 선언문이 실행되어 x 변수가 선언됨
// console.log(x); // 5

// 객체 리터럴은 반드시 괄호로 둘러쌈
// const o = eval('({a:1})');
// console.log(o); // { a: 1 }

// 함수 리터럴은 반드시 괄호로 둘러쌈
// const f = eval('(function() {return 1;})');
// console.log(f()); // 1

// 예제 21-16 ----------------------------------------------------------
// console.log(eval('1+2; 3+4;')) // 7
// ----------------------------------------------------------------------

// 예제 21-17 ----------------------------------------------------------
// const x = 1;

// function foo() {
//   // eval 함수는 런타임에 foo 함수의 스코프를 동적으로 수정
//   eval('var x = 2;');
//   console.log(x); // 2
// }

// foo();
// console.log(x); // 1
// ----------------------------------------------------------------------

// 예제 21-18 ----------------------------------------------------------
// const x = 1;
// function foo() {
//   'use strict';

  // strict mode 에서 eval 함수는 기존의 스코프를 수정하지 않고 eval 함수 자신의 자체적인 스코프를 생성
//   eval('var x =2; console.log(x);'); // 2
//   console.log(x); // 1
// }

// foo();
// console.log(x); // 1
// ----------------------------------------------------------------------

// 예제 21-19 ----------------------------------------------------------
// const x = 1;
// function foo() {
//   eval('var x = 2; console.log(x);'); // 2

  // let, const 키워드를 사용한 변수 선언문은 strict mode가 적용됨
//   eval('const x = 3; console.log(x);'); // 3
//   console.log(x); // 2
// }

// foo();
// console.log(x); // 1
// ----------------------------------------------------------------------

// 예제 21-20 ----------------------------------------------------------
// 인수가 유한수이면 true를 반환
// console.log(isFinite(0)); // true
// console.log(isFinite(2e64)); // true
// console.log(isFinite('10')); // true : '10' -> 10
// console.log(isFinite(null)); // true : null -> 0

// 인수가 무한수 또는 NaN으로 평가되는 값이면 false
// console.log(isFinite(Infinity)); // false
// console.log(isFinite(-Infinity)); // false

// 인수가 NaN으로 평가되는 값이라면 false 반환
// console.log(isFinite(NaN)); // false
// console.log(isFinite('Hello')); // false
// console.log(isFinite('2005/12/12')); // false

// 예제 21-21 ----------------------------------------------------------
// console.log(+null); // 0
// ----------------------------------------------------------------------

// 예제 21-22 ----------------------------------------------------------
// // 숫자
// console.log(isNaN(NaN)); // true
// console.log(isNaN(10)); // false

// // 문자열
// console.log(isNaN('blabla')); // true: 'blabla' => NaN
// console.log(isNaN('10')); // false : '10' => 10
// console.log(isNaN('10.12')); // false : '10.12' => 10.12
// console.log(isNaN('')); // false: '' => 0
// console.log(isNaN(' ')); // false: ' ' => 0

// // 불리언
// console.log(isNaN(true)); // false: true -> 1
// console.log(isNaN(null)); // false: null -> 0

// // undefined
// console.log(isNaN(undefined)); // true: undefined => NaN

// // 객체
// console.log(isNaN({})); // true: {} => NaN

// // date
// console.log(isNaN(new Date())); // false: new Date() => Number
// console.log(isNaN(new Date().toString())); // true : String => NaN
// ----------------------------------------------------------------------

// 예제 21-23 ----------------------------------------------------------
// 문자열을 실수로 해석하여 반환
// console.log(parseFloat('3.14')); // 3.14
// console.log(parseFloat('10.00')); // 10

// 공백으로 구분된 문자열은 첫 번째 문자열을 반환
// console.log(parseFloat('34 45 66')); // 34
// console.log(parseFloat('40 years')); // 40

// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환
// console.log(parseFloat('He was 40')); // NaN

// 앞뒤 공백은 무시됨
// console.log(parseFloat(' 60 ')) // 60

// ----------------------------------------------------------------------

// 예제 21-24 ----------------------------------------------------------
// 문자열을 정수로 해석하여 반환
// console.log(parseInt('10')); // 10
// console.log(parseInt('10.123')); // 10

// 예제 21-25 ----------------------------------------------------------
// 전달받은 인수가 문자열이 아니면 문자열로 반환한 다음, 정수로 해석하여 반환
// console.log(parseInt(10)); // 10
// console.log(parseInt(10.123)); // 10

// ----------------------------------------------------------------------

// 예제 21-26 ----------------------------------------------------------
// // '10'을 10 진수로 해석하고 그 결과를 10 진수 정수로 반환
// console.log(parseInt('10')); // 10
// // '10'을 2진수로 해석하고 그 결과를 10진수 정수로 반환
// console.log(parseInt('10', 2)); // 2
// // '10'을 8진수로 해석하고 그 결과를 10진수 정수로 반환
// console.log(parseInt('10', 8)); // 8
// // '10'을 16진수로 해석하고 그 결과를 10진수 정수로 반환
// console.log(parseInt('10', 16)); // 16
// ----------------------------------------------------------------------

// 예제 21-27 ----------------------------------------------------------
// const x = 15;

// 10진수 15를 2진수로 변환하여 그 결과를 문자열로 반환
// console.log(x.toString(2)); // 1111
// 문자열 '1111'을 2진수로 해석하고 그 결과를 10진수 정수로 반환
// console.log(parseInt(x.toString(2),2)); // 15

// 10진수 15를 8진수로 변환하여 그 결과를 문자열로 반환
// console.log(x.toString(8)); // 17
// 문자열 '17'을 8진수로 해석하고 그 결과를 10진수 정수로 반환
// console.log(parseInt(x.toString(8), 8)); // 15

// 10진수 15를 16진수로 변환하여 그 결과를 문자열로 변환
// console.log(x.toString(16)); // f
// 문자열 'f' 를 16진수로 해석하고 그 결과를 10진수 정수로 반환
// console.log(parseInt(x.toString(16), 16)); // 15

// 숫자값을 문자열로 반환
// console.log(x.toString()); // 15
// 문자열 '15'를 10진수로 해석하고 그 결과를 10진수 정수로 반환
// console.log(x.toString()); // 15

// 예제 21-28 ----------------------------------------------------------
// 16진수 리터럴 '0xf'를 16진수로 해석하고 10진수 정수로 그 결과를 반환
// console.log(parseInt('0xf')); // 15
// console.log(parseInt('f', 16)); // 15

// 예제 21-29 ----------------------------------------------------------
// 2진수 리터럴과 8진수 리터럴은 제대로 해석하지 못함
// console.log(parseInt('0b10')); // 0
// console.log(parseInt('0o10')); // 0
// ----------------------------------------------------------------------

// 예제 21-30 ----------------------------------------------------------
// 문자열 '10'을 2진수로 해석
// console.log(parseInt('10', 2)); // 2
// 문자열 '10'을 8진수로 해석
// console.log(parseInt('10', 8)); // 8

// 예제 21-31 ----------------------------------------------------------
// 'A'는 10진수로 해석할 수 없음
// console.log(parseInt('A0')); // NaN
// '2'는 2진수로 해석할 수 없음
// console.log(parseInt('20', 2)); // NaN
// ----------------------------------------------------------------------

// 예제 21-32 ----------------------------------------------------------
// 10진수로 해석할 수 없는 'A' 이후의 문자는 모두 무시
// console.log(parseInt('1A0')); // 1
// 2진수로 해설할 수 없는 '2' 이후의 문자는 모두 무시
// console.log(parseInt('102', 2)); // 2
// 8진수로 해석할 수 없는 '8' 이후의 문자는 모두 무시
// console.log(parseInt('58', 8)); // 5
// 16진수로 해석할 수 없는 'G' 이후의 문자는 모두 무시
// console.log(parseInt('FG', 16)); // 15
// ----------------------------------------------------------------------

// 예제 21-33 ----------------------------------------------------------
// 공백으로 구분된 문자열은 첫 번째 문자열만 변환
// console.log(parseInt('34 45 66')); // 34
// console.log(parseInt('40 years')); // 40
// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환
// console.log(parseInt('He was 40')); // NaN
// 앞뒤 공백은 무시됨
// console.log(parseInt(' 60 ')); // 60
// ----------------------------------------------------------------------

// 예제 21-34 ----------------------------------------------------------
// 완전한 URI
// const uri = 'http://example.com?name=이웅모&job=programmer&teacher';

// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩
// const enc = encodeURI(uri);
// console.log(enc);
// http://example.com?name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher

// 예제 21-35 ----------------------------------------------------------
// const dec = decodeURI(enc);
// console.log(dec);
// http://example.com?name=이웅모&job=programmer&teacher
// ----------------------------------------------------------------------

// 예제 21-36 ----------------------------------------------------------
// URI의 쿼리 스트링
// const uriComp = 'name=이웅모&job=programmer&teacher';

// encodeURIComponent 함수는 인수로 전달받은 문자열을 URI의 구성요소인 쿼리 스트링의 일부로 간주
// 따라서 쿼리 스트링 구분자로 사용되는 =, ?, &까지 인코딩함
// let enc = encodeURIComponent(uriComp);
// console.log(enc);
// name%3D%EC%9D%B4%EC%9B%85%EB%AA%A8%26job%3Dprogrammer%26teacher

// let dec = decodeURIComponent(enc);
// console.log(dec);
// name=이웅모&job=programmer&teacher

// encodeURI 함수는 인수로 전달받은 문자열을 완전한 URI로 간주
// 따라서 쿼리 스트링 구분자로 사용되는 =, ?ㅡ &를 인코딩 하지 않음
// enc = encodeURI(uriComp);
// console.log(enc);
// name=%EC%9D%B4%EC%9B%85%EB%AA%A8&job=programmer&teacher

// dec = decodeURI(enc);
// console.log(dec);
// name=이웅모&job=programmer&teacher
// ----------------------------------------------------------------------

// 예제 21-37 ----------------------------------------------------------
// var x =10; // 전역 변수
// function foo() {
  // 선언하지 않은 식별자에 값을 할당
//   y = 20; // window.y = 20;
// }

// foo();
// 선언하지 않은 식별자 y를 전역에서 참조할 수 있음
// console.log(x+y); // 30
// ----------------------------------------------------------------------

// 예제 21-38 ----------------------------------------------------------
// 전역 변수 x는 호이스팅이 발생함
// console.log(x); // undefined
// 전역 변수가 아니라 단지 전역 객체의 프로퍼티인 y는 호이스팅이 발생하지 않음
// console.log(y); // ReferenceError: y is not defined

// var x = 10;

// function foo() {
  // 선언하지 않은 식별자에 값을 할당
//   y = 20; // window.y = 20;
// }
// foo();

// 선언하지 않은 식별자 y를 전역에서 참조할 수 있음
// console.log(x+y); // 30
// ----------------------------------------------------------------------

// 예제 21-39 ----------------------------------------------------------
// var x = 10; // 전역 변수

// function foo () {
//   // 선언하지 않은 식별자에 값을 할당
//   y = 20; // window.y = 20;
//   console.log(x+y); // 30
// }

// foo();

// console.log(globalThis.x); // undefined -- node.js 환경에서는 var x로 선언하면 전역변수이지만 앞에..나왔던거처럼.. 따로 관리.......기억..가물..
// console.log(globalThis.y); // 20
// browser
// console.log(window.x); // 10
// console.log(window.y); // 20

// delete x; // 전역 변수는 삭제되지 않음
// delete y; // 프로퍼티는 삭제됨

// console.log(globalThis.x); // undefined
// console.log(globalThis.y); // undefined

// brower
// console.log(window.x); // 10
// console.log(window.y); // undefined
// ----------------------------------------------------------------------

// 예제 22-01 ----------------------------------------------------------
// const circle = {
  // 프로퍼티: 객체 고유의 상태 데이터
  // radius: 5,
  // 메서드: 상태 데이터를 참조하고 조작하는 동작
  // getDiameter() {
    // 이 메서드가 자신이 속한 객체의 프로퍼티나 다른 메서드를 참조하려면
    // 자신이 속한 객체인 circle을 참조할 수 있어야함
//     return 2* circle.radius;
//   }
// };

// console.log(circle.getDiameter()); // 10
// ----------------------------------------------------------------------

// 예제 22-02 ----------------------------------------------------------
// function Circle(radius) {
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없음
//   ????.radius = radius;
// }

// Circle.prototype.getDiameter = function() {
  // 이 시점에는 생성자 함수 자신이 생성할 인스턴스를 가리키는 식별자를 알 수 없음
//   return 2*????.radius;
// };

// 생성자 함수로 인스턴스를 생성하려면 먼저 생성자 함수를 정의
// const circle = new Circle(5);
// ----------------------------------------------------------------------

// 예제 22-03 ----------------------------------------------------------
// 객체 리터럴
// const circle = {
//   radius: 5,
//   getDiameter() {
//     // this는 메서드를 호출한 객체를 가리킴
//     return 2* this.radius;
//   }
// };

// console.log(circle.getDiameter()); // 10
// ----------------------------------------------------------------------

// 예제 22-04 ----------------------------------------------------------
// 생성자 함수
// function Circle(radius){
  // this는 생성자 함수가 생성할 인스턴스를 가리킴
//   this.radius = radius;
// }

// Circle.prototype.getDiameter = function () {
  // this는 생성자 함수가 생성할 인스턴스를 가리킴
//   return 2*this.radius;
// };

// 인스턴스 생성
// const circle = new Circle(5);
// console.log(circle.getDiameter()); // 10
// ----------------------------------------------------------------------

// 예제 22-05 ----------------------------------------------------------
// this는 어디서든지 참조 가능
// 전역에서 this는 전역 객체 window를 가리킴
// console.log(this); // VScode - {}, Browser - Window

// function square(number) {
  // 일반 함수 내부에서 this는 전역 객체 window를 가리킴
//   console.log(this); // <ref *1> Object [global]
//   return number*number;
// }
// square(2);

// const person = {
//   name: 'Lee',
//   getName() {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킴
//     console.log(this); // { name: 'Lee', getName: [Function: getName] }
//     return this.name;
//   }
// };
// console.log(person.getName()); // Lee

// function Person(name){
//   this.name = name;
  // 생성자 함수 내부에서 this는 생성자 함수가 생성할 인스턴스를 가리킴
//   console.log(this); // Person {name: "Lee"}
// }

// const me = new Person('Lee');
// ----------------------------------------------------------------------

// 예제 22-06 ----------------------------------------------------------
// this 바인딩은 함수 호출 방식에 따라 동적으로 결정
// const foo = function() {
//   console.dir(this); 
// };

// 동일한 함수도 다양한 방식으로 호출 가능

// 1. 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
// foo 함수 내부의 this는 전역 객체 window를 가리킴
// foo(); // <ref *1> Object [global]


// 2. 메서드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킴
// const obj = {foo};
// obj.foo(); // { foo: [Function: foo] }

// 3. 생성자 함수 호출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킴
// new foo(); // foo {}

// 4. Function.prototype.applye/call/bind 메서드에 의한 간접 호출
// foo 함수 내부의 this는 인수에 의해 결정
// const bar = {name : 'bar'};

// foo.call(bar); // { name: 'bar' }
// foo.apply(bar); // { name: 'bar' }
// foo.bind(bar)(); // { name: 'bar' }
// ----------------------------------------------------------------------

// 예제 22-07 ----------------------------------------------------------
// function foo() {
//   console.log("foo's this: ", this); // <ref *1> Object [global]
//   function bar() {
//     console.log("bar's this: ", this); // <ref *1> Object [global]
//   }
//   bar();
// }
// foo();
// ----------------------------------------------------------------------

// 예제 22-08 ----------------------------------------------------------
// function foo() {
//   'use strict';

//   console.log("foo's this: ", this); // undefined
//   function bar() {
//     console.log("bar's this: ", this); // undefined
//   }
//   bar();
// }
// foo();
// ----------------------------------------------------------------------

// 예제 22-09 ----------------------------------------------------------
// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티
// var value = 1;
// const 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티가 아니다
// const value = 1;

// const obj = {
//   value: 100,
//   foo(){
//     console.log("foo's this: ", this); // { value: 100, foo: [Function: foo] }
//     console.log("foo's this.value: ", this.value); // 100

//     // 메서드 내에서 정의한 중첩함수
//     function bar() {
//       console.log("bar's this: ", this); //  <ref *1> Object [global] - browser : window
//       console.log("bar's this.value: ", this.value); // undefined - browser : 1
//     }

//     bar();
//   }
// };

// obj.foo();
// ----------------------------------------------------------------------

// 예제 22-10 ----------------------------------------------------------
// var value = 1;

// const  obj = {
//   value: 100,
//   foo() {
//     console.log("foo's this: ", this); // { value: 100, foo: [Function: foo] }
//     // 콜백 함수 내부의 this에는 전역 객체가 바인딩됨

//     setTimeout(function() {
//       console.log("callback's this: ", this); // callback's this:  Timeout 
//       console.log("callback's this.vale: ", this.value); //undefined - browser : 1
      
//     }, 100);
//   }
// };

// obj.foo()
// ----------------------------------------------------------------------

// 예제 22-11 ----------------------------------------------------------
// var value = 1;

// const  obj = {
//   value: 100,
//   foo() {
//     // this 바인딩(obj)을 변수 that에 할당함
//     const that = this;

//     // 콜백 함수 내부에서 this 대신 that을 참조
//     setTimeout(function() {
//       console.log(that.value); // 100
//     }, 100);
//   }
// };

// obj.foo();
// ----------------------------------------------------------------------

// 예제 22-12 ----------------------------------------------------------
// var value = 1;

// const  obj = {
//   value: 100,
//   foo() {
//     // 콜백 함수 명시적으로 this를 바인딩함
//     setTimeout(function() {
//       console.log(this.value); // 100
//     }.bind(this), 100);
//   }
// };

// obj.foo();
// ----------------------------------------------------------------------

// 예제 22-13 ----------------------------------------------------------
// var value = 1;

// const  obj = {
//   value: 100,
//   foo() {
//     // 화살표 함수 내부의 this는 상위 스코프의 this를 가리킴
//     setTimeout(() => console.log(this.value), 100); // 100
//   }
// };

// obj.foo();
// ----------------------------------------------------------------------

// 예제 22-14 ----------------------------------------------------------
// const person = {
//   name : 'Lee',
//   getName() {
//     // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩됨
//     return this.name;
//   }
// };

// 메서드 getName을 호출한 객체는 person 임
// console.log(person.getName()); // Lee
// ----------------------------------------------------------------------

// 예제 22-15 ----------------------------------------------------------

// const person = {
//   name : 'Lee',
//   getName() {
//     // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩됨
//     return this.name;
//   }
// };

// 메서드 getName을 호출한 객체는 person 임
// console.log(person.getName()); // Lee

// const anotherPerson = {
//   name: 'Kim'
// };

// getName 메서드를 anotherPerson 객체의 메서드로 할당
// anotherPerson.getName = person.getName;

//getName 메서드를 호출한 객체는 anotherPerson 임
// console.log(anotherPerson.getName()); // Kim;

// getName 메서드를 변수에 할당
// const getName = person.getName; 

// getName 메서드를 일반함수로 호출
// console.log(getName()); // undefined - brwoser : ''
// 브라우저 환경에서는 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''
// Node.js 환경에서 this.name은 undefined
// ----------------------------------------------------------------------

// 예제 22-16 ----------------------------------------------------------

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.getName = function () {
//   return this.name;
// };

// const me = new Person('Lee');

// getName 메서드를 호출한 객체는 me
// console.log(me.getName()); // Lee

// Person.prototype.name = 'Kim';

// getName 메서드를 호출한 객체는 Person.prototype
// console.log(Person.prototype.getName()); // Kim
// ----------------------------------------------------------------------

// 예제 22-17 ----------------------------------------------------------
// 생성자 함수
// function Circle(radius) {
//   // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킴
//   this.radius = radius;
//   this.getDiameter = function () {
//     return 2*this.radius;
//   };
// }

// 반지름이 5인 Circle 객체를 생성
// const circle1 = new Circle(5);
// 반지름이 10인 Circle 객체를 생성
// const circle2 = new Circle(10);

// console.log(circle1.getDiameter()); // 10
// console.log(circle2.getDiameter()); // 20
// 예제 22-18 ----------------------------------------------------------
// new 연산자와 함께 호출하지 않으면 생성자 함수로 동작하지 않음
// const circle3 = Circle(15);

// 일반 함수로 호출된 Circle에는 반환문이 없으므로 암묵적으로 undefined를 반환
// console.log(circle3); // undefined

// 일반 함수로 호출된 Circle 내부의 this는 전역 객체를 가리킴
// console.log(radius); // 15

// ----------------------------------------------------------------------

// 예제 22-19 ----------------------------------------------------------
// function getThisBinding() {
//   return this;
// }

// this로 사용할 객체
// const thisArg = { a: 1};
// console.log(getThisBinding()); // <ref *1> Object [global]

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩
// console.log(getThisBinding.apply(thisArg)); // { a: 1 }
// console.log(getThisBinding.call(thisArg)); // { a: 1 }
// ----------------------------------------------------------------------

// 예제 22-20 ----------------------------------------------------------
// function getThisBinding() {
//   console.log(arguments);
//   return this;
// }

// this로 사용할 객체
// const thisArg = { a: 1};

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩
// apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달
// console.log(getThisBinding.apply(thisArg, [1, 2, 3]));
// [Arguments] { '0': 1, '1': 2, '2': 3 }
// { a: 1 }

// call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달
// console.log(getThisBinding.call(thisArg, 1,2,3));
// [Arguments] { '0': 1, '1': 2, '2': 3 }
// { a: 1 }

// ----------------------------------------------------------------------

// 예제 22-21 ----------------------------------------------------------
// function convertArgsToArray() {
//   console.log(arguments);

//   // arguments 객체를 배열로 변환
//   // Array.prototype.slice를 인수 없이 호출하면 배열의 복사본을 생성
//   // const arr = Array.prototype.slice.call(arguments);
//   const arr = Array.prototype.slice.apply(arguments);
//   console.log(arr); // [Arguments] { '0': 1, '1': 2, '2': 3 }

//   return arr;
// }

// convertArgsToArray(1, 2, 3) // [ 1, 2, 3 ]

// ----------------------------------------------------------------------

// 예제 22-22 ----------------------------------------------------------
// function getThisBinding() {
//   return this;
// }

// this로 사용할 객체
// const thisArg = { a: 1};

// bind 메서드는 첫번째 인수로 전달한 thisArg로 this 바인딩이 교체된
// getThisBinding 함수를 새롭게 생성해 반환
// console.log(getThisBinding.bind(thisArg)); // [Function: bound getThisBinding]

// bind 메서드는 함수를 호출하지는 않으므로 명시적으로 호출
// console.log(getThisBinding.bind(thisArg)()); // { a: 1 }

// ----------------------------------------------------------------------

// 예제 22-23 ----------------------------------------------------------
// const person = {
//   name: 'Lee',
//   foo(callback) {
//     // 1번
//     setTimeout(callback, 100);
//   }
// };

// person.foo(function() {
//   console.log(`Hi! my name is ${this.name}.`); // Hi! my name is undefined. - browser : Hi! my name is .
  // [Function: bound getThisBinding]
  // { a: 1 }
  // 일반 함수로 호출된 콜백 함수 내부의 this.name은 브라우저 환경에서 window.name과 같음
  // 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티이며 기본값은 ''임
  // Node.js환경에서 this.name은 undefined임
// })
// ----------------------------------------------------------------------

// 예제 22-24 ----------------------------------------------------------
const person = {
  name: 'Lee',
  foo(callback) {
    // bind 메서드로 callback 함수 내부의 this 바인딩을 전달
    setTimeout(callback.bind(this), 100);
  }
};

person.foo(function() {
  console.log(`Hi! my name is ${this.name}.`); // Hi! my name is Lee.
})
// ----------------------------------------------------------------------