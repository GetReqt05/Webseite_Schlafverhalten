let n1,n2,n3,n4,n5,n6,n7,n8; // Erschaffen der Variable n1 - n8
let ergebnis; // Erschaffen der variable ergebnis
let summe1; // Erschaffen der Variable summe1
let summe = 0; // Erschaffen der Variable summe1 und gib ihr den Wert 0


function tfAuslesen() {  // Funktion tfAuslesen ( Textfelder werden ausgelesen)
    n1 = parseInt(document.getElementById("tfAlterDerPerson").value) // Auslesen des Textfeldes "tfalterderPerson" und ersetzen von n1 durch in Textfeld stehende Zahö
    n2 = parseInt(document.getElementById("tfSchlaf1").value)        // Auslesen des textfeldes "tfSchlaf1" und ersetzen von n2 durch die in Textfeld stehende Zahl
    n3 = parseInt(document.getElementById("tfSchlaf2").value)        // -"- hier jedoch "tfSchlaf2" und n3
    n4 = parseInt(document.getElementById("tfSchlaf3").value)        // -"- hier jedoch "tfSchlaf3" und n4
    n5 = parseInt(document.getElementById("tfSchlaf4").value)        // -"- hier jedoch "tfSchlaf4" und n5
    n6 = parseInt(document.getElementById("tfSchlaf5").value)        // -"- hier jedoch "tfSchlaf5" und n6
    n7 = parseInt(document.getElementById("tfSchlaf6").value)        // -"- hier jedoch "tfSchlaf6" und n7
    n8 = parseInt(document.getElementById("tfSchlaf7").value)        // -"- hier jedoch "tfSchlaf7" und n8

    console.log(n1 + ";" + n2 + ";" + n3 + ";" + n4 + ";" + n5 + ";" + n6 + ";" + n7 + ";" + n8+ ";"); //Ausgabe der Nummern n1 - n8 hintereinander in Konsole ( mit ; dazwischen)

    Alterpruefen(n1); // führt Funktion Alterpruefen für Variable n1 aus

    Schlafpruefen(n2); // führt Funktion Schlafpruefen für Variable n2 aus
    Schlafpruefen(n3); // -"- nur mit n3
    Schlafpruefen(n5); // -"- nur mit n4
    Schlafpruefen(n4); // -"- nur mit n5
    Schlafpruefen(n6); // -"- nur mit n6
    Schlafpruefen(n7); // -"- nur mit n7
    Schlafpruefen(n8); // -"- nur mit n8

    ergebnis = summe - summe1 // Ergebnis wird ausgerechnet mit der Formel Summme - Summe1

    document.getElementById("ausgabe1").innerHTML = summe1; // Ersetzen aller Textfelder mit der id "ausgabe1" durch summe1

    document.getElementById("ausgabe2").innerHTML = summe; // Ersetzen aller Textfelder mit der id "ausgabe2" durch summe

    document.getElementById("ausgabe3").innerHTML = ergebnis // Ersetzen aller Textfelder mmit der id "ausgabe3" durch ergebnis

    if (ergebnis <= -10) // Wenn Ergebnis kleiner als -10 ist, ...
    {
        document.getElementById("ausgabe3").style.color = "crimson" // dann verändere die farbe von allen Textfeldern mit der id "ausgabe3" zu "crimson"
    }

    if (ergebnis >= 10) // Wenn Ergebnis größer als 10 ist, ...
    {
        document.getElementById("ausgabe3").style.color = "darkgoldenrod" // dann verändere die Farbe aller Textfelder mit id "ausgabe3" zu "darkgoldenrod"
    }

    if (ergebnis > -10 && ergebnis < 10 ) // Wenn Ergebnis größer als -10 und kleiner als 10, ...
    {
        document.getElementById("ausgabe3").style.color = "darkgreen" // dann verändere die farbe aller textfelder mit id "ausgabe3" zu "darkgreen"
    }

}

function Alterpruefen(Alter) { // Funktion Alterpruefen wird mit Eingabe Alter ausgeführt
    if (isNaN( Alter)) // Wenn die Eingabe keine Zahl ( nicht aus Ziffern) besteht, ...
    {
        console.log("ist keine Zahl") // dann gib in der Konsole aus: "ist keine zahl"
    }else if ( Alter > 0 && Alter <= 5) { // sonst, wenn Eingabe Alter größer als 0 oder kleiner gleich 5 ist,...
        summe1 = 80 // dann ist summe1 80
    }else if ( Alter > 5 && Alter <= 13) { // sonst, wenn eingabe Alter größer als 5 oder kleiner gleich 13 ist,...
        summe1 = 70 // dann ist summe1 70
    }else if ( Alter > 13 && Alter <= 17) { // sonst, wenn Eingabe Alter größer als 13 oder kleiner gleich 17 ist,...
        summe1 = 63 // dann ist summe1 63
    }else if ( Alter > 17 && Alter <= 64) { // sonst, wenn Eingabe Alter größer als 17 oder kleiner gleich 64 ist,...
        summe1 = 56 // dann ist summe1 56
    }else { // sonst,...
        summe1 = 49 // ist summe1 49
    }                                                   // funtioniert
}

function Schlafpruefen(Schlaf){ //Funktion Schlafpruefen wird mit der Eingabe Schlaf ausgeführt
    if (isNaN(Schlaf)){ // wenn eingabe keine Nummer ( keine Ziffern),...
        console.log(Schlaf + "keine Zahl") // dann gib in er Konsole aus: "keine Zahl"
    } else { // sonst,...
        summe = summe + Schlaf // summe rechnet sich zusammen aus der summe + die eingabe
    }
}













