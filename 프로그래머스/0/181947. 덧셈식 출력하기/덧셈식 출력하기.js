const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = a + b;
    console.log(a + ' + ' + b + ' = ' + c);
});