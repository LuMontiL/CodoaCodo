
//Ejecuto evento
document.getElementById("btn_open").addEventListener("click", open_close_menu);
//Ejecuto salida
document.getElementById("boton").addEventListener("click", open_close_menu);
//asi sera? buscar en google-

// Declaro variables para menu desplegable
var menu1 = document.getElementById("MenuPrincipal");
var btn_open = document.getElementById ("btn_open");
var body = document.body;
btn_open=0;

//Variable para salir del menu desplegado
var exit =document.getElementById ("boton");
var exit=0;
var exit1=document.body;
var exit1=0;

//tengo que hacer que se pueda sair del menu, haciendo click en el body.
//Evento para mostrar y ocultar el menu. 


function open_close_menu () {   
        if(btn_open==0){
            menu1.classList.toggle("menu_side_move");
            btn_open=1;
           } else if (exit==0 && exit1==0 && btn_open==1){
            menu1.classList.toggle("menu_side_move");
            btn_open=0;   
           }
    }  

document.getElementById("footerJs").innerHTML = `

    <nav class="footer-mini">

    <ol class="foot">
    <li class="foot-item"><a href="index.html">INICIO</a></li>
    <li class="foot-item"><a href="productos.html">PRODUCTOS</a></li>
    <li class="foot-item"><a href="contacto.html">CONTACTO</a></li>
    </ol>

    <ol class="foot">
    <li class="foot-item"><a href="index.html">Twitter</a></li>
    <li class="foot-item"><a href="index.html">Facebook</a></li>
    <li class="foot-item"><a href="index.html">Instagram</a></li>
    </ol>
    </nav>
    
    <div class="footer2">
    <p>Derechos reservados @LourdesMontiLeloutre </p>
    </div>`

//FORMULARIO CONTACTO 

    var form=document.getElementById("contacto");
    var elementos =form.elements;
    var submit= document.getElementById("boton-contacto");
    var alerta= document.getElementById("advertencia");
    var alerta= "";

    form.addEventListener ('submit',validar) 

function valNombre (e){
    if (form.nombre.value.length < 4) {
       alert("ingrese nombre valido");
       e.preventDefault();
       alerta+= "nombre valido";
       alerta.style.color=red;
    }
    
}  


function valMail (e){
    if (form.mail.value.length < 4) {
       alert("ingrese mail valido");
       e.preventDefault();
    }
    
}  


function valConsulta (e){
    if (form.consulta.value.length < 10) {
       alert("ingrese consulta valida");
       e.preventDefault();
    }
    
}  

function valCheck (e){
  if (form.terminos.checked== false){
      alert("Acepte terminos y condiciones");
      e.preventDefault();
  }
    
}  

function validar (e){
    valNombre(e);
    valMail (e);
    valConsulta (e);
    valCheck(e);

}




/*let footer=
`<footer class="grid-container">


    <nav class="footer-mini">
    <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="index.html">Inicio</a></li>
    <li class="breadcrumb-item"><a href="productos.html">Productos</a></li>
    <li class="breadcrumb-item"><a href="contacto.html">Contacto</a></li>
    </ol>
    </nav>
    
    
    <div class="footer"> 

    <div class="item-contact">
    <i class='bx bx-copyright contact-icon'></i>
    <h5 class="contact-title"> Copyright © 2021 - </br> Veterinaria Patitas </br> </br> Todos los derechos
        reservados.</h5>
    </div>

    <div class="item-contact">
    <i class='bx bxs-phone contact-icon'></i>
    <h5 class="contact-title"> <a href="https://wa.me/+5493537687557" target="_blank">3537687557</a></h5>
    </div>

    <div class=" item-contact">
    <i class='bx bx-mail-send contact-icon'></i>
    <h5 class="contact-title"><a
            href="mailto:veterinaria.patitas@gmail.com?Subject=Interesado%20en%20su%20servicio">veterinaria.patitas@gmail.com</a>
    </h5>
    </div>

    <div class=" item-contact"> <i class='bx bx-map contact-icon'></i><h5 class="contact-title"> <a href="https://goo.gl/maps/Lxz724P9fqSjRZ2WA" target="_blanck">Sucre 275 Córdoba, Argentina </a></h5></div></div> 


</footer>`
document.getElementById("footerJs").innerHTML=footer;*/



/*document.getElementById("boton-contacto").addEventListener("click", datoCorrecto );


const form= document.getElementById("contacto")
var alerta= document.getElementById("advertencia")
alerta.value="";
var submit= document.getElementById("boton-contacto")
submit==0;
   
const nomb= document.getElementById("nombre")
const mail= document.getElementById("mail")
const clave= document.getElementById("consulta")



function datoCorrecto (nombre){
    
    
    if (nombre.value.length <6 && submit==1){
        console.log ("nombre no valido")
        alerta.value= "nombre no valido"
       
    } else if (nombre.value.length > 6 && submit==1 ){
        console.log ("valido")   
        alerta.value= "valido"
    }
    return alerta;
}

datoCorrecto(nomb);





/*let hed=
`<header class="grid-container">
    <nav class="header-mini"><h3>10% off transferencia bancaria| 3-6 cuotas sin interés| Envío gratis desde $16000</h3></nav>
        <div class="header"> 
            <i class="fa-solid fa-bars" id="btn_open"></i>  <div class="card1"><h1>LOURDES</h1></div> <i class="fa-solid fa-cart-shopping"id="compra"></i>
        </div>         
</header>`
        
document.getElementById("headerJs").innerHTML=hed;
const hed1= document.getElementById("headerJs");
hed1.style.backgroundColor= "black";
hed1.style.display= "grid";
hed1.style.position= "fixed";
hed1.style.width= "calc(100% - 40px)";
hed1.style.height= "15%";
hed1.style.margin = "0%";  
hed1.style.grid-template-rows= "0.5fr 1fr";
hed1.style.grid-template-columns= "1fr";
hed1.style.align-content= "center";
hed1.style.z-index= "100";
*/





   /* var open_close_menu = () => {
        if(btn_open==0){
            menu1.classList.toggle("menu_side_move");
            btn_open=1;
           } else if (exit==0 && btn_open==1){
            menu1.classList.toggle("menu_side_move");
            btn_open=0;   
           }
    }*/
  

    /*creo objetos: formulario iniciado vacio y expresiones que determinan parametros 
    para rellenar los campos en blanco*/
    /*const valido ={
        nombre:false,
        mail:false,
        clave:false,
        fecha:false,
    }*/

    /*const expresiones = {
        nombre: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        clave: /^.{4,12}$/, // 4 a 12 digitos.
    }


    /*funciones para la pagina de registro*/

  
    
    
    /*agrego evento a la constante form (que es el formulario)*/

    /*form.addEventListener ('submit', (e)=>{
        e.preventDefault()
        let alerta=[];
        if (nombre.value.lenght <6){
            alerta.push ('El nombre ingresado es muy corto');
        }
    })*/
/*document.getElementById("boton-registro").addEventListener("click", reg);

   function reg (nombre) {
   reg.preventDefault()
   alerta="";
    if (nombre.value.length < 6) {
        alerta += "El nombre ingresado es muy corto";
    } else{
        console.log ("registro")
    }
   
}*/