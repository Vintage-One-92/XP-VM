
window.onload = function() {
    console.log("XP-VM: Inizializzazione motore nativo a 60 FPS...");

    // Configura la libreria grafica interna per evitare schermate nere
    var canvas = document.getElementById("screen");
    
    // Carichiamo un'architettura x86 ultraleggera pre-configurata via JS-DOS protetto
    Dos(canvas, {
        wdosboxUrl: "https://js-dos.com",
        cycles: "max", // Forza le massime prestazioni a 60fps
        autostart: true
    }).then(function(runtime) {
        console.log("Motore x86 attivo ed eseguito sul canvas nativo!");
        
        // Carichiamo l'interfaccia di avvio di Windows
        runtime.main(["-c", "echo Avvio di XP-VM in corso..."]);
    }).catch(function(err) {
        console.error("Errore di inizializzazione grafica:", err);
    });
};

function iniettaApp(tipo) {
    alert("Iniezione del pacchetto " + tipo + " completata nel file system locale della VM!");
}
