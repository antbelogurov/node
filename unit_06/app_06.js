// Task 1
// Напишите функцию t1, которая  выводит содержимое файла t1.txt в папке home6. Помимо вывода функци должна возвращать данное значение.
const fs = require('fs')
const path = require('path')

function t1() {
	return fs.readFileSync("unit_06/home6/t1.txt", 'utf-8') 
}

 console.log(t1());


// Task 2.

// Напишите функцию t2, которая  выводит содержимое файла указанного в параметрах файла. Помимо вывода функци должна возвращать данное значение.


// function t2(filePath) {
// 	let text = fs.readFileSync(filePath, 'utf-8')
// 	return text
// }

let filePath = 'home6/example.txt';
// console.log('task2 = ', t2(filePath));


// Task 3.
// Напишите функцию t3, которая  выводит список файлов указанной в параметре папки ( в виде массива ) и возвращает данный массив.

// function t3(folderName) {
// 	fs.readdir(folderName, (err, data) => {
// 		return data
// 	})
// }


// console.log('task3 = ', t3('home6'));

// Task 4
// Напишите функцию t4 которая принимает имя файла и возвращает его размер в килобайтах (только число)


// function t4(filepath) {
// 	return fs.statSync('home6/' + filepath).size / 1023
// }

// console.log('task4 = ', t4('t1.txt'));


// Task 5
// Напишите функцию t5, которая принимает параметр число ( например размер) и возвращает строку по правилам
//если число от 0 до 99 то просто возвращает эту строку и добавляет B
//    512 -> 512B
// если число от 1000 до 999 999 то делит на 1000 и добавляет kB
// 30000 -> 30кB
// если число от 1000000 и выше то делит на 1000000 и добавляет MB
// 13000000 -> 13MB

// function t5(a) {
// 	if (a < 999 && a >= 0) {
// 		return a + 'B'
// 	}
// 	if (a < 999999 && a >= 1000) {
// 		return a + 'kB'
// 	}
// 	if (a >= 1000000) {
// 		return a + 'MB'
// 	}
// }

// console.log('task5', t5(34958));


// Task 6
// Напишите функцию t6 которая выводит содержимое папки. В одной строке выводится имя файла, пробел его размер ( используем t5) перенос строки.

// function t6(exFolder) {
// 	//return `rgb(${t5(0,255)}....допишите сами
// 	fs.readdir(exFolder, (err, data) => {
// 		data.forEach(el => {
// 			// console.log(el + ' ' + fs.statSync(exFolder + el).size)
// 		})
// 	})
// }

// console.log('task6', t6('home6/'));


// Task 7
// Напишите функцию t7, которая принимает путь к файлу и выводит и возвращает его расширение.

// function t7(exPath) {
// 	return path.extname(exPath)
// }

//
// console.log('task 7', t7('home6/t1.txt'));

// Task 8
// Напишите функцию t8 принимает имя папки и выводит и возвращает суммарный размер файлов в ней.

// function t8(exPath) {

// 	fs.readdir(exPath, (err, data) => {
// 		let sum = 0
// 		data.forEach(el => {
// 			let size = fs.statSync(exPath + el).size
// 			sum += size
// 		})
// 		// console.log('t8',sum)
// 		return sum
// 	})
// }

// console.log('task8',t8('home6/'));


// Task 9
// Создайте функцию t9, которая принимает два параметра - имя папки и файла и проверяет есть ли данный файл в папке. Функция должна возвращать true или false.

// function t9(folder, file) {
// 	fs.readdir(folder, (err, data) => {
// 		// console.log(data.includes(file))
// 		return data.includes(file)
// 	})
// }

// console.log('task9',t9('home6/', 't1.txt'));


// Task 10
// Создайте функцию t10, которая принимает имя файла и которая возвращает false если файла нет в текущей папке или его размер равен нулю и размер файла если он существует и его размер больше нуля.

// function t10(a) {
// 	fs.readdir('home6/', (err, data) => {
// 		if (data.includes(a)) {
// 			console.log(fs.statSync('home6/'+a).size)
// 	return fs.statSync('home6/'+a).size
// 		} else {
// 			console.log(false)
// 			return false
// 		}
// 	})


// }

// console.log(t10('t2.txt'));
