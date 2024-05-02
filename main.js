#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
console.log("********\t\n Welcome To The ATM \t\n********");
console.log("Insert Your ATM Card");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin code",
        type: "number",
    },
]);
//12345 === 1234 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct Pin Code You May Proceed Now");
    console.log(`Your Current Balance Is ${myBalance}`);
}
if (pinAnswer.pin === myPin) {
    let operations = await inquirer.prompt([
        {
            name: "options",
            type: "list",
            message: "Select Your Option",
            choices: ["withdraw", "check balance", "fastcash", "exit"],
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
        }
        else
            withdrawAns.amount < myBalance;
        {
            myBalance -= withdrawAns.amount;
            console.log("Now Your Remaining Balance Is" + myBalance);
        }
    }
    else if (operations.options === "check balance") {
        console.log(`Your Current Balance Is ${myBalance}`);
    }
    else if (operations.options === "fastcash") {
        let fastCashAns = await inquirer.prompt({
            name: "fast_opt",
            type: "list",
            message: "How Much Amount You Want To ?",
            choices: ["1000", "2000", "5000"],
        });
        if (fastCashAns.fast_opt === "1000") {
            myBalance -= fastCashAns.fast_opt;
            console.log(`Your Remaining Balance Is ${myBalance}`);
        }
        else if (fastCashAns.fast_opt === "2000") {
            myBalance -= fastCashAns.fast_opt;
            console.log(`Your Remaining Balance Is ${myBalance}`);
        }
        else if (fastCashAns.fast_opt === "5000") {
            myBalance -= fastCashAns.fast_opt;
            console.log(`Your Remaining Balance Is ${myBalance}`);
        }
    }
    else if (operations.options === "exit") {
        console.log(" Thanks For  Your Time.You May EXIT Now!!");
    }
}
else {
    console.log("INVALID PIN CODE");
}
