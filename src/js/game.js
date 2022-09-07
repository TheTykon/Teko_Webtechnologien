let player = '.player';
let obstacle = '.obst';
let score = 0;

function yeet(){
    if ($(player).hasClass("jumping")){
        return;
    }
    $(player).addClass("jumping");
    setTimeout(function () {
        $(player).removeClass("jumping");
    }, 500);
}

let DOA = setInterval(function () {
    let plVal = parseInt($('.player').css("top"));
    let obstPos = $('.obst').position().left;
    //console.log($('.player').position().top);
    if (obstPos<60 && obstPos>-40 && plVal>=220){
        $(obstacle).css("animation", "none");
        alert("u ded boi - Score: " + Math.floor(score/100));
        score = 0;
        $(obstacle).css("animation", "evil_teko 1s infinite linear");

    } else{
        score++;
        $(".score span").html(Math.floor(score/100));
    }
}, 10);