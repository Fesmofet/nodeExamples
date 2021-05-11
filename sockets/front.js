const socket = io();

const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const formNickname = document.getElementById('formNickname');
const inputNick = document.getElementById('inputNick');

formNickname.addEventListener('submit', function (e) {
  e.preventDefault();
  if (inputNick.value) {
    socket.emit('chat nickName', inputNick.value);
    inputNick.value = '';
  }
})

form.addEventListener('submit', function(e) {

  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', function(msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
