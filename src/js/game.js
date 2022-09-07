if($(".play")){

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
        }, 300);
    }

    let DOA = setInterval(function () {
        let plVal = parseInt($(player).css("top"));
        let obstPos = parseInt($(obstacle).css("left"));
        //console.log(parseInt($(player).css("top")));
        if (obstPos<85 && obstPos>-85 && plVal>=130){
            $(obstacle).css("animation", "none");
            $(obstacle).css("display", "none");
            alert("u ded boi - Score: " + Math.floor(score/100));
            score = 0;
            $(obstacle).css("animation", "evil_teko 1.5s infinite linear");
            $(obstacle).css("display", "block");

        } else{
            score++;
            $(".score span").html(Math.floor(score/100));
        }
    }, 15);

}