document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  // Validação simples
  if (username === "admin" && password === "1234") {
    message.style.color = "green";
    message.textContent = "Login bem-sucedido!";
  } else {
    message.style.color = "red";
    message.textContent = "Usuário ou senha incorretos.";
  }
});
