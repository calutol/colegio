let list = document.querySelectorAll('.aside__li');
function activeLink(){
  list.forEach((item) =>
    item.classList.remove('hovered'));
  this.classList.add('hovered');
}
list.forEach((item) =>
  item.addEventListener('mouseover',activeLink));