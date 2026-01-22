let primeraParticipant = {
  nom: "Regina",
  llinatge1: "Santorini",
  llinatge2: "de la Cierva"
};
primeraParticipant.localitat = "Cangas del Narcea";


console.log(primeraParticipant);


// Mostrar valors per separat
for (let clau in primeraParticipant) {
  console.log(primeraParticipant[clau]);
}
