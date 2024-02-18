//Array
const kjopBillett=[];

//Funksjon for å bestille
function bestill(){
    const velgFilm = document.getElementById("film").value;
    const innAntall = document.getElementById("antall").value;
    const innFornavn = document.getElementById("fornavn").value;
    const innEtternavn = document.getElementById("etternavn").value;
    const innTelefonnr = document.getElementById("telefonnr").value;
    const innEpost = document.getElementById("epost").value;

    const bestiller = {
        film : velgFilm,
        antall : innAntall,
        fornavn : innFornavn,
        etternavn : innEtternavn,
        telefonnr : innTelefonnr,
        epost : innEpost
    };
    kjopBillett.push(bestiller);




//Skriver ut billetter (dersom ingen mangler)
    let ut = "<table><tr>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnr</th>" +
        "<th>Epost</th>" +
        "</tr>";

    for (let info of kjopBillett) {
        ut += "<tr>";
        ut += "<td>" + info.film + "</td>" +
            "<td>" + info.antall + "</td>" +
            "<td>" + info.fornavn + "</td>" +
            "<td>" + info.etternavn + "</td>" +
            "<td>" + info.telefonnr + "</td>" +
            "<td>" + info.epost + "</td>";
        ut += "</tr>";
    }
//error meldinger dersom mangler

if (velgFilm == "Velg film" || (innAntall == 0) || (innFornavn == "") || (innEtternavn == "") || (innTelefonnr < 8) || (innEpost == ""))

    if(velgFilm == ""){
        document.getElementById("filmFeil").innerHTML = "Vennligst velg en film";
    }
    if(innAntall == 0){
        document.getElementById("antallFeil").innerHTML = "Vennligst velg antall billetter";
    }

    if(innFornavn == ""){
        document.getElementById("fornavnFeil").innerHTML = "Vennligst oppgi et fornavn";
    }

    if(innEtternavn == ""){
        document.getElementById("etternavnFeil").innerHTML = "Vennligst oppgi et etternavn";
    }

    if(innTelefonnr < 8){
        document.getElementById("telefonnrFeil").innerHTML = "Vennligst oppgi et telefonnummer";
    }

    if(innEpost == ""){
        document.getElementById("epostFeil").innerHTML = "Vennligst oppgi en e-postadresse";
    }
    if(velgFilm == "Velg en film", innAntall == 0, innFornavn == "", innEtternavn == "", innTelefonnr < 8, innEpost == ""){
        kjopBillett.pop();
    }
    else{
        document.getElementById("kjopBillett").innerHTML = ut;

        document.getElementById("film").value="";
        document.getElementById("antall").value="";
        document.getElementById("fornavn").value="";
        document.getElementById("etternavn").value="";
        document.getElementById("telefonnr").value="";
        document.getElementById("epost").value="";

    }
}

//funksjon for å slette billetter ved å sette array lengde til null
function slettBillett() {
    kjopBillett.length = 0;
    document.getElementById("kjopBillett").innerHTML = kjopBillett;
}