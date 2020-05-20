$(document).ready(function(){
    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'GET',
        'success': function(data) {
            var array_musica = data.response;
            console.log(array_musica);
            for (var i = 0; i < array_musica.length; i++){
                var elemento_corrente = array_musica[i];
                console.log(elemento_corrente);
            }
        },
        'error': function() {
            alert('Si è verificato un errore!');
        }

    });
});
