window.onload= function () {

  var paramsSearch = new URLSearchParams(location.search)
  var query = paramsSearch.get('query')
  var genres = paramsSearch.get('with_genres')
  var releaseDate = paramsSearch.get('first_air_date_year')
  var key = "e59c94a503ea78e9502aa8e308f21eb5";

  console.log(query == "", " -Query vacio");
  console.log(genres == "", "-with_genres vacio");


  var poster =  'https://image.tmdb.org/t/p/original/'
  var metodo = 'GET';


  // var busquedaURL = 'https://api.themoviedb.org/3/discover/tv?api_key='+key+ '&query=' + query
if (query != "") {
  var busquedaURL = 'https://api.themoviedb.org/3/search/tv?api_key='+key+'&query=' + query
}else if (genres != "" && releaseDate != "") {
  var busquedaURL = "https://api.themoviedb.org/3/discover/tv?api_key="+ key +"&first_air_date_year"+releaseDate + "&with_genres"+genres

  // ESTO NO ESTÁ ANDANDO BIEN.....
}



  fetch(busquedaURL,{
      method: metodo
  })
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
    console.log(data);
    var contenedor = document.querySelector("#resultados")

    for (var i = 0; i < data.results.length; i++) {
      var div = '<div>'
      div+= '<h2>'+data.results[i].name+ '</h2>'
      if (data.results[i].poster_path == null) {
        div+= '<img src="img/noAvailable.png" alt="imagen de serie">'

      }else {
        div+= '<img src="'+poster+data.results[i].poster_path+'" alt="imagen de serie">'
      }
      // console.log(data.results[i].);
      data.results[i]
      div+= '</div>'
      contenedor.innerHTML+= div
    }
  })
  .catch(function (error) {
    console.log("El error es: " + error);
  })











}
