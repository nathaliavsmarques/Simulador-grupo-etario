  
let dogsAge = document.querySelector('#agetxt'); 
let txt = document.querySelector('#txt');
let btn = document.querySelector('#btn');
let img = document.createElement('img');

function verificar( ) {    
    let age = Number(dogsAge.value); 

    if (age === 0 || age < 0) {
        window.alert(`ERRO! Por favor digite uma idade válida.`);
    } else if (age <= 1 ) {
        txt.innerHTML = `Seu/Sua cachorro(a) é filhote.`
        img.setAttribute('src', 'imagens/filhote_pequeno.jpg' );        
    } else if (age >= 1 && age < 3 ) {
        txt.innerHTML = `Seu/Sua cachorro(a) é adolescente.`
        img.setAttribute('src','imagens;adolescente.jpg' );
    } else if ( age >= 3 && age <10 ) {
        txt.innerHTML = `Seu/Sua cachorro(a) é adulto(a).`
        img.setAttribute('src', 'imagens/adulto_pequeno.jpg');
    } else {
        txt.innerHTML = `Seu/Sua cachorro(a) é idoso(a).`
        img.setAttribute('src', 'imagens/idoso_pequeno.jpg');
    }

    txt.appendChild(img);
    img.style.maxWidth = '25rem';
    img.style.maxHeight = '25rem';
    img.style.display = 'block';
    img.style.margin ='auto';
    img.style.borderRadius = '2rem';

    
}; 
  




 
        
    
