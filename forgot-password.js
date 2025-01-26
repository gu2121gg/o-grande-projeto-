// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDG8aRL5AtR1dhetKR98-o3tzacxUH9PZ8",
    authDomain: "minecraft-5b0ce.firebaseapp.com",
    projectId: "minecraft-5b0ce",
    storageBucket: "minecraft-5b0ce.appspot.com",
    messagingSenderId: "217153186475",
    appId: "1:217153186475:web:393fd9c179cb25c090e5ee"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);

// Função de redefinição de senha
function resetPassword() {
    const email = document.getElementById("email").value;

    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Email de redefinição de senha enviado! Verifique sua caixa de entrada.");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Error: ", errorCode, errorMessage);
            alert("Erro: " + errorMessage);
        });
}
