document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede envio do formulário

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validação simples
  if (username === 'admin' && password === '1234') {
    window.location.href = 'portfolio.html';
  } else {
    document.getElementById('message').innerText = 'Usuário ou senha incorretos.';
  }
});

