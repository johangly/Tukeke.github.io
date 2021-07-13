window.addEventListener('scroll', function() {

    function fade(direccion) {

        var imagen = document.querySelectorAll('.fade_' + direccion);

        for (var i = 0; i < imagen.length; i++) {

            var altura = window.innerHeight / 1.2;
            var distancia = imagen[i].getBoundingClientRect().top;

            console.log(altura)
            console.log(distancia)

            imagen[i].classList.add('fade_' + direccion)

            if (distancia <= altura) {
                imagen[i].classList.add('aparece')
            } else {
                imagen[i].classList.remove('aparece')
            }
        }
    }

    fade('up')
    fade('right')
    fade('down')
    fade('left')

})