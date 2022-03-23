//readLine module -------------------

const { stdout } = require('process');
const readLine = require('readline');
const rl= readLine.createInterface({input: process.stdin, output: stdout});

let num1= Math.floor((Math.random() * 10) + 1);
let num2= Math.floor((Math.random() * 10) + 1);

let ans = num1 + num2;

rl.question(`What is  ${num1} + ${num2}? \n`, 
        (userInput) => {
            if(userInput.trim() == ans)
            rl.close();
            else{
            // console.log("Sorry the Correct answer is: " + ans);
            // rl.close();
            rl.setPrompt('Incorrect and try again \n');
            rl.prompt();
            rl.on('line' , (userInput) => {
                if(userInput.trim() == ans)
                rl.close();
                else{
                    rl.setPrompt(`The answer of ${userInput} is Incorrect \n`);
                    rl.prompt();
                }
            })
        }
        });

rl.on('close',()=> {
    console.log("Correct");
});


