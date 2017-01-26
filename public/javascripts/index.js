// var sc = require('soundcloud');
// var sc_client_id = 'YOUR_CLIENT_ID'; //soundCloud client id
//
//
// sc.initialize({
//   client_id: sc_client_id
// });



function hideResults() {
  $(".results").hide();
}

function search(song) {
  $(".results").show();
  $.ajax({
    url: "https://api.spotify.com/v1/search",
    data: {
      q:song,
      type:"track"
    },
    success: function (response) {
      document.getElementById("spotifyResults").innerHTML = "";
      for(var i = 0; i < response.tracks.items.length && i < 5; i++){
          document.getElementById("spotifyResults").innerHTML += "<li><a href =" + response.tracks.items[i].external_urls.spotify + ">" + response.tracks.items[i].name + " by " + response.tracks.items[i].artists[0].name + "</a></li>";
      }
    },
    error: function() {
      document.getElementById("spotifyResults").innerHTML = "Sorry, we couldn't find anything!"
    }
  });
  // sc.get('/tracks', {
  //   q:song,
  //   limit: 6
  // }).then(function(results) {
  //   document.getElementById("soundCloudResults").innerHTML = "";
  //   console.log(results);
  //   for(var j = 0; j < results.length && j < 5; j++){
  //     document.getElementById("soundCloudResults").innerHTML += "<li><a href =" + results[i].permalink_url + ">" + results[i].title + " by " + results[i].user.username + "</a></li>";
  //   }
  // });
  $.ajax({
    url: "https://itunes.apple.com/search",
    data: {
      term: song,
      media: "music",
      entity: "song",
      limit: 6,
    },
    type:'GET',
    dataType: 'jsonp',
    success: function(songResults) {
      document.getElementById("appleMusicResults").innerHTML = "";
      for(var k = 0; k < songResults.results.length && k < 5; k++){
        document.getElementById("appleMusicResults").innerHTML += "<li><a href =" + songResults.results[k].trackViewUrl + ">" + songResults.results[k].trackName + " by " + songResults.results[k].artistName + "</a></li>";
      }
    },
    error: function() {
      document.getElementById("appleMusicResults").innerHTML = "Sorry, we couldn't find anything!";
    }
  });
};


hideResults();
