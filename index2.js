//FAZENDO REQUISIÇÃO E OBTENDO RESPOSTA DE UMA API do Chuck Norris.


//recuperando uma piada aleatoria do chuck

const url = `https://api.chucknorris.io/jokes/random`;

fetch(url)
    .then((response) => {
        // console.log(response);
        return response.json();
    })
    .then((data) => {
        
        console.log(data);
        
        document.write('Piadas do chuck: <br> <br>');
        document.write(data.value);
        
    })
    