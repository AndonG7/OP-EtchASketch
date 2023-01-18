clearBtn.addEventListener("click", function() {

    console.log("clear");

    for (i=0; i<pixels.length; i++) {
        pixels[i].style.backgroundColor = 'white';
    }

});

rainbowBtn.addEventListener("click", function() {
    toggle = !toggle;
    if(toggle) {
        rainbowBtn.style.backgroundColor = "red";
        rainbowBtn.style.color = "white";
    } else {
        rainbowBtn.style.backgroundColor = "transparent";
        rainbowBtn.style.color = "black";
    }
    
});