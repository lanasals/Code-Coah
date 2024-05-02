// Quan el document està llest
$(document).ready(function() {
    
    // Quan s'envia el formulari inclòs a "codeForm" que inclou on lusuari posa el seu codi i on mopstrarem la resposta obtinguda de OpenAI
    console.log(`in app.js`);
    $('#codeForm').submit(function(e) {
        
        // Prevenir l'acció per defecte del formulari, No volem carregar una pagina nova
        e.preventDefault();
        
        // Esborrar el contingut del camp "newResultField" quan es fa clic al botó "Correct", per feedback pel usuari. que sapiga que pasa algo
        $('#newResultField').val('');
        
        // Recollir el codi introduït per lusuari al camp "codeInput"
        var code = $('#codeInput').val();
        
        // Encode the code using encodeURIComponent()
        var encodedCode = encodeURIComponent(code);
        
        // Change the button text to "WAIT"
        $('.button__correct').text('Please, wait...');
        
        // Realitzar la petició POST a l'API que cridarà a OpenAI, està en servidor PHP per amagar lAPI_KEY  de lo contrari OpenAI deshabilita la key. No les vols públiques. Pasem 2 paerametres, el codi a examinar  (code)  i la opcio del desplegable (CoCoJob)
        $.post('https://victorsala.me/CodeCoachAPI/response.php', { content: code, CoCoJob: CoCoJob }, function(data) {
            
            // Actualitzar el contingut del camp "newResultField" amb la resposta de l'API
            $('#newResultField').val(data.message);
            
            // Change the button text back to "Correct"
            $('.button__correct').text('Correct');
            
        }).fail(function() {
            
            // Mostrar un missatge d'error si la petició falla
            $('#newResultField').val('Error occurred during the request.');
            
            // Change the button text back to "Correct" in case of failure
            $('.button__correct').text('Correct');
        });
    });

});
