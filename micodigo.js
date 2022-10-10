function mostraralerta( ) {
    alert('hizo clic!');
 } 
 function trampa ( ){
    alert ('jajaja es una trampa')
}
function hacerclic ( ) {
    document.getElementsByTagName('p')[0] .onclick=mostraralerta;
}
window.onload=hacerclic;
function intetarclic ( ) {
     document.getElementsByTagName('span')[0] .onclick=trampa;
}
window.onload=trampa;

/*function hacerclic ( ) {
    if (p == p)
 document.getElementsByTagName('p')[0] .onclick=mostraralerta;
 window.onload=hacerclic;
  else 
  document.getElementsByTagName('span')[0] .onclick=trampa;
  window.onload=trampa;
    } */
    

    
