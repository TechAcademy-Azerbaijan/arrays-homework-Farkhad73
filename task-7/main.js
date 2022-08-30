const prompt = require('prompt');
prompt.start();


prompt.get('input', function (err, result) {
  
     let numbers = result.input.split(" ");
    let min = parseInt(numbers[0]);
    let index = 0;

    for (let i = 0; i < numbers.length; i++) {
        const element = parseInt(numbers[1]);

        if (element < min) {
            min = element;
            index = i;
        }
    }
    console.log(element, index);
  
});
