document.addEventListener('copy', function(e) {
    let selectedText = `"${window.getSelection().toString()}"`;
    
    let additionalText = "\nCARROLL, Lewis. As Aventuras de Alice no País das Maravilhas. Tradução de Nayane de Souza. Rio de Janeiro: Editora Tal, 2024.";
    
    e.clipboardData.setData('text/plain', selectedText + additionalText);
    
    e.preventDefault();
});
