$(function() {


    var BucketListItems = ["Visit San Fransico", "Live in East Berlin", "Jump off Grand Canyon"];
    var DoneThatItems = ["Sailed around the World", "Ate the largest Pizza", "Won a beer drinking contest"];
    var okIcon = '<span class="glyphicon glyphicon-ok okMe" aria-hidden="true"></span>';
    var removeIcon = '<span class="glyphicon glyphicon-remove removeMe" aria-hidden="true"></span>';
    var tagIcon = '<span class="glyphicon glyphicon-tag tagMe" aria-hidden="true"></span>';

    for (var i = 0; i < DoneThatItems.length; i++) {
        var DoneItem = DoneThatItems[i];
        $('.doneThat ol').append('<li>' + DoneItem + okIcon + '</li>');
    }

    for (i = 0; i < BucketListItems.length; i++) {
        var BucketItem = BucketListItems[i];
        $('.bucket ol').append('<li>' + BucketItem + removeIcon + tagIcon + '</li>');
    }


    $('.removeMe').click(getItRemoved);

    function getItRemoved() {
        var me = $(this);
        $(this).parents('li').fadeOut(800);
    }


    $('.tagMe').click(moveToBucket);

    function moveToBucket() {
        var user = $(this).parents('li').text();
        $('.doneThat ol').prepend('<li>' + user + okIcon + '</li>');
        $(this).parents('li').fadeOut(800);

    }


    $(function() {
        $("form").submit(function(e) {

            // This resets the input box

            $('input:text').focus(
                function() {
                    $(this).val('');
                });

            var user = $("input:text").val();
            var value = $('input[name="test"]:checked').val();

            // alert if user puts empty string

            if (user === "") {
                $('.input-area').prepend('<div class="alert alert-warning" id="name-alert" role="alert">Hey You! please type something</div>');
                $("#name-alert").fadeTo(2000, 500).slideUp(500, function() {
                    $("#name-alert").slideUp(500);
                });
            }


            if (value === "done") {
                $('.doneThat ol').prepend('<li>' + user + okIcon + '</li>');
            } else {
                $('.bucket ol').prepend('<li>' + user + removeIcon + tagIcon + '</li>');
            }


            $('.removeMe').click(getItRemoved);

            $('.tagMe').click(moveToBucket);

            // return false to stops callback execution and returns immediately when called.
            // eller the best practice...

            e.preventDefault();

        });

    });



});