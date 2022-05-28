function ajouterSandwich(){
    const sandwich = document.getElementById("userSandwich").value;
    const sandwichLi = document.createElement("li");
    sandwichLi.innerHTML = sandwich;
    document.getElementById('liste').appendChild(sandwichLi);
}
function enleverSandwich(){
    const numSandwich = document.getElementById("id2").value;
    const listeSandwich = document.getElementsByTagName("li");
    if (listeSandwich.length >= numSandwich && numSandwich >0)
        document.getElementById('liste').removeChild(listeSandwich[numSandwich - 1]);
    else {
        alert('numero de sandwich invalide!')
    }
} 
function mettreLien(){
    const lien =document.getElementById('lien').value;
    document.body.style.backgroundImage = `url(${lien})`
}
function couleur(){
    const p1 =document.getElementById('p1');
    p1.style.color='white'
    
}
 