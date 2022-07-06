function rollDice(){
    var score1 = parseInt(document.getElementById("p1score").value)
    var score2 = parseInt(document.getElementById("p2score").value)
    var num = (Math.ceil(Math.random()*6))
    document.getElementById("current").innerHTML = num
    var turn = parseInt(document.getElementById("turn").value)
    
    if(turn==1){
        score1 += num
        document.getElementById("p1score").value = score1
        document.getElementById("p1").innerHTML = score1
        document.getElementById("turn").value=2
    }
    else if(turn==2){
        score2 += num
        document.getElementById("p2score").value = score2
        document.getElementById("p2").innerHTML = score2
        document.getElementById("turn").value=1
    }
    else{
        document.getElementById("roll").innerHTML = "ROLL"
        reset()
        return(0)
    }

    if(score1>=30){
        document.getElementById("winner").innerHTML = "Player 1 is the winner."
        document.getElementById("turn").value=3
        document.getElementById("roll").innerHTML = "NEW GAME"
    }
    else if(score2>=30){
        document.getElementById("winner").innerHTML = "Player 2 is the winner."
        document.getElementById("turn").value=3
        document.getElementById("roll").innerHTML = "NEW GAME"
    }

    console.log(num)
}
function reset(){
    document.getElementById("p1score").value = 0
    document.getElementById("p2score").value = 0
    document.getElementById("p1").innerHTML = ''
    document.getElementById("p2").innerHTML = ''
    document.getElementById("current").innerHTML = ''
    document.getElementById("turn").value = 1
}