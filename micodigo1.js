function hacerclic () {
    document.querySelector ("#principal p:first-child").onclick=mostraralerta;
}
function mostraralerta () {
    alert('hizo clic!');
}
window.onload=hacerclic;