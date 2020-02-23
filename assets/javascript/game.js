// resets values
function random (min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

// gives initial values on load
document.addEventListener("DOMContentLoaded", function(){
    // gives value to number goal
    var num = random(30,50)
    $("#num").text("goal: " + num)

    // gives button values
    $("#b1").val(random(1,9));
    console.log($("#b1").val());
    $("#b2").val(random(1,9));
    console.log($("#b2").val());
    $("#b3").val(random(1,9));
    console.log($("#b3").val());
    $("#b4").val(random(1,9));
    console.log($("#b4").val());

    var score = 0
    $("#userscore").text(score)

    var wins = 0
    $("#wins").text("Wins: " + wins)

    var losses = 0
    $("losses").text("Losses: " + losses)

    $(".buttons").on("click", function (){
        var newscore = score += parseInt($(this).val()); 
        console.log("new " + newscore);
        




    });





}); 