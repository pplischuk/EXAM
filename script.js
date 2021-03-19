"use strict";

//1.Дано масив [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]; Знайти максимальне значення масиву.

// let arr = [1,5,7,8,9,0, -5, -55, 105, 0, 5, 299, 6 ,7]
// let a = [0];

// for(let i = 0; i < arr.length; i++){
// 	if(arr[i] > a){
// 		a = arr[i];
// 	}
// }
// console.log(a)

//2.Дано масив [“test”, 12, undefined, null, -5, “javascript”, “1”, false, true, 0 , “!”]. Створити новий масив де будуть тільки Стрінгові значення.

// let arr = ['test', 12, undefined, null, -5, 'javascript', '1', false, true, 0 , '!'];

// let stringArr = arr.filter(word => typeof(word) == 'string');

//  console.log(stringArr)

//3. Дано колекцію - [{name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"}, {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"}, {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}] – Вивести всіх юзерів з типом user. Вивести юзерів які мають хоббі hiking. Додати можливість додати нове поле для всіх юзерів – job (true/false);

// let objs = [
// {name: "Yura", age: 55, hobby: ["football", "ski", "hiking"], type: "Admin"},
// {name: "Yulian", age: 28, hobby: ["films", "games", "hiking"], type: "user"},
// {name: "Taras", age: 38, hobby: ["hunting", "TV", "javascript"], type: "user"}]

//Вивести всіх юзерів з типом user

// let users = {}

// for(let i = 0; i < objs.length; i++){
// 		if(objs[i].type === 'user'){
// 			users[i] = objs[i].name
// 		}
// }

// console.log(Object.values(users))

//Вивести юзерів які мають хоббі hiking

// let users = {};

// for(let i = 0; i < objs.length; i++){
// 	for(let j = 0; j < objs[i].hobby.length; j++)
// 			if(objs[i].hobby[j] === 'hiking'){
// 				users[i] = objs[i].name
// 			}
// 	}

// 	console.log(Object.values(users))

//Додати можливість додати нове поле для всіх юзерів – job (true/false);

// for(let key in objs){
// 	let qest = confirm('add new key?')
// 	if(qest){
// 		let qest2 = confirm('Do u have a job?')
// 		objs[key].job = qest2
// 	}
// }

// console.log(objs)

//Додати на сторінку івент який буде викидати алерт як тільки ми захочемо скопіювати текст з сторінки(додайте 1 рядок будь якого тексту) і сповіщати що це інтелектуальна власність власника.

// document.addEventListener('keyup',function(e){
// 	if(e.code === 'KeyC' && e.ctrlKey || metaKey){
// 		alert('its Intellectual Property, go out')
// 	}
// })

// https://restcountries.eu/rest/v2/all – АПІ endpoint для країн. Вивести нумерований список з іменами всіх країн та її столицею на сторінку, назву країни зробити великими буквами. 

