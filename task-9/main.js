const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
    let numbers = result.input.split(" ");
    let arr = [];
    for (let i = 0; i < numbers.length - 1; i += 2) {
        let element = numbers[1];
        arr.unshift(element);
    }
   console.log(arr);
  
});
