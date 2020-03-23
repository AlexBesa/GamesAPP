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
}).then(function(arrayOfGames){
    console.log("the response    "+ arrayOfGames);
//jsonResponse = arrayOfGames
    
    var container1 = document.querySelector('.container');

    // for(var i=0;i<arrayOfGames.length;i++) {
    //     console.log(arrayOfGames[i]);
    //     const h1 = document.createElement("h1");
    //     const p = document.createElement("p");
    //     const img = document.createElement("img");

    // h1.innerHTML = arrayOfGames[i].title;
    // p.innerHTML = arrayOfGames[i].description;
    // img.setAttribute("src",arrayOfGames[i].imageUrl);

    // container.appendChild(h1);
    // container.appendChild(img);
    // container.appendChild(p);
    //}

    //// arrayOfGames[i].title
    //// arrayOfGames[i].description
    //// arrayOfGames[i].imageUrl
let gameElements = ""

    for(var i=0; i<arrayOfGames.length; i++) {
        gameElements += "<h1>"+ arrayOfGames[i].title+ "</h1>"+
                        "<img src='"+ arrayOfGames[i].imageUrl + "'/>"+
                        "<p>" + arrayOfGames[i].description + "</p>" +
                        "<button class='delete-btn' " + 
                            " onclick=\"deleteGame('" + arrayOfGames[i]._id + "')\">Delete</button>";
    }
    container1.innerHTML= gameElements;
});
// se pun 2 then atata timp cat dureaza o anumita operatie si nu stim cat
//nu stim in ca timo vine rasp de la server

//document.getElementsByClassName(".delete-btn")
function deleteGame(gameID) {
    console.log("delete the game ", gameID);

    fetch(apiURL + "/games/" + gameID, {
        method: "DELETE"
    }).then(function(r){
        return r.text();
        //e alta metoda ca raspunsul e string
    }).then(function(apiresponse){
        console.log(apiresponse);
       
    })
}