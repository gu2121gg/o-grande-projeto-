// Configuração do Firebase
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

function login() {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login bem-sucedido
      var user = userCredential.user;
      console.log("User logged in:", user);
      alert("Login bem-sucedido!");
      // Redirecionar para panel.html
      window.location.href = "Dashboard.html"; // Redireciona para a página do painel
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error("Error: ", errorCode, errorMessage);
      alert("Erro: " + errorMessage);
    });
}
