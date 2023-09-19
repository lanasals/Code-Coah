// Quan el document estÃ  llest
$(document).ready(function() {
    
    // Quan s'envia el formulari inclÃ²s a "codeForm" que inclou on lusuari posa el seu codi i on mopstrarem la resposta obtinguda de OpenAI
	console.log(`in app.js`);
    $('#codeForm').submit(function(e) {
        
        // Prevenir l'acciÃ³ per defecte del formulari, No volem carregar una pagina nova
        e.preventDefault();
        
        // Esborrar el contingut del camp "newResultField" quan es fa clic al botÃ³ "Correct", per feedback pel usuari. que sapiga que pasa algo
        $('#newResultField').val('');
        
        // Recollir el codi introduÃ¯t per lusuari al camp "codeInput"
        var code = $('#codeInput').val();

        // Realitzar la peticiÃ³ GET a l'API que cridarÃ¡ a OpenAI, estÃ  en servidor PHP per amagar lAPI_KEY  de lo contrari OpenAI deshabilita la key. No les vols pÃºbliques. Pasem 2 paerametres, el codi a examinar  (code)  i la opcio del desplegable (CoCoJob)
        $.get('https://victorsala.me/CodeCoachAPI/response.php', { content: code, CoCoJob: CoCoJob }, function(data) {
            
            // Actualitzar el contingut del camp "newResultField" amb la resposta de l'API
            $('#newResultField').val(data.message);
            
        }).fail(function() {
            
            // Mostrar un missatge d'error si la peticiÃ³ falla
            $('#newResultField').val('Error occurred during the request.');
        });
    });


    });
