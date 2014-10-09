$(document).ready(function() {
    $('#startgame').on('click', function() {
        $(this).parent().parent().addClass('hidden');
        $(this).parent().parent().next().removeClass('hidden');
    })
    
    $('img').on('dblclick', function() {
        $(this).parent().parent().addClass('hidden');
        $(this).parent().parent().next().removeClass('hidden');
    })
    
//    var questionCheck = function() {
        
});

