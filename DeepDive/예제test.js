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

var x =3;

switch (x){
    case 1:
        console.log("1");
        break;
    case 3:
        console.log("3");
        break;
    case 4:
        console.log("4");
        break;

    default:
        console.log("default");
}

foo:{
    console.log(1);
    break foo;
    console.log(2);
}

console.log('Done');

var string = 'Hello World.';
var search = 'l';
var count = 0;

for(var i=0; i < string.length; i++){
    if(string[i] !== search) continue;
    count++;
}

console.log(count);

const regexp = new RegExp(search, 'g'); // 'g'는 전체 문자열을 탐색해서 모든 일치를 반환하도록 지정하는 전역 탐색 flag 
console.log(regexp)
console.log(string.match(regexp))
console.log(string.match(regexp).length);

if ('') console.log('1'); // false
if (true) console.log('2'); // true
if (0) console.log('3'); // false
if ('str') console.log('4'); // true
if (null) console.log('5'); // false
