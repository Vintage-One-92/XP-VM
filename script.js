window.onload = function() {
    console.log("XP-VM: Caricamento emulatore x86 compatibile...");

    var container = document.getElementById('canvas-container') || document.body;
    
    // Usiamo il preset ufficiale di v86 distribuito in modalità sicura
    container.innerHTML = `
        <iframe 
            src="https://copy.sh" 
            style="width:800px; height:600px; border:none;" 
            allowfullscreen>
        </iframe>
        <div style="text-align:center; margin-top:10px;">
            <button onclick="alert('Iniezione Microsoft Dance programmata!')" style="padding:10px; background:#245dd7; color:white; border:none; border-radius:5px; cursor:pointer; margin-right:10px;">💃 Inietta Microsoft Dance</button>
            <button onclick="alert('Iniezione Entertainment Pack programmata!')" style="padding:10px; background:#245dd7; color:white; border:none; border-radius:5px; cursor:pointer; margin-right:10px;">🕹️ Inietta Entertainment Pack</button>
            <button onclick="alert('Iniezione Office 2000 programmata!')" style="padding:10px; background:#245dd7; color:white; border:none; border-radius:5px;">📁 Inietta Office 2000 Mini</button>
        </div>
    `;
};
