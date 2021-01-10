// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 groter dan 20?" in op        // geeft false
// ==========================================
const bigger = 10 > 20;
console.log(bigger)
// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van de vergelijking "Is 10 ongelijk aan 11?" in op        // geeft true
// ==========================================
const equal = 10 != 11;
console.log(equal);

// ==========================================
// 3. Declareer een variabele en sla daar in op of de woorden 'zoet' en 'sappig' hetzelfde zijn                // geeft false
// ==========================================
let word1 = "zoet";
let word2 = "sappig";
const equal1 = word1 == word2;
console.log(equal1);

// ==========================================
// 4a. Declareer een variabele en sla daar het rapportcijfer 9 in op.
// 4b. schrijf een script dat checkt of het rapportcijfer groter is dan 8.
//     Als dat zo is, loggen we 'Cum laude!' in de console.                                                     // geeft 'Cum laude!'
// ==========================================
let rapportCijfer = 9;
if (rapportCijfer > 8){
    console.log("Cum laude");
}
else {
    console.log("Geen Cum laude");

}
// ==========================================
// 5a. Gebruik onderstaande variabelen isRaining en temperature;
// 5b. Schrijf een script dat "Je kunt een korte broek aan!" logt wanneer het niet regent EN de temperatuur hoger is dan 21 graden
// 5c. Log "Doe een jas aan!" Als het regent OF kouder is dan 12 graden
// Tip: verander de waarde van isRaining en temperature even handmatig om te kijken of jouw 2e conditie klopt
// ==========================================
const isRaining = true;
const tempeture = 20;

if ((tempeture <= 21) && (isRaining === true)) {
    console.log("Doe je jas aan")
}
else if ((tempeture > 21) && (isRaining === false)) {
    console.log("Je kunt een korte broek aan")
}
else {
    console.log("Dan weet ik het ook niet meer")
}
