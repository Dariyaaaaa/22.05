// script.js

function login() {
  const login = document.getElementById('login').value;
  const password = document.getElementById('password').value;
  if (login && password) {
    // Перенаправление на страницу choice.html
    window.location.href = 'choice.html';
  } else {
    alert('Пожалуйста, введите логин и пароль.');
  }
}

