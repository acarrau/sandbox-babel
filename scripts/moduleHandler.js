function runModule(modulePath) {
    document.getElementById("console").innerHTML = "";
    
    // Show original code in iframe
    document.getElementById("script-source").src = "modules/" + modulePath;

    // Actually execute module's transpiled code
    var script = document.createElement("script")
    script.setAttribute('src', "transpiled/" + modulePath);
    document.getElementsByTagName('head')[0].appendChild(script);        
}

// console.log redefinition:
//
// Redefine the global console.log function to 
// print the output from the modules in the console div
var old = console.log;
console.log = function (line) {
    document.getElementById("console").innerHTML += "<span>" + line + "</span><br />"
    // Call old console.log method
    old(line)
}
