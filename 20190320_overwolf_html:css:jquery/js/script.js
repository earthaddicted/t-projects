$(document).ready(function() {
    var $element = $('input[type="range"]');
    var $output = $('output');

    function updateOutput(el, val) {
        el.textContent = val;
    }

    $element
        .rangeslider({
            polyfill: false,
            onInit: function() {
                updateOutput($output[0], this.value);
            }
        })
        .on('input', function() {
            updateOutput($output[0], this.value);
        });
});

$(function() {
    $(".range-wrapper input[type='range']").change(function() {
        if ($(this).val() >= 80) {
            $(this).parent().removeClass('range-red');
            $(this).parent().addClass('range-gree');
        } else {
            $(this).parent().addClass('range-red');
            $(this).parent().removeClass('range-gree');
        }

        console.log($(this).val());
    });
});