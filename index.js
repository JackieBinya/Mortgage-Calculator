//Import the readline module as an ES Module from Node.js core
import readline from "readline";
//Import npm module Chalk
import chalk from "chalk";

// Alias for the console.log method for shorter syntax
const log = console.log;

// Using Chalk to sylye errors and warnings in the console
const error = chalk.bold.red;
const warning = chalk.hex("#FFA500");

// Log the title of the program
log(chalk.cyanBright.bgMagentaBright.bold("Mortgage Calculator"));

// Initialise the readline module
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Display a warning message alerting users to only input integers or decimal numbers
log(
  warning.italic(
    "❗️❗️❗️All input amounts should be integers or decimal number format❗️❗️❗️"
  )
);

// Prompt the user to enter the loan amount in the console
rl.question(
  chalk.blueBright("Enter the value for loan amount in dollars ($0.00): "),
  (loanAmount) => {
    // Prompt the user to enter the interest rate in the console
    rl.question(
      chalk.blueBright(
        "Enter the value for interest rate as a percentage (%): "
      ),
      (interestRate) => {
        // Prompt the user to enter the loan term in the console
        rl.question(
          chalk.blueBright("Enter the value for loan term in months: "),
          (loanTerm) => {
            // Validate user input
            const errorMessage = validator({
              loanAmount,
              interestRate,
              loanTerm,
            });
            if (errorMessage) {
              log(error(errorMessage + " and try again"));
              // Log salutation in the console
              log(chalk.yellowBright("Thank you for your participation🌟🎉🌟"));

              // Close the readline interface
              rl.close();
            } else {
              // Ask for user confirmation
              log(
                "The values of loan amount, interest rate, and loan term are: " +
                  chalk.greenBright(`$${loanAmount}, `) +
                  chalk.greenBright(`${interestRate}% `) +
                  chalk.greenBright(`and ${loanTerm} months.`)
              );
              rl.question("Do you want to proceed? Y/N: ", (confirmation) => {
                if (confirmation === "y" || confirmation === "Y") {
                  // Convert the interest rate to a monthly interest rate
                  const monthlyInterestRate = interestRate / 12;

                  // Calculate the monthly mortgage payment
                  const monthlyPayment =
                    (loanAmount *
                      monthlyInterestRate *
                      (1 + monthlyInterestRate) ** loanTerm) /
                    ((1 + monthlyInterestRate) ** loanTerm - 1);

                  // Display the monthly mortgage payment
                  log(
                    "The monthly mortgage payment is " +
                      chalk.greenBright(`$${monthlyPayment.toFixed(2)}`)
                  );
                }

                // Log a salutation in the console
                log(
                  chalk.yellowBright("Thank you for your participation🌟🎉🌟")
                );

                // Close the readline interface
                rl.close();
              });
            }
          }
        );
      }
    );
  }
);

// Validator function to validate user inputs
const validator = ({ loanAmount, interestRate, loanTerm }) => {
  // Declare error variable
  let error = "";
  // Check if input values are not empty
  if (!loanAmount || !interestRate || !loanTerm) {
    error = "All input fields are required";
  }

  // Validate loan amount
  if (isNaN(Number(loanAmount)) || Number(loanAmount) === 0) {
    error = "Enter a valid loan amount";
  }

  // Validate loan term
  if (isNaN(Number(loanTerm)) || Number(loanTerm) === 0) {
    error = "Enter a valid loan term";
  }

  // Validate interest rate
  if (isNaN(Number(interestRate)) || Number(interestRate) === 0) {
    error = "Enter a valid interest rate";
  }
  return error;
};
