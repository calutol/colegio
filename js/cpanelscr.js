// Efecto hover ASIDE //
let list = document.querySelectorAll('.aside__li');
function activeLink(){
  list.forEach((item) =>
    item.classList.remove('hovered'));
  this.classList.add('hovered');
}
list.forEach((item) =>
  item.addEventListener('mouseover',activeLink));

// ** Animacion icono de Menu usuario topnav ** //
function check_abrir(x, y){
  if(x == 1){
    $(".dropdowni").toggleClass("active-dropdowni_menu")
  }else if(x == 2){
    if($(".dropdowni").hasClass("active-dropdowni_menu")){
            //$(".dropdowni").toggleClass("active-dropdowni_menu")
      console.log("tiene")
    }
  }
}

$(".dropdowni_menu").attrchange({
        trackValues: true, /* Default to false, if set to true the event object is 
                updated with old and new value.*/
  callback: function (event) { 
            //event               - event object
            //event.attributeName - Name of the attribute modified
            //event.oldValue      - Previous value of the modified attribute
            //event.newValue      - New value of the modified attribute
            //Triggered when the selected elements attribute is added/updated/removed
    if(event.attributeName=="class"){
      $(".dropdowni").toggleClass("active-dropdowni_menu")
    }
  } 
})
let dropdowni_menu = document.querySelector('.dropdowni');


// ** Menu desplegable ASIDE y BOTON TOGGLE topnav ** //
let main__toggle = document.querySelector('.main__toggle');
let aside = document.querySelector('.aside');
let main = document.querySelector('.main');

main__toggle.onclick = function(){
  aside.classList.toggle('active-tam');
  main.classList.toggle('active-tam');
  main__toggle.classList.toggle('main__toggle-rotate');
}