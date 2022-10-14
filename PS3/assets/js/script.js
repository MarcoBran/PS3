function calcolaValore(valore){
    document.getElementById('operazioni').value+=valore;
}
function risultato(){
    document.getElementById('operazioni').value=eval(document.getElementById('operazioni').value);
}
function cancella(){
    document.getElementById('operazioni').value='';
    document.getElementById('operazioni').innerHTML='';
}
function back(){
    document.getElementById('operazioni').innerHTML= -valore;
}