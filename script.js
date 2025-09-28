const facts = [
    "Ein Tintenfisch hat drei Herzen.",
    "Bananen sind botanisch gesehen Beeren.",
    "Das menschliche Gehirn erzeugt so viel Energie wie eine 10-Watt-Glühbirne.",
    "Honig verdirbt nie.",
    "Wussten Sie, dass der Eiffelturm im Sommer um etwa 15 cm wächst?",
    "Pinguine können nicht rückwärts gehen.",
    "Es regnet Diamanten auf Jupiter und Neptun.",
    "Kolibris sind die einzigen Vögel, die rückwärts fliegen können.",
    "Ein Tag auf der Venus ist länger als ein Jahr auf der Venus.",
    "Das Licht der Sonne braucht etwa 8 Minuten und 20 Sekunden, um die Erde zu erreichen.",
    "Schwarze Löcher sind so dicht, dass nicht einmal Licht entkommen kann.",
    "Die Erde ist nicht perfekt rund, sie ist am Äquator leicht gewölbt.",
    "Aluminium ist das häufigste Metall in der Erdkruste.",
    "Das größte Lebewesen der Erde ist ein Pilz in Oregon, der fast 9 Quadratkilometer groß ist.",
    "Der Mond entfernt sich jedes Jahr um etwa 3,8 cm von der Erde.",
    "Der stärkste Muskel des menschlichen Körpers ist der Kiefermuskel.",
    "Das Universum hat keinen Rand und kein Zentrum.",
    "Der Mount Everest wird jedes Jahr ein paar Millimeter größer.",
    "Das Periodensystem der Elemente wurde von Dmitri Mendelejew entwickelt.",
    "Die größte Wüste der Welt ist die Antarktis."
];

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    return randomFact;
}

const messageDisplay = document.getElementById('generated-message');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', () => {
    messageDisplay.textContent = generateFact();
});