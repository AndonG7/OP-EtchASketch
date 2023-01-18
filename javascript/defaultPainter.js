function defaultPainter () {
    pixels.forEach(pixel => 
        pixel.addEventListener("click", function() {
            if (toggle) {
                pixel.style.backgroundColor = randomColorGenerator();
            } else pixel.style.backgroundColor = 'black';
        }
    ));
}