const args = process.argv.slice(2); //we cut the first two elements of the array, which are the path to the node executable and the path to the script file
//we print two arguments concatenated with is
if (!args[0]) {
  console.log("undefined is undefined");
}
else if (!args[1]) {
  console.log(args[0] + " is undefined");
} else {
    console.log(args[0] + " is " + args[1]);
    }