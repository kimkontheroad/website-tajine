$(document).ready(function () {
    /* js für hide & show der Artikel*/
    $('#container_4p_mild').hide();
    $('#container_4p_scharf').hide();
    $('#container_2p_mild').hide();
    $('#container_2p_scharf').hide();

    $('#btn-choice').click(function () {
        var choice = $('#personas').val();
        var choice1 = $('#scharfmild').val();
        if ((choice == 4) && (choice1 == "scharf")) {
            $('#container_4p_mild').hide();
            $('#container_2p_mild').hide();
            $('#container_2p_scharf').hide();
            $('#container_4p_scharf').slideToggle();
        } else if ((choice == 4) && (choice1 == "mild")) {
            $('#container_4p_scharf').hide();
            $('#container_2p_mild').hide();
            $('#container_2p_scharf').hide();
            $('#container_4p_mild').slideToggle();
        } else if ((choice == "2") && (choice1 == "scharf")) {
            $('#container_4p_mild').hide();
            $('#container_4p_scharf').hide();
            $('#container_2p_mild').hide();
            $('#container_2p_scharf').slideToggle();
        } else if ((choice == "2") && (choice1 == "mild")) {
            $('#container_4p_mild').hide();
            $('#container_4p_scharf').hide();
            $('#container_2p_scharf').hide();
            $('#container_2p_mild').slideToggle();
        }
    });
    /* js für hide & show der Artikel*/


    /*Script für select  
        Reference: http://jsfiddle.net/BB3JK/47/
                                                    */
    $('select').each(function () {
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });

    /*Script für select  
    Reference: http://jsfiddle.net/BB3JK/47/
    */

    /* script für to-the-top-button */
    var amountScrolled = 2000;
    $(window).scroll(function () {
        if ($(window).scrollTop() > amountScrolled) {
            $('#top-btn').fadeIn();
        } else {
            $('#top-btn').fadeOut();
        }
    });

    /* script für to-the-top-button */

    $('a[data-lightbox="a"]').imageLightbox();

});