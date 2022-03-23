function save() {
    const name = document.getElementById("name").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    if (name && telefone && email) {
        document.getElementById("error").innerHTML = "";
        document.getElementById("saved-name").innerHTML = name;
        document.getElementById("saved-telefone").innerHTML = telefone;
        document.getElementById("saved-email").innerHTML = email;
        document.getElementById("name").value = "";
        document.getElementById("telefone").value = "";
        document.getElementById("email").value = "";
        localStorage.setItem("name", name);
        localStorage.setItem("telefone", telefone);
        localStorage.setItem("email", email);
    } else {
        const error = "Preencha os dados solicitados.";
        document.getElementById("error").innerHTML = error;
    }
}

function init() {
    const name = localStorage.getItem("name");
    const telefone = localStorage.getItem("telefone");
    const email = localStorage.getItem("email");
    if (name) {
        document.getElementById("saved-name").innerHTML = name;
    }
    if (telefone) {
        document.getElementById("saved-telefone").innerHTML = telefone;
    }
    if (email) {
        document.getElementById("saved-email").innerHTML = email;
    }
}