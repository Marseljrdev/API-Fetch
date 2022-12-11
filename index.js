//FAZENDO REQUISIÇÃO E OBTENDO RESPOSTA DE UMA API PUBLICA.

//realizando busca simples de usuarios...

// const url = 'https://reqres.in/api/users';

// fetch(url)
//     .then((response) => {
//         // console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })


//realizando busca simples de usuarios com objetos (methods and headers)...

// const url = 'https://reqres.in/api/users';

// fetch(url, {
//   method: 'GET',
//   headers: {
//     'Acept': 'application/json'
//   }  
// })
//     .then((response) => {
//         // console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })


//realizando busca simples de usuarios com objetos (methods and headers and body)...

// const url = 'https://reqres.in/api/users';

// fetch(url, {
//   method: 'POST',

//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
  
//   body: JSON.stringify({
//     "username": "DevTeste",
//     "email": "dev@teste.com",
//     "password": "devteste12345",
//   })

// })
//     .then((response) => {
//         // console.log(response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })


//tratamento de erro

const url = 'https://reqres.in/api/users/78910';

fetch(url, {
  method: 'GET',


})
    .then((response) => {
        // console.log(response);

        if (response.ok !== true) {
            console.log(`Pagina nao encontrada, status do erro: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
