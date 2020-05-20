$(document).ready(function(){
    $.ajax({
        'url': 'https://flynn.boolean.careers/exercises/api/array/music',
        'method': 'GET',
        'success': function(data) {
            var array_musica = data.response;
            console.log(array_musica);
            template(array_musica);
        },
        'error': function() {
            alert('Si è verificato un errore!');
        }
    });
});
function template(dischi) {
    var template_html = $('#entry-template').html();
    var template_function = Handlebars.compile(template_html);
    var data = {
        'poster': '' ,
        'title':'' ,
        'author': '',
        'genre': '',
        'year':''
    }

    for (var i = 0; i < dischi.length; i++){
        var elemento_corrente = dischi[i];
        console.log(elemento_corrente);
        data.poster = elemento_corrente.poster;
        data.title = elemento_corrente.title;
        data.author = elemento_corrente.author;
        data.genre = elemento_corrente.genre;
        data.year = elemento_corrente.year;
        var html = template_function(data);
        $('.container').append(html);
    }
}
