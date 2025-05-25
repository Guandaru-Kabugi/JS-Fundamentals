const args = process.argv.slice(2); //we cut the first two elements of the array, which are the path to the node executable and the path to the script file
function add(a, b) {
        a = parseFloat(a);
        b = parseFloat(b);
        let result =  a + b;
        console.log(result);
    }
if(!args[0] || isNaN(args[0])) {
  // Check if the first argument is not provided or is not a number
  console.log(NaN);
}else if (args[0] && args[1]) {
    add(args[0], args[1]);
}else{
    console.log(NaN);
}