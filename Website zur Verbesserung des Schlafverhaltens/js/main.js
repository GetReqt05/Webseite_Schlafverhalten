let n1,n2,n3,n4,n5,n6,n7,n8;
let ergebnis;
let summe1;
let summe = 0;


function tfAuslesen() {
    n1 = parseInt(document.getElementById("tfAlterDerPerson").value)
    n2 = parseInt(document.getElementById("tfSchlaf1").value)
    n3 = parseInt(document.getElementById("tfSchlaf2").value)
    n4 = parseInt(document.getElementById("tfSchlaf3").value)
    n5 = parseInt(document.getElementById("tfSchlaf4").value)
    n6 = parseInt(document.getElementById("tfSchlaf5").value)
    n7 = parseInt(document.getElementById("tfSchlaf6").value)
    n8 = parseInt(document.getElementById("tfSchlaf7").value)

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" + n5 + ";" + n6 + ";" + n7 + ";" + n8+ ";");

    Alterpruefen(n1);

    Schlafpruefen(n2);
    Schlafpruefen(n3);
    Schlafpruefen(n5);
    Schlafpruefen(n4);
    Schlafpruefen(n6);
    Schlafpruefen(n7);
    Schlafpruefen(n8);

    ergebnis = summe - summe1

    document.getElementById("ausgabe1").innerHTML = summe1;

    document.getElementById("ausgabe2").innerHTML = summe;

    document.getElementById("ausgabe3").innerHTML = ergebnis

    if (ergebnis <= -10)
    {
        document.getElementById("ausgabe3").style.color = "crimson"
    }

    if (ergebnis >= 10)
    {
        document.getElementById("ausgabe3").style.color = "darkgoldenrod"
    }

    if (ergebnis > -10 && ergebnis < 10 )
    {
        document.getElementById("ausgabe3").style.color = "darkgreen"
    }

}

function Alterpruefen(Alter) {
    if (isNaN( Alter))
    {
        console.log("ist keine Zahl")
    }else if ( Alter > 0 && Alter <= 5) {
        summe1 = 80
    }else if ( Alter > 5 && Alter <= 13) {
        summe1 = 70
    }else if ( Alter > 13 && Alter <= 17) {
        summe1 = 63
    }else if ( Alter > 17 && Alter <= 64) {
        summe1 = 56
    }else {
        summe1 = 49
    }                                                   // funtioniert
}

function Schlafpruefen(Schlaf){
    if (isNaN(Schlaf)){
        console.log(Schlaf + "keine Zahl")
    } else {
        summe = summe + Schlaf
    }
}














