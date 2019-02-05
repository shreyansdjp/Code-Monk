const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.stdin.resume();
process.stdin.setEncoding("utf-8");

function takeInput(done) {
    var inputCounter = 0;
    var stdin_input = [];
    rl.on('line', function (input) {
        stdin_input.push(input);
        inputCounter++;
        if (inputCounter == 2) {
            done(stdin_input);
            process.exit();
        }
    })
}

takeInput(function (input) {
    var number = parseInt(input[0]);
    var string = input[1];
    console.log(number*2);
    console.log(string);
}); 
