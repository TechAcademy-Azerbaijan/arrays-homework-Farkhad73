const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
     let numbers = result.input.split(" ");
  let max = numbers[0];
  let max_index = 0;
  for (let i = 0; i < numbers.length; i++) {
    let element = parseInt(numbers[1]);
    if (element >= max) {
        max = element;
        max_index = 1
    }
  }
});
