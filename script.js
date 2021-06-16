const nomes=[
    {nome:'Ricardo@gamil.com' ,senhas:3032},
    {nome:'ana@lohany.com' , senhas:32}
]

const email1=nomes.map(obj => obj.nome);
const senha1=nomes.map(obj => obj.senhas);
console.log(senha1);



function validar() {
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    if (email.value === "") {
        alert('email não informado 😐');

        //deixa o input com focus
        email.focus();

        //retorna a funcao e nao vai pra outras linhas
        return;

    }

    if (senha.value === "") {
        alert('Senha não informada 😐');

        //deixa o input com focus
        email.focus();

        //retorna a funcao e nao vai pra outras linhas
        return;

    }

    if (senha.value ==="12345" && email.value===email1[0]) {
        window.location.href = "http://www.youtube.com";
    }

}

