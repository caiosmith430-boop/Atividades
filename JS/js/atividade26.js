const idade = 15;
let acesso = false;


if(idade <16){
    console.log('não pode votar')
}

else if(idade >=18){ 
    acesso = true  

   console.log('voto obrigatório')

}else{
   console.log('voto facultativo')
}
