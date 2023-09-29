//Import the readline module as an ES Module from Node.js core
import readline from "readline";
//Import npm module Chalk
import chalk from 'chalk';

// Chalk Variables
const log = console.log;
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');

// Log the title of the program
log(chalk.cyanBright.bgMagentaBright.bold('Mortgage Calculator'));

// Initialise the readline module
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

log(warning.italic("❗️❗️❗️All input amounts should be integers or decimal number format❗️❗️❗️"))

// Prompt the user to enter the loan amount in the console
rl.question(chalk.blueBright('Enter the value for loan amount in dollars ($0.00): '), (loanAmount) => {
  // Prompt the user to enter the interest rate in the console
  rl.question(chalk.blueBright('Enter the value for interest rate as a percentage (%): '), (interestRate) => {
    // Prompt the user to enter the loan term in the console
    rl.question(chalk.blueBright('Enter the value for loan term in months: '), (loanTerm) => {
      // Ask for user confirmation
      console.log('The values of loan amount, interest rate, and loan term are:' + chalk.greenBright(`$${loanAmount} `) + chalk.greenBright(`${interestRate}% `) +  chalk.greenBright(`and ${loanTerm} months.`));
      rl.question('Do you want to proceed? Y/N: ',  (confirmation) => {
        
        if (confirmation === 'y' || confirmation ==='Y') {
          // Convert the interest rate to a monthly interest rate
      const monthlyInterestRate = interestRate / 12;

      // Calculate the monthly mortgage payment
      const monthlyPayment = (loanAmount * monthlyInterestRate * (1 + monthlyInterestRate)**loanTerm) / (((1 + monthlyInterestRate)**loanTerm) - 1);
 
       // Display the monthly mortgage payment
         log('The monthly mortgage payment is ' + chalk.greenBright(`$${monthlyPayment.toFixed(2)}`));
        } 
          
        // Log salutation in the console
        log (chalk.yellowBright('Thank you for your participation🌟🎉🌟'))
        
         // Close the readline interface
        rl.close();

      })
    });
  });
});
