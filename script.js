/*git add .
git commit -m "sua mensagem"
git push origin main*/

function jogar(win, defeat){
let nivelDeRack = ""
let saldoDeWin  = (win - defeat)

if(win <= 10){
    nivelDeRack = "Ferro"
}else if(win >= 11 && win <=20 ){
nivelDeRack = "Bronze"
}else if(win >= 21 && win <= 50){
    nivelDeRack = "Prata"
}else if(win >= 51 && win <= 80){
nivelDeRack = "Ouro"
}else if(win >= 81 && win <= 90){
    nivelDeRack = "Diamante"
}else if(win >= 91 && win <= 100){
    nivelDeRack= "Lendário"
}else if(win >= 101)
nivelDeRack = "Imortal"



return {saldoDeWin, nivelDeRack}
}



let placar = jogar(35, 20)
console.log(`O héroi tem  saldo de ${placar.saldoDeWin} está no nivel de ${placar.nivelDeRack}`);