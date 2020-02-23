// resets values
function random (min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}

// gives initial values on load
document.addEventListener("DOMContentLoaded", function(){
    // gives value to number goal
    $("#pazaak-number").append(random(30,50));

    // gives button values
    $("#b1").val(random(1,9));
    console.log($("#b1").val());
    $("#b2").val(random(1,9));
    console.log($("#b2").val());
    $("#b3").val(random(1,9));
    console.log($("#b3").val());
    $("#b4").val(random(1,9));
    console.log($("#b4").val());

}); 