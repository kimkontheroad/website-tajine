// js für hide & show der Artikel
//*



$(document).ready(function () {
    $('#container_4p_mild').hide();
    $('#container_4p_scharf').hide();
    $('#container_2p_mild').hide();
    $('#container_2p_scharf').hide();

    $('#btn-choice').click(function () {
        var choice = $('#personas').val();
        if ((choice == 4) && $('#scharf').is(':checked')) {
            $('#container_4p_mild').hide();
            $('#container_2p_mild').hide();
            $('#container_2p_scharf').hide();
            $('#container_4p_scharf').slideToggle();
        } else if (choice == 4) {
            $('#container_4p_scharf').hide();
            $('#container_2p_mild').hide();
            $('#container_2p_scharf').hide();
            $('#container_4p_mild').slideToggle();
        } else if ((choice == "2") && $('#scharf').is(':checked')) {
            $('#container_4p_mild').hide();
            $('#container_4p_scharf').hide();
            $('#container_2p_mild').hide();
            $('#container_2p_scharf').slideToggle();
        } else if (choice == "2") {
            $('#container_4p_mild').hide();
            $('#container_4p_scharf').hide();
            $('#container_2p_scharf').hide();
            $('#container_2p_mild').slideToggle();
        }
    });
});
