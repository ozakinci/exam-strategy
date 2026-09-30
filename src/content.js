/*
 * exam-strategy - single content source (Dutch)
 *
 * One model, two renderers (2d.html, 3d.html). Edit here, run `node build.mjs`,
 * and both printables update with the same story.
 */
window.CONTENT = {
  lang: "nl",
  title: "Toets- en examenstrategie",
  intro: "Zes stappen die je elke toets en elk examen helpen omzetten in een goed resultaat.",
  motto: "JE KUNT DIT! SUCCES!",
  phases: [
    {
      id: "interesse",
      num: 1,
      name: "INTERESSE",
      icon: "target",
      color: "#12305e",
      text: "Kies om te presteren. Haal rustig adem, zet je schouders los. Schakel naar je verstand en zet je aan-knop om!",
      itemsStyle: "chips",
      items: [
        { name: "FOCUS", text: "Richt je aandacht op deze taak", color: "#12305e" },
        { name: "CONCENTRATIE", text: "Blijf gefocust tot het einde!", color: "#2f9e5f" },
        { name: "GOED LEZEN / LUISTEREN / KIJKEN", text: "Lees de vraag zo vaak als nodig!", color: "#e0a52a" }
      ]
    },
    {
      id: "begrijpen",
      num: 2,
      name: "BEGRIJPEN",
      icon: "book",
      color: "#3b7dd8",
      text: "Wat is de opdracht precies? Wat wordt er gevraagd?",
      itemsStyle: "lines",
      items: []
    },
    {
      id: "nadenken",
      num: 3,
      name: "(NA)DENKEN",
      icon: "brain",
      color: "#2f6fd0",
      text: "Gebruik kladpapier - schrijf alles op!",
      itemsStyle: "lines",
      items: [
        { name: "Visualiseren", text: "Teken wat beschreven wordt (bijv. figuur, situatie, grafiek)" },
        { name: "Feiten noteren", text: "Schrijf feiten kort op (bijv. broer = 14, zus = broer - 2, mama = broer + zus + 24)" },
        { name: "Vragen noteren", text: "Wat moet ik beantwoorden? (bijv. diameter? omtrek? oppervlakte?)" },
        { name: "Vereisten noteren / verduidelijken", text: "Formaat? Eenheid? Kleur? Schrijf(stijl)? Afronding?" }
      ]
    },
    {
      id: "oplossen",
      num: 4,
      name: "OPLOSSEN",
      icon: "stairs",
      color: "#245bb0",
      text: "Stap voor stap. Schrijf ALLE tussenstappen op! Ook als je het zeker weet!",
      itemsStyle: "lines",
      items: [
        { name: "Loop je vast?", text: "Sla de vraag over en kom er straks op terug." },
        { name: "Zit je echt vast?", text: "Vraag het." }
      ]
    },
    {
      id: "bevestigen",
      num: 5,
      name: "BEVESTIGEN",
      icon: "stamp",
      color: "#2f9e5f",
      text: "Bevestig je antwoord!",
      itemsStyle: "lines",
      items: [
        { name: "Klopt mijn antwoord?", text: "Bijv.: som hoeken = 180\u00b0? Of: vul je antwoord terug in de vergelijking?" }
      ]
    },
    {
      id: "controleren",
      num: 6,
      name: "CONTROLEREN",
      icon: "magnifier",
      color: "#c0392b",
      text: "Loop alles na!",
      itemsStyle: "lines",
      items: [
        { name: "Alle delen geantwoord?", text: "" },
        { name: "In het formaat dat gevraagd werd?", text: "" },
        { name: "Eenheid of notatie correct?", text: "(cm\u00b3, m, \u00b0, ...)" }
      ]
    }
  ]
};