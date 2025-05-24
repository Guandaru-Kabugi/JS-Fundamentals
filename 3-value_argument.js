const args = process.argv.slice(2); //we cut the first two elements of the array, which are the path to the node executable and the path to the script file
if (!args[0]) {
  console.log("No argument");
}else if (!args[1]) {
  console.log(args[0]);
}else {
  console.log("HBTN cool");
}