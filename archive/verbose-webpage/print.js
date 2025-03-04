/**
 * Log to page in format:
 * `[scriptName] text`
 * @param {String} scriptName
 * @param {String} text
 */
function log (scriptName, text){
    var logs = document.getElementById('logs');
    var textNode = document.createTextNode('[' + scriptName + ']: ' + text);
    var br = document.createElement('br');

    logs.appendChild(textNode);
    logs.appendChild(br);
}
