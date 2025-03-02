// Firebase Configuração
const firebaseConfig = {
  apiKey: "AIzaSyCEMPhNQA5YHXclK6FoETnAdmv8yVoBQiI",
  authDomain: "login-614bc.firebaseapp.com",
  projectId: "login-614bc",
  storageBucket: "login-614bc.firebasestorage.app",
  messagingSenderId: "370960817964",
  appId: "1:370960817964:web:cefcccccc3d22862349689"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Função de login
function login() {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      console.log("User logged in:", user);
      alert("Login bem-sucedido!");
      window.location.href = "Dashboard.html"; // Redirecionar para painel
    })
    .catch((error) => {
      var errorMessage = error.message;
      console.error("Erro: ", errorMessage);
      alert("Erro: " + errorMessage);
    });
}

// Funções de alternância para login/cadastro
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
