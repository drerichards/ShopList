$(document).ready(function() {

    // gonna use enter as well as button for user conveniency
    $('#textbox').keyup(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $('.entry-btn').click();
        };
    });

    // add item to list
    $('.entry-btn').click(function() {
        var txtbox = document.getElementById('textbox');
        var txtval = txtbox.value;
        event.preventDefault();

        if ($.trim($('#textbox').val())) {
            $('<li class="items"></li>').appendTo('#list').html('<span><img class="basket" src="images/basket.png"/>' +
                txtval + '</span><img class="trash" src="images/delete.png"/>');
            document.getElementById('textbox').value = '';
        };
    });

    // show delete icon over item
    $('#list').on('mouseenter', 'li', function() {
        $(this).children('.trash').toggleClass('show');
    });

    $('#list').on('mouseleave', 'li', function() {
        $(this).children('.trash').toggleClass('show');
    });

    // remove item from list
    $('#list').on('click', '.trash', function(e) {
        e.preventDefault();
        var select_item = $(this).closest('li').text();
        $(this).parent().remove();
    });

    // remove item add to bought
    $('#list').on('click', '.basket', function(e) {
        e.preventDefault();
        var selectItem = $(this).closest('li').text();
        $('<li class="b_items"></li>').appendTo('#bought').html('<span><img class="check" src="images/check.png"/>' + selectItem + '</span>');
        $(this).parent().remove();
        $('.show').remove();
        $('#list li:empty').remove();
    });

    // sort items
    $('#list').sortable({
        axis: "y"
    });

    // clear list
    $('#clear-btn').click(function() {
        $('#list').empty();
        $('#bought').empty();
    });

});
