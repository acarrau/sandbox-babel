const menuOptions = {
    "1": "ES6 Block Scoping"
}

console.log()
console.log("Welcome to the babel sandbox")
console.log("Please enter the menu option you wish to run:")
console.log()

showMenuOptions()
readUserSelectedMenuOption()

function showMenuOptions() {
    Object.keys(menuOptions).forEach(function (meunOptionKey) {
        const option = menuOptions[meunOptionKey]
        console.log(`${meunOptionKey} - ${option}`)
    });
}

function readUserSelectedMenuOption() {
    const readLine = require('readline').createInterface({
        input: process.stdin
    });

    readLine.on('line', (line) => {
        console.log("You selected: ", line)
        readLine.close()
        validateSelectedOption(line)
    });
}

function validateSelectedOption(line) {
    if (menuOptions[line]) {
        // TODO: Execute module
    } else {
        console.log()
        console.log("Please enter a valid option: ")
        showMenuOptions()
        readUserSelectedMenuOption()
    }
}