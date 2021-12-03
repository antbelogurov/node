const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


// Task 1
//Создайте функцию f1, которая при запуске из массива ar1 создаем файл ar1.json в текущей папке.

const f1 = (ar) => {
    fs.writeFile('ar1.json',JSON.stringify(ar),(err)=> {
        console.log(err);
    })
};

const ar1 = {
    test: 1,
    code: 2
};

//  f1(ar1); 

// Task 2
//Создайте функцию f2, которая при запуске из массива ar2 создаем файл ar2.json в текущей папке.

const f2 = (ar) => {
    fs.writeFile('ar2.json',JSON.stringify(ar),(err)=> {
        console.log(err);
    })
};

const ar2 = [1, 2, 3];

//  f2(ar2);

// Task 3
//Создайте функцию f3, которая при запуске выводит содержимое файла j3.json в консоль.


const f3 = (ar) => {
    const j3 = require(`./${ar}`);
    console.log(j3);
};

//  f3('j3.json'); 

// Task 4
//Создайте функцию f4, которая при запуске выводит содержимое фnpm айла j4.csv в консоль.

const f4 = (ar) => {
    const results = [];

    fs.createReadStream(ar)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results);
      });
};

//  f4('j4.csv')

// Task 5
//Создайте функцию f5, которая при запуске записывает массив ar5 в CSV файл t5.csv. Имена колонок Car, Legal, Color. Разделитель - запятая.

const f5 = (ar) => {

    const csvWriter = createCsvWriter({
        path: 't5.csv',
        header: [
            {id: 'car', title: 'CAR'},
            {id: 'nn', title: 'NN'},
            {id: 'color', title: 'Color'}
        ]
    });
    csvWriter.writeRecords(ar)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
};


let ar5 = [
    {
        car: 'audi',
        nn: 'er5634p',
        color: 'red'
    },
    {
        car: 'bmw',
        nn: 'bb8234p',
        color: 'blue'
    },
]

// f5(ar5); 

// Task 6
//Создайте функцию f6, которая при запуске записывает массив ar5 в CSV файл t6.csv. Имена колонок Car, Legal, Color. Разделитель - точка с запятой.

const f6 = (ar) => {


    fs.writeFile('t6.csv','',(err)=> {
        console.log(err);
    })
    const csvWriter = createCsvWriter({
        path: 't6.csv',
        header: [
            {id: 'car', title: 'CAR'},
            {id: 'nn', title: 'NN'},
            {id: 'color', title: 'Color'}
        ]
    });
    csvWriter.writeRecords(ar)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
};

  f6(ar5);

// Task 7
//Создайте функцию f7, которая при запуске выводит содержимое файла t6.csv в консоль.

const f7 = (ar) => {
    const results = [];

    fs.createReadStream(ar)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results);

      });
};

 f7('t6.csv'); 
