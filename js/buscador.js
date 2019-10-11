window.onload = function(){

    var poster =  'https://image.tmdb.org/t/p/original/'
    var key = "e59c94a503ea78e9502aa8e308f21eb5";
    var metodo = 'GET';

    var popularURL = "https://api.themoviedb.org/3/genre/tv/list?api_key="+key+"&language=en-US"

    fetch(popularURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {  
        var contenedor = document.querySelector("#opciones")
        // console.log(data);
        for (var i = 0; i < data.genres.length; i++) {
        // console.log(data.results[i]);
        var item = data.genres[i];
        console.log(item.id)
        contenedor.innerHTML += '<option value="'+ item.id +'">' + item.name + '</option>'
    }



    })
    .catch(function (error) {
            console.log("El error es: " + error);
    })


}