var apiURL = "https://games-world.herokuapp.com";

fetch(apiURL + "/games", {
    method: "GET",
    headers: {
        "Content-Type":"application/x-www-form-urlencoded"
    }
}).then(function(response){
    //then apeleaza functia anonima cand are raspuns
    return response.json();
    //cand se termina procesarea asta apeleaza jsonResponse
}).then(function(jsonResponse){
    console.log("the response    "+ jsonResponse)
});
// se pun 2 then atata timp cat dureaza o anumita operatie si nu stim cat
//nu stim in ca timo vine rasp de la server