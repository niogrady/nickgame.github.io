function check(){
	var answer1=document.getElementById("userchoice1").value;
    var answer2=document.getElementById("userchoice2").value;

    if(answer1=="Rock" && answer2=="Scissors"){
        document.getElementById("myGame").innerHTML="Player 1 is the winner!!"; 
    }
    else if(answer1=="Scissors" && answer2=="Rock"){
        document.getElementById("myGame").innerHTML="Player 2 is the winner!!"; 
    } 
    else if(answer1=="Rock" && answer2=="Paper"){
        document.getElementById("myGame").innerHTML="Player 1 is the winner!!"; 
    }
    else if(answer1=="Paper" && answer2=="Rock"){
        document.getElementById("myGame").innerHTML="Player 2 is the winner!!";
    }
    else if(answer1=="Scissors" && answer2=="Paper"){
        document.getElementById("myGame").innerHTML="Player 1 is the winner!!"; 
    }
    else if(answer1=="Paper" && answer2=="Scissors"){
        document.getElementById("myGame").innerHTML="Player 2 is the winner!!"; 
    }
    else{
    alert("invalid answer, please try again!");
}
    }


