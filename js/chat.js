/* chat.js */

function addMessage(title, text) {

    var messages = document.getElementById("messages");

    var heading = document.createElement("div");
    heading.className = "messageTitle";
    heading.innerHTML = title;

    var body = document.createElement("div");
    body.className = "messageText";
    body.innerHTML = text;

    messages.appendChild(heading);
    messages.appendChild(body);

    messages.scrollTop = messages.scrollHeight;
}

function clearMessages() {

    document.getElementById("messages").innerHTML = "";

}