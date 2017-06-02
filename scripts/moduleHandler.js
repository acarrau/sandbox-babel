function runModule(modulePath) {
    $("#console").html("");
    
    // Show original code in iframe
    $("#script-source").attr("src", "modules/" + modulePath);

    // Actually execute module's transpiled code
    var script = document.createElement("script")
    script.setAttribute('src', "transpiled/" + modulePath);
    document.getElementsByTagName('head')[0].appendChild(script);        
}

// Redefine the global console.log function to 
// print the output from the modules in the console div
var old = console.log;
console.log = function (line) {
    $("#console").append("<span>" + line + "</span><br />")
    old(line)
}
