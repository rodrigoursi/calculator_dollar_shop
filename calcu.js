class calculadorDolar {
  constructor(iv,imp1,imp2,imp3) {
    this.iva=iv;
    this.pais=imp1;
    this.ganancia=imp2;
    this.bienesPersonales=imp3;
  }
}


var valor=document.getElementById('texto'); // traigo el campo
var boton=document.getElementById('btnp'); // traigo el boton
var selec=document.querySelector('select'); // traigo la eleccion
//var rhtml=document.getElementById('resultado'); // traigo el <p></p> parrafo donde pondre el resultado futuro
var rhtml=document.createElement('p');
var p2=document.querySelector('.p2');



var tation= new calculadorDolar(0,0.08,0.45,0.25);
var storeGoo= new calculadorDolar(0.21,0.30,0.45,0.25);

boton.addEventListener('click',calcular);


function calcular(){
  elec=selec.value; // extraigo el valor del objeto selec q antes habia traido desde select
  var resuliva;
  var resultado;
  can=parseFloat(valor.value);
  const objCalcu= new calculadorDolar(0,0.30,0.45,0.25);
  if(elec == 'goo') objCalcu.iva = 0.21;
  let totalImp = can * (objCalcu.iva + objCalcu.pais + objCalcu.ganancia + objCalcu.bienesPersonales);
  resultado = parseInt((totalImp + can)*dolar);
  rhtml.innerHTML="*** $ "+resultado+" PESOS ***";
  p2.appendChild(rhtml);
}
