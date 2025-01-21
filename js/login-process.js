document.getElementById("loginForm").addEventListener("submit", function(event) {
    // Prevenção do envio do formulário até que a validação seja feita
    event.preventDefault();

    // Obtendo os valores dos campos
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Variáveis para feedback de erro
    let formIsValid = true;

    // Resetando os estilos de erro
    document.getElementById("name").style.border = "";
    document.getElementById("email").style.border = "";
    document.getElementById("password").style.border = "";

    // Validação do nome (não pode ser vazio)
    if (name === "") {
        alert("O nome não pode estar vazio.");
        document.getElementById("name").style.border = "2px solid red";
        formIsValid = false;
    }

    // Validação do e-mail (deve ser um e-mail válido)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        document.getElementById("email").style.border = "2px solid red";
        formIsValid = false;
    }

    // Validação da senha (não pode ser vazia e deve ter pelo menos 6 caracteres)
    if (password === "" || password.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        document.getElementById("password").style.border = "2px solid red";
        formIsValid = false;
    }

    // Se todas as validações passaram, envia o formulário
    if (formIsValid) {
        alert("Formulário enviado com sucesso!");
        document.getElementById("loginForm").submit();
        document.getElementById("loginButton").addEventListener("click", function(){
            location.href = "dashboard.html";
        });
    }

    
});