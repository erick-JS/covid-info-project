var casesWorld = document.getElementById("casesWorld");
var deathsWorld = document.getElementById("deathsWorld");
var recoveredWorld = document.getElementById("recoveredWorld");

var casesBrazil = document.getElementById("casesBrazil");
var deathsBrazil = document.getElementById("deathsBrazil");
var recoveredBrazil = document.getElementById("recoveredBrazil");

var countries = document.getElementById("countries");
var states = document.getElementById("states");
var cities = document.getElementById("cities");
var item = document.getElementById("item");
var btnconsultar = document.getElementById("btnconsultar");

btnconsultar.addEventListener("click", getDataAllCities);

function getDataWorld() {
    var url = 'https://coronavirus-19-api.herokuapp.com/all';

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        //console.log(data);
        casesWorld.innerText = Number(data.cases).toLocaleString("pt-br");
        deathsWorld.innerText = Number(data.deaths).toLocaleString("pt-br");
        recoveredWorld.innerText = Number(data.recovered).toLocaleString("pt-br");
    })
}

function getDataBrazil() {
    var url = `https://coronavirus-19-api.herokuapp.com/countries/Brazil`;

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        //console.log(data);
        casesBrazil.innerText = Number(data.cases).toLocaleString("pt-br");
        deathsBrazil.innerText = Number(data.deaths).toLocaleString("pt-br");
        recoveredBrazil.innerText = Number(data.recovered).toLocaleString("pt-br");
    })
}

function getDataCountries() {
    var url = "https://coronavirus-19-api.herokuapp.com/countries";

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        for (var i = 0; i < 220; i++) {
            if (data[i].country === "Brazil" || data[i].country === "World" || data[i].country === "") {
                i++;
            }

            countries.innerHTML += `<tbody><tr><td>${data[i].country}</td>` +
                `<td>${Number(data[i].cases).toLocaleString("pt-br")}</td>` +
                `<td>${Number(data[i].deaths).toLocaleString("pt-br")}</td>` +
                `<td>${Number(data[i].recovered).toLocaleString("pt-br")}</td></tr></tbody>`;
        }
    })

}

function getDataStatesBrazil() {
    var url = 'https://brasil.io/api/dataset/covid19/caso/data?is_last=True&place_type=state';

    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        for (var i = 0; i < 27; i++) {
            states.innerHTML += `<tbody><tr><td>${data.results[i].state}</td>` +
                `<td>${Number(data.results[i].confirmed).toLocaleString("pt-br")}</td>` +
                `<td>${Number(data.results[i].deaths).toLocaleString("pt-br")}</td></tr></tbody>`;
            //`<td>${Number(data[i].recovered).toLocaleString("pt-br")}</td></tr></tbody>`;*/        
        }
    })
}

function getDataAllCities() {
    var url = `https://brasil.io/api/dataset/covid19/caso/data?is_last=True&state=${item.value}`;


    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        cities.innerHTML = "<thead><th>Cidade</th><th>Estado</th><th>Casos confirmados</th><th>Óbitos</th></thead>"
        for (var i = 0; i < data.results.length; i++) {
            cities.innerHTML += `<tbody><tr><td>${data.results[i].city}</td>` +
                `<td>${data.results[i].state}</td>` +
                `<td>${Number(data.results[i].confirmed).toLocaleString("pt-br")}</td>` +
                `<td>${Number(data.results[i].deaths).toLocaleString("pt-br")}</td></tr></tbody>`;
        }
    })
}