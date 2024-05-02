#! /usr/bin/env node
import inquirer from "inquirer";
 
import chalk from "chalk";

let myBalance = 10000; // Dollar
let myPin = 1234;
console.log(chalk.blue.bold.bgCyan("************** Welcome To The ATM ************"));
console.log(chalk.yellow.italic("Insert Your ATM Card"));

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin code",
    type: "number",
  },
]);


//12345 === 1234 - false

if (pinAnswer.pin === myPin) {
  console.log(chalk.red.underline("Correct Pin Code You May Proceed Now"));
  console.log(chalk.green(`Your Current Balance Is ${myBalance}`));
}
if (pinAnswer.pin === myPin) {
  let operations = await inquirer.prompt([
    {
      name: "options",
      type: "list",
      message:chalk.yellow.bgWhite ("Select Your Option"),
      choices: ["withdraw", "check balance", "fastcash"],
    },
  ]);

  if (operations.options === "withdraw") {
    let withdrawAns = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter Your Desire Amount To Withdraw",
        type: "number",
      },
    ]);

    if (withdrawAns.amount > myBalance) {
      console.log("Please Enter Valid Amount According To Your Balance");
    } else withdrawAns.amount < myBalance;
    {
      myBalance -= withdrawAns.amount;
      console.log(chalk.yellowBright("Now Your Remaining Balance Is" + myBalance));
    }
      }
     else if(operations.options === "check balance") {
      console.log(chalk.yellowBright(`Your Current Balance Is ${myBalance}`));
    } else if (operations.options === "fastcash") {
      let fastCashAns = await inquirer.prompt({
        name: "fast_opt",
        type: "list",
        message: "How Much Amount You Want To ?",
        choices: ["1000", "2000", "5000"],
      });
      if (fastCashAns.fast_opt === "1000") {
        myBalance -= fastCashAns.fast_opt;
        console.log(chalk.yellowBright(`Your Remaining Balance Is ${myBalance}`));
      } else if (fastCashAns.fast_opt === "2000") {
        myBalance -= fastCashAns.fast_opt;
        console.log(chalk.yellowBright(`Your Remaining Balance Is ${myBalance}`));
      } else if (fastCashAns.fast_opt === "5000") {
        myBalance -= fastCashAns.fast_opt;
        console.log(chalk.yellowBright(`Your Remaining Balance Is ${myBalance}`));
      }
    }
    else
  {
  console.log(chalk.blue.bold.bgCyan("Invalid PIN code"));
}
}

console.log(chalk.yellowBright("You May EXIT Now!!"));

console.log(chalk.blue.bold.bgCyan("******************* THANK YOU ***********************"));