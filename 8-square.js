const args = process.argv.slice(2); //we cut the first two elements of the array, which are the path to the node executable and the path to the script file
if(!args[0] || isNaN(args[0])) {
  // Check if the first argument is not provided or is not a number
  console.log("Missing size");
}else if (args[0]) {
    // If the first argument is provided and is a number
    const num = parseInt(args[0]);
    if (num <= 0) {
        console.log("Size must be a positive integer");
    } else {
        for (let i = 0; i < num; i++) {
        let row = '';
        for (let j = 0; j < num; j++) {
            row += 'X';
        }
        console.log(row);
        }
    }
    }