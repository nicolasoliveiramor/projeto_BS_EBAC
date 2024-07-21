$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000 ')

    
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            
            email: {
                required: true,
                email: true
            }
        },
        
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu E-mail'
        },
        
        submitHandler: function(form) {
            console.log(form)
        },
        
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })
    
    $('form').on('submit', function(e){
        e.preventDefault(e)
    
        $('#nome').val('')
        $('#email').val('')
        $('#telefone').val('')
    })
})


var scroll = new SmoothScroll('a[href*="#sobre-nos"], a[href*="#fale-conosco"]', {
    speed: 200
})