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

   /* var open_close_menu = () => {
        if(btn_open==0){
            menu1.classList.toggle("menu_side_move");
            btn_open=1;
           } else if (exit==0 && btn_open==1){
            menu1.classList.toggle("menu_side_move");
            btn_open=0;   
           }
    }*/
