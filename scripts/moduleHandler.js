function runModule(modulePath) {
    $("#console").html("");
    $("#script-source").attr("src", "modules/" + modulePath);
}

// Redefine the global console.log function to 
// print the output from the modules in the console div
var old = console.log;
console.log = function (line) {
    $("#console").append("<span>" + line + "</span><br />")
    old(line)
}
