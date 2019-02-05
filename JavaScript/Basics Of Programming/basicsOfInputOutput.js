process.stdin.resume();
process.stdin.setEncoding("utf-8");

var stdin_input = [];
var inputCounter = 0;
process.stdin.on('data', function (input) {
    inputCounter++;
    stdin_input.push(input);
    if (inputCounter == 2) {
        process.exit();
    }
});

process.on('exit', function () {
    var number = parseInt(stdin_input[0]);
    var string = stdin_input[1];
    number *= 2;
    /*
    process.stdout.write(number.toString() + '\n');
    process.stdout.write(string);
    */
    console.log(number);
    console.log(string);
});
