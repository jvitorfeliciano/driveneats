let pratoPrincipal =0;
let bebidaPrincipal = 0;
let sobremesaPrincipal =0;
let pratoComprado;
let pratoValor=0;
let bebidaComprada;
let bebidaValor=0;
let sobremesaComprada;
let sobremesaValor=0;

function pratoEscolhido(prato){

 const itemSelecionado = document.querySelector('.prato_selecionado');
 const icon = document.querySelector('.prato_selecionado ion-icon');

 if (itemSelecionado !== null){
    icon.classList.add('escondido');
    itemSelecionado.classList.remove('prato_selecionado');
    pratoPrincipal = pratoPrincipal-1;  
 }

 prato.classList.add('prato_selecionado');
 const Pcomprado = document.querySelector('.prato_selecionado h2')
 const Pvalor = document.querySelector('.prato_selecionado span')
 pratoComprado = Pcomprado.innerHTML
 pratoValor = Number(Pvalor.innerHTML.replaceAll(',','.'))
 pratoPrincipal = pratoPrincipal + 1;

 const iconAtivo = document.querySelector('.prato_selecionado ion-icon');
 iconAtivo.classList.remove('escondido');

 if ( pratoPrincipal + bebidaPrincipal + sobremesaPrincipal === 3) {
   
   const finalizado = document.querySelector('.selecionarPedido')
   finalizado.classList.add('background_selecionado')
   const texto = document.querySelector('span');
   texto.innerHTML = 'Fechar pedido'
   
}
 
 }

function bebidaEscolhida(bebida){
   const itemEscolhido= document.querySelector('.bebida_selecionada');
   const icon = document.querySelector('.bebida_selecionada ion-icon');

   if (itemEscolhido !== null){
      icon.classList.add('escondido');
      itemEscolhido.classList.remove('bebida_selecionada');
      bebidaPrincipal = bebidaPrincipal-1;
   }

   bebida.classList.add('bebida_selecionada');
   const Bcomprado = document.querySelector('.bebida_selecionada h2')
   const Bvalor = document.querySelector('.bebida_selecionada span')
   bebidaComprada = Bcomprado.innerHTML
   bebidaValor = Number(Bvalor.innerHTML.replaceAll(',','.'))
   bebidaPrincipal = bebidaPrincipal + 1 ;

   const iconAtivo = document.querySelector('.bebida_selecionada ion-icon');
   iconAtivo.classList.remove('escondido'); 

   if ( pratoPrincipal + bebidaPrincipal + sobremesaPrincipal === 3) {
      
      const finalizado = document.querySelector('.selecionarPedido')
      finalizado.classList.add('background_selecionado')
      const texto = document.querySelector('span');
       texto.innerHTML = 'Fechar pedido'
     
   }
}


function sobremesaSelecionada(sobremesa){
 const itemSelecionado = document.querySelector('.sobremesa_selecionada');
 const ion = document.querySelector('.sobremesa_selecionada ion-icon');

if (itemSelecionado !== null){
   ion.classList.add('escondido');
   itemSelecionado.classList.remove('sobremesa_selecionada');
   bebidaPrincipal = bebidaPrincipal-1;
}

sobremesa.classList.add('sobremesa_selecionada');
const Scomprado = document.querySelector('.sobremesa_selecionada h2')
const Svalor = document.querySelector('.sobremesa_selecionada span')
sobremesaComprada = Scomprado.innerHTML
sobremesaValor = Number(Svalor.innerHTML.replaceAll(',','.'))
sobremesaPrincipal = sobremesaPrincipal + 1;

const iconAtivo = document.querySelector('.sobremesa_selecionada ion-icon');
iconAtivo.classList.remove('escondido');

if ( pratoPrincipal + bebidaPrincipal + sobremesaPrincipal === 3) {
  
   const finalizado = document.querySelector('.selecionarPedido')
   finalizado.classList.add('background_selecionado')
   const texto = document.querySelector('span');
   texto.innerHTML = 'Fechar pedido'
    
  }
  
}

function finalizarPedido(){
   if (pratoPrincipal + bebidaPrincipal + sobremesaPrincipal === 3)
      {  
         let  soma = (pratoValor + bebidaValor + sobremesaValor).toFixed(2)
         let  uri = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoComprado}\n- Bebida: ${bebidaComprada}\n- Sobremesa: ${sobremesaComprada}\nTotal: R$ ${soma}`
         let encoded = encodeURIComponent(uri)
         window.open('https://wa.me/5514998302563?text='+encoded)}
}



















  





