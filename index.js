// Write your code here!
document.addEventListener("DOMContentLoaded", function(){
    const mainNode = document.getElementById('main');
    mainNode.remove();

    const newHeader = document.createElement('h1');
    newHeader.id ='victory';
    newHeader.innerHTML ="YOUR-NAME is the champion";

    document.body.appendChild(newHeader);
});