const args = process.argv.slice(2); //we cut the first two elements of the array, which are the path to the node executable and the path to the script file
//Write a script that prints My number: <first argument converted in integer> if the first argument can be converted to an integer:
if (!args[0] || isNaN(args[0])) {
    // Check if the first argument is not provided or is not a number
  console.log("Not a number");
}else if (args[0]) {
    console.log("My number: " + parseInt(args[0]));
}