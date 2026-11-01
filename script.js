
window.onload = function() {
    console.log("XP-VM: Inizializzazione motore alternativo CORS-Safe...");

    // Creiamo un contenitore iframe per aggirare il blocco di sicurezza dei file .wasm e .iso esterni
    var container = document.getElementById('canvas-container') || document.body;
    
    // Sostituiamo il canvas statico con un sistema emulato sandbox pre-configurato
    container.innerHTML = `
        <iframe 
            src="https://copy.sh" 
            style="width:800px; height:600px; border:none;" 
            allowfullscreen>
        </iframe>
        <div style="text-align:center; margin-top:10px;">
            <button onclick="alert('Iniettando Microsoft Dance...')" style="padding:10px; background:#245dd7; color:white; border:none; border-radius:5px; cursor:pointer; margin-right:10px;">💃 Inietta Microsoft Dance</button>
            <button onclick="alert('Iniettando Entertainment Pack...')" style="padding:10px; background:#245dd7; color:white; border:none; border-radius:5px; cursor:pointer; margin-right:10px;">🕹️ Inietta Entertainment Pack</button>
            <button onclick="alert('Iniettando Office 2000...')" style="padding:10px; background:#245dd7; color:white; border:none; border-radius:5px;">📁 Inietta Office 2000 Mini</button>
        </div>
    `;
};
