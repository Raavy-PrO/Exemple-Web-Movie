var btn = document.getElementById('btn');
var seachInput = document.getElementById('inputs');
var containerMovies = document.getElementById('container-movies');
var titleMovie = document.getElementsByClassName('title-f'); //container titulos
var cardOne = document.getElementById('card-one');
var cardTwo = document.getElementById('card-two');
var MovieNotFound = document.getElementById('mv-not');


var filmeOne;
var filmeTwo;

MovieNotFound.style.display = 'none';

console.log(titleMovie.length);

for (let i=0; i<titleMovie.length; i++){
    var txt = titleMovie[i].children; 

    if(i == 0 ){
        console.log('Chegou aqui #1');
        filmeOne = txt[0].innerHTML;
    }
    else if(i == 1){
        console.log('Chegou aqui #2');
        filmeTwo = txt[0].innerHTML;
    }
}

console.log(filmeOne +'  ' + filmeTwo);


var filmes = [
    filmeOne,
    filmeTwo
];



function filterItems(query) {
    return filmes.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
}


btn.onclick = function(){
    var nome = seachInput.value;
    var filmeDigitado = filterItems(nome);
    if(seachInput.value == filmeDigitado){
        if(filmeDigitado == filmeOne){
            cardOne.style.display = 'block';
            cardTwo.style.display = 'none';
            MovieNotFound.style.display = 'none';
        }
        if(filmeDigitado == filmeTwo){
            cardOne.style.display = 'none';
            cardTwo.style.display = 'block';
            MovieNotFound.style.display = 'none';
        }
        seachInput.value = '';
    }
    else{
        alert('Filme não encontrado')
        cardOne.style.display = 'none';
        cardTwo.style.display = 'none';
        MovieNotFound.style.display = 'block';
    }
}





