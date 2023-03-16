// ** Agregar Menu desplegable ASIDE y BOTON TOGGLE topnav ** //
let main__toggle = document.querySelector('.btn-c');
let aside = document.querySelector('.aside');
let main = document.querySelector('.main');
let fadexMovil = document.querySelector('.fadex-movil');


main__toggle.onclick = function(){
  aside.classList.toggle('active-tam');
  fadexMovil.classList.add('fadex');
  main.classList.toggle('active-tam');
  main__toggle.classList.toggle('btn-c-rotate');

} 

//** Remover Menu desplegable ASIDE y BOTON TOGGLE topnav ** //
let main__togglex = document.querySelector('.btn-close-c');
let asidex = document.querySelector('.aside');
let mainx = document.querySelector('.main');
let fadexMovilx = document.querySelector('.fadex-movil');

main__togglex.onclick = function(){
  asidex.classList.remove('active-tam');
  mainx.classList.remove('active-tam');
  fadexMovilx.classList.remove('fadex');
} 


// ** Animacion icono de Menu usuario topnav ** //
function check_abrir(x, y){
  if(x == 1){
    $(".dropdowni").toggleClass("active-dropdowni-menu")
  }else if(x == 2){
    if($(".dropdowni").hasClass("active-dropdowni-menu")){
            //$(".dropdowni").toggleClass("active-dropdowni_menu")
      console.log("tiene")
    }
  }
}

$(".dropdowni-menu").attrchange({
        trackValues: true, /* Default to false, if set to true the event object is 
                updated with old and new value.*/
  callback: function (event) { 
            //event               - event object
            //event.attributeName - Name of the attribute modified
            //event.oldValue      - Previous value of the modified attribute
            //event.newValue      - New value of the modified attribute
            //Triggered when the selected elements attribute is added/updated/removed
    if(event.attributeName=="class"){
      $(".dropdowni").toggleClass("active-dropdowni-menu")
    }
  } 
})
let dropdowni_menu = document.querySelector('.dropdowni');
