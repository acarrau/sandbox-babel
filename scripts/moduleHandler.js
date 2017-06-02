var moduleIdToScriptMap = {
    1: "1-scopes.js",
    2: "2-decorators.js"
}

function runModule(moduleId) {
    var modulePath = "modules/" + moduleIdToScriptMap[moduleId]
    $("#script-source").attr("src", modulePath);
}