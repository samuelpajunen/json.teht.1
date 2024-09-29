//Alta löytyy linkitys Mocky tiedostooni
fetch('https://run.mocky.io/v3/e7cd4d2d-58c6-477d-926b-1df8846b1e13')

// Muunnetaan vastaus JSON muotoon
.then(function (response) {
    return response.json();
})

// Käsitellään muunnettu (eli JSON muotoinen) vastaus
.then(function (responseJson) {
    kerro(responseJson);
}) 

// Jos tuli jokin virhe, niin tiedostoon aukeaa tämä
.catch(function(error){document.getElementById("vastaus").innerHTML = 
    "<p>Tietoa ei pystytä hakemaan</p>";
})

// Funktio, jossa tuodaan Mockyn data näytölle. Ensimmäisenä otsikko
function kerro(data) {
    var teksti = "";
    teksti = "<h1>" + data.otsikko + "</h1>";

    // sivuston kuvaus - teksti
    teksti = teksti + "<p>" + data.kuvaus + "</p>";

    // kuva sivulle
    teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva' ></p>"

    // Tekstit
    teksti = teksti + "<h3>";
    teksti = teksti + "<span>Opintojakso " + data.opintojakso.nimi + "</span> ";
    teksti = teksti + "<span>" + data.opintojakso.tunnus + "</span> ";
    teksti = teksti + "<span>" + data.opintojakso.opintopisteet + "</span>";
    teksti = teksti + "</h3>";

    teksti = teksti + "<ul>"
    for (var i = 0; i <data.sisalto.length; i++) {
        teksti = teksti + "<li>" + data.sisalto[i] + "</li>";
    }
    teksti = teksti + "</ul>" 

    // tekstit linkkeineen
    teksti = teksti + "<h3>Linkit</h3>";
    teksti = teksti + "<ul>";
    for (var j = 0; j < data.tekniikat.length; j++) {
        teksti = teksti + "<li>" + data.tekniikat[j].aihe + 
        " <a href='" + data.tekniikat[j].linkki + "' target='_blank'>"
         + data.tekniikat[j].linkki + "</a></li>";
    }
    teksti = teksti + "</ul>";

    document.getElementById("vastaus").innerHTML = teksti;

}
