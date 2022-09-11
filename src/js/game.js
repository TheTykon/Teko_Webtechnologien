let player = '.player';
let obstacle = '.obst';
let score = 0;

$(function(e){
    $(document).keydown(function(e){
        if(e.which == 38){
            yeet();
            e.preventDefault();
        }
    });
});

function yeet(){
    if ($(player).hasClass("jumping")){
        return;
    }
    $(player).addClass("jumping");
    setTimeout(function () {
        $(player).removeClass("jumping");
    }, 500);
}

function togglePlay() {
    $(".game").addClass("started");
    $(".game-wrapper").removeClass("active");
}

let DOA = setInterval(function () {
    if($(".game").hasClass("started")){
        let plVal = parseInt($('.player').css("top"));
        let obstPos = $('.obst').position().left;
        if (obstPos<60 && obstPos>-40 && plVal>=220){
            $(".game").removeClass("started");
            $(".game-wrapper").addClass("active");
            score = 0;

        } else{
            score++;
            $(".score span").html(Math.floor(score/100));
        }
    }
}, 10);