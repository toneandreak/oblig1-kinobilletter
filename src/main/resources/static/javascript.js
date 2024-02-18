//Array
const kjopBillett=[];

//Funksjon for å bestille
function bestillBillett(){
    const velgFilm = document.getElementById("film").value;
    const velgAntall = document.getElementById("antall").value;
    const velgFornavn = document.getElementById("fornavn").value;
    const velgEtternavn = document.getElementById("etternavn").value;
    const velgTelefon = document.getElementById("telefonnr").value;
    const velgEpost = document.getElementById("epost").value;


//sjekker at det eposten har noe før og etter @ og .
    const epostValidering = /\S+@\S+\.\S+/;
    const epostRiktig = epostValidering.test(velgEpost);

    const personalia = {
        film : velgFilm,
        antall : velgAntall,
        fornavn : velgFornavn,
        etternavn : velgEtternavn,
        telefonnr : velgTelefon,
        epost : velgEpost
    };

//lagrer bestilling
    kjopBillett.push(personalia);




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

if (velgFilm == "Velg film" || (velgAntall == 0) || (velgFornavn == "") || (velgEtternavn == "") || (velgTelefon < 8) || (velgEpost == "" || !epostRiktig))

    if(velgFilm == ""){
        document.getElementById("filmFeil").innerHTML = "Vennligst velg en film";
    }
    if(velgAntall == 0){
        document.getElementById("antallFeil").innerHTML = "Vennligst velg antall billetter";
    }

    if(velgFornavn == ""){
        document.getElementById("fornavnFeil").innerHTML = "Vennligst oppgi et fornavn";
    }

    if(velgEtternavn == ""){
        document.getElementById("etternavnFeil").innerHTML = "Vennligst oppgi et etternavn";
    }

    if(velgTelefon < 8){
        document.getElementById("telefonnrFeil").innerHTML = "Vennligst oppgi et telefonnummer";
    }

    if(velgEpost == "" || !epostRiktig){
        document.getElementById("epostFeil").innerHTML = "Vennligst oppgi en e-postadresse";
    }
    if(velgFilm == "Velg en film", velgAntall == 0, velgFornavn == "", velgEtternavn == "", velgTelefon < 8, velgEpost == "" || !epostRiktig){
        kjopBillett.pop();
    }

    else{
        document.getElementById("kjopBillett").innerHTML = ut;

//nuller ut inntastingsfelt

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