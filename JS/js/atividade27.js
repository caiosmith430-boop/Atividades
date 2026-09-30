const senha = 123;
const usuario = 'admin1'

let acesso = false;

if(senha == 123 && usuario == 'admin1'){
   acesso = true

   console.log('permissão concedida')
}else{
   console.log('permissão negada')
}