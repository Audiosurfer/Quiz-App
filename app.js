$(document).ready(function () {
    "use strict";
    var qcount = 0,
        rightCount = 0,
        addOptions = function () {
            $('audio').attr('src', questionList[qcount].song);
            for (var i=0; i < questionList[i].options.length; i++) {
                $('.quizopt').append("<img src="+ questionList[qcount].options[i]+" />");
        }
    };
    
    var correctCheck = function() {
        var choice = $('.selected').attr('src');
        if (choice === questionList[qcount].correct) {
            alert("Got it right!");
            rightCount += 1;
        }
        else {
            alert("Got it wrong");
        }
    }
    
    var showResults = function() {
        if (qcount > 4) {
            $('#quizspot').addClass('hidden');
            $('#results').removeClass('hidden');
            $('#results h1').text('You scored ' + rightCount + '/5. Play again?');
        }
    }
    
    var restartGame = function() {
        $('#results').addClass('hidden');
        $('#quizspot').removeClass('hidden');
        qcount = 0;
        rightCount = 0;
        addOptions();
    }
    
    $('#howtoplay').on('click', function() {
        $('#tutorial').toggleClass('hidden');
    })
        
    $('#startgame').on('click', function() {
        $('#startplace').addClass('hidden');
        $('#quizspot').removeClass('hidden');
        addOptions();
    })
     
    $('.quizopt').on('click', 'img', function() {
        $(this).toggleClass('selected');
    })
     
    $('#continue').on('click', function() {
        correctCheck();
        $('.quizopt').empty();
        qcount +=1; 
        showResults();
        addOptions();
        
    })
    
    $('#restart').on('click', function() {
        restartGame();
    })
});

