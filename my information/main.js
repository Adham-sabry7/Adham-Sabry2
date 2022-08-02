let Adham = document.getElementById('Adham');
window.onscroll = function(){
    let value = scrollY;
   Adham.style.top = value *1.5 + 'px';
}
