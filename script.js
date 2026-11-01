window.onload = function() {
    // Inizializziamo l'emulatore v86
    var emulator = new V86Starter({
        // Colleghiamo l'emulatore al canvas che abbiamo creato nell'HTML
        canvas: document.getElementById("screen"),
        
        // Diciamo a v86 quanta memoria RAM dare a Windows XP (256MB bastano per Office 2000)
        memory_size: 256 * 1024 * 1024,
        
        // Diciamo a v86 quanta memoria video (VGA) simulare
        vga_memory_size: 16 * 1024 * 1024,

        // IMPORTANTE: Questa sarà la strada per caricare il tuo Windows XP.
        // Per ora lo lasciamo commentato o vuoto perché dobbiamo ancora creare l'immagine.
        // hda: { url: "winxp.img" }, 

        // Avvia la macchina virtuale appena la pagina si è caricata
        autostart: true,
    });

    console.log("XP-VM Inizializzata. In attesa del file del sistema operativo...");
};
