class calculadorDolar {
  constructor(usd,iv,imp1,imp2) {
    this.dolar=usd;
    this.iva=iv;
    this.pais=imp1;
    this.ganancia=imp2;
  }
  calcular(){
    can=parseInt(valorp.value);
    resul=(this.dolar+this.iva+this.pais+this.ganancia)*can;
    document.write(resul);
  }
}

var valorp=document.getElementById('play');
var valorg=document.getElementById('goo');
var botonp=document.getElementById('btnp');
var botong=document.getElementById('btngoo');


var dolarr=112

var tation= new calculadorDolar(dolarr,dolarr*0.21,dolarr*0.08,dolarr*0.35);
var storeGoo= new calculadorDolar(dolarr,dolarr*0.21,dolarr*0.30,dolarr*0.35);

botonp.addEventListener('click',tation.calcular);
