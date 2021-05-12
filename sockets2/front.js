const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const formNickname = document.getElementById('formNickname');
const inputNick = document.getElementById('inputNick');
const messageButton = document.getElementById('messageButton');

const socket = new WebSocket("ws://localhost:8080");

formNickname.addEventListener('submit', function (e) {
  e.preventDefault();
  if (inputNick.value) {
    socket.send(JSON.stringify({method: 'setNickname', value: inputNick.value}))
    inputNick.value = '';
    messageButton.removeAttribute("disabled")
    input.removeAttribute("disabled")
    formNickname.parentNode.removeChild(formNickname)
  }
})

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.send(JSON.stringify({method: 'sendAll', value: input.value}))
    input.value = '';
  }
});

socket.onmessage = function(message) {
  let data;
  try {
    data = JSON.parse(message.data)
  } catch (error) {
    return console.log(error)
  }

  switch (data.type) {
    case 'generalChat':
      var item = document.createElement('li');
      item.textContent = data.value;
      messages.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
      break;
  }
};
