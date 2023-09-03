$(document).ready(function() {
    $('#codeForm').submit(function(e) {
        e.preventDefault();
        var code = $('#codeInput').val();

        $.get('https://victorsala.me/CodeCoachAPI/response.php', { content: code }, function(data) {
            $('#newResultField').val(data.message);
        }).fail(function() {
            $('#newResultField').val('Error occurred during the request.');
        });
    });

    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');

    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
});
