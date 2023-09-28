//Import the readline module as an ES Module from Node.js core
import readline from "readline";

// Initialise the readline module
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter the loan amount in the console
rl.question('Enter the value for loan amount in dollars ($0.00): ', (loanAmount) => {
  // Prompt the user to enter the interest rate in the console
  rl.question('Enter the value for interest rate as a percentage (%): ', (interestRate) => {
    // Prompt the user to enter the loan term in the console
    rl.question('Enter the value for loan term in months: ', (loanTerm) => {
      // Ask for user confirmation
      console.log('The values of loan amount, interest rate, and loan term are:', loanAmount, interestRate, loanTerm);
      rl.question('Do you want to proceed? Y/N: ',  (confirmation) => {
        
        if (confirmation === 'y' || confirmation ==='Y') {
          // Convert the interest rate to a monthly interest rate
      const monthlyInterestRate = interestRate / 12;

      // Calculate the monthly mortgage payment
      const monthlyPayment = (loanAmount * monthlyInterestRate * (1 + monthlyInterestRate)**loanTerm) / (((1 + monthlyInterestRate)**loanTerm) - 1);
 
       // Display the monthly mortgage payment
         console.log('The monthly mortgage payment is $' + monthlyPayment.toFixed(2));
        } 
          
        // Log salutation in the console
        console.log ('Thank you for your participation🌟🎉🌟')
        
         // Close the readline interface
        rl.close();

      })
    });
  });
});
