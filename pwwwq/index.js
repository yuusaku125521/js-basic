// const foo = document.getElementById('foo');

// const fooWidth = document.getElementById("foo").offsetWidth;

// const fooHeight = foo.offsetHeight;

// const fooArea = fooWidth * fooHeight;

// const foo1 = 200;

// let ber = 200;

// var baz = 200;
// const fooWidth1 = 100 //camelcase  ラクダ
// const foo_width = 111 //snake_case  ヘビ


// //constの特徴
// //最大できない、再定義できない

// const add = 32;


// const obj = {
//         foo: 123
// }

// console.log(obj.foo);

// obj.foo = 125;
// console.log(obj.foo);

// //let　の特徴
// //再代入できる。再定義できない
// ;
// let aff = 555;
// aff = 4554;

// //var の特徴
// //再代入できる。再定義できる


// var gg = 100;
// var gg = 200;

// //関数

// window.alert(); //alert　メソッド＝関数
// const baa = {
//         // alert ; function() {},
//         alert() { }, //<=　オススメはこっちらしい　（短縮記法）
// }

// //一般的な記法
// //function 関数名（仮引数１、仮引数２）{
// //色々。。
// // return 関数の返り値；}

// function cut(food) {
//         //切る処理
//         const cutFood = food.slice();
//         return cutFood;
// }
// const cutCarrot = cut(carrot);
// const cutPotato = cut(potato);

// function throwAway(food) {
//         //捨てる
//         delete food;

// }

//文字制限

// function isTweetable(text) {
//         return text.length <= 140;
// }

//"<=" は別で学習　　式　演算子

// console.log(isTweetable("foo"));

// function alertTweetable(text) {
//         if (text.length <= 140) {
//                 alert('you can tweet!!');
//         };
// };

// alertTweetable('foo');


//関数の再利用
// console.log(isTweetable("foo"));

// function alertTweetable(text) {
//         if (isTweetable(te)) {
//                 alert('you can tweet!!');
//         };
// };

// alertTweetable('foo');

//匿名関数

//関数式
// const isTweetable = function (text) {
//         return text.length <= 140;
// };


//コールバック関数

// function 高階関数（コールバック関数）｛
// コールバック関数（）「;
// }　　関数の中で関数を宣言

// function bring(food) {
//         if (手洗いが終えたら) {
//                 //食材を切る
//         }
// }



// //高階関数を使った関数処理


// function washed(fn, food) /* { 
//  if (手洗いが終えたら かつ　勉強)｛
//         fu(); コールバック関数の処理
// }
// }
// */
// function bring(food) {
//         //食材を持ってくる
// }
// function peer(food) {
//         //しょくざいの皮をむく
// }

// function cut(food) {
//         //食材を切る
// }

// 使うとき
// washed(bring);


// function unfollow() {
//         console.log("フォローを外しました")
// }

// const cancelTweet = function () {
//         console.log('ツイットをキャンセルしました。')
// }

// function confirmed(fn) {
//         const input = window.prompt('実行しますか？');
//         if (input === '実行') {
//                 fn();
//         }
// }

// confirmed(function () {
//         console.log("消去");
// });


// function confirmed(fn) {
//         const input = window.prompt('実行しますか？');

//         fn(input);
// }


// confirmed(function (input) {
//         if (input === '実行') {
//                 console.log("消去");
//         }
// });


// const btn = document.getElementById("button")

// btn.addEventListener('click', function () {
//         console, log('解除');
// });

// //ru-pu

// const foods = ['人参', 'ジャガイモ']

// foods.forEach(function (food) {
//         console.log('food')
// });

/**
 * web api
 * バックエンド
*/


// async function callApi() {
//         const res = await window.fetch("https://jsonplaceholder.typicode.com/users");
//         const users = await res.json();
//         console.log(users);
// }

// callApi();

// function callApi() {
//         const res = window.fetch("https://jsonplaceholder.typicode.com/users");
//         const users = await res.json();
//         console.log(users);
// }

// callApi();

// 互換性和はMDLをみる

