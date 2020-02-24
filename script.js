const messages = document.querySelector('.messages');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input input');
const person = prompt("Please enter your name: ");

btn.addEventListener('click', sendMessage);
input.addEventListener('keyup', function (evt) {
    if (evt.keyCode == 13) sendMessage();
})

function sendMessage() {
    const msg = input.value;
    input.value = ''
    writeLine(msg);
}

function addMessage(evt) {
    console.log(evt);
    const msg = evt.data ? JSON.parse(evt.data) : evt;
    writeLine(`${msg.FROM}: ${msg.MESSAGE}`);
}

function writeLine(text) {
    const message = document.createElement('div');
    message.classList.add('message');
    message.innerHTML = `${person}: ${text}`;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}