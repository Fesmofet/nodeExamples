const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const formNickname = document.getElementById('formNickname');
const inputNick = document.getElementById('inputNick');
const messageButton = document.getElementById('messageButton');

let socket = new WebSocket("ws://localhost:8080");

formNickname.addEventListener('submit', function (e) {
  e.preventDefault();
  if (inputNick.value) {
    inputNick.value = '';
    messageButton.removeAttribute("disabled")
    input.removeAttribute("disabled")
    formNickname.parentNode.removeChild(formNickname)
  }
})

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    input.value = '';
  }
});

socket.on('chat message', function(msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
