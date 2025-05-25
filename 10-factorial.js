const args = process.argv.slice(2); //we cut the first two elements of the array, which are the path to the node executable and the path to the script file
function factorial(n) {
    if (!args[0]) {
        return 1; // If no argument is provided, return 1
    }else{
        n = parseInt(n);
        let result = 1;
        for(let i = 1; i <= n; i++) { // Loop from 1 to n
            result *= i; // Multiply result by i
        }
        return result; // Return the final result
         }
}
console.log(factorial(args[0])); // Call the factorial function with the first argument
// and print the result
