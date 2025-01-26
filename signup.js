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
  
  function signUp() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Usuário criado
        var user = userCredential.user;
        console.log("User signed up:", user);
        alert("Usuário criado com sucesso!");
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error: ", errorCode, errorMessage);
        alert("Erro: " + errorMessage);
      });
  }
  