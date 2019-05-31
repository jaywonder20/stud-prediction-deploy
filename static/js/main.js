$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        onStepChanging: function (event, currentIndex, newIndex) { 
            if ( newIndex === 1 ) {
                $('.steps ul').addClass('step-2');
            } else {
                $('.steps ul').removeClass('step-2');
            }
            if ( newIndex === 2 ) {
                $('.steps ul').addClass('step-3');
            } else {
                $('.steps ul').removeClass('step-3');
            }

            if ( newIndex === 3 ) {
                $('.steps ul').addClass('step-4');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-4');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 4 ) {
                $('.steps ul').addClass('step-5');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-5');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 5 ) {
                $('.steps ul').addClass('step-6');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-6');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 6 ) {
                $('.steps ul').addClass('step-7');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-7');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 7 ) {
                $('.steps ul').addClass('step-8');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-8');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 8 ) {
                $('.steps ul').addClass('step-9');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-9');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 9 ) {
                $('.steps ul').addClass('step-10');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-10');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 10 ) {
                $('.steps ul').addClass('step-11');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-11');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 11 ) {
                $('.steps ul').addClass('step-12');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-12');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 12 ) {
                $('.steps ul').addClass('step-13');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-13');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 13 ) {
                $('.steps ul').addClass('step-14');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-14');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 14 ) {
                $('.steps ul').addClass('step-15');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-15');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 15 ) {
                $('.steps ul').addClass('step-16');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-16');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 16 ) {
                $('.steps ul').addClass('step-17');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-17');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 17 ) {
                $('.steps ul').addClass('step-18');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-18');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 18 ) {
                $('.steps ul').addClass('step-19');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-19');
                $('.actions ul').removeClass('step-last');
            }

            if ( newIndex === 19 ) {
                $('.steps ul').addClass('step-20');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-20');
                $('.actions ul').removeClass('step-last');
            }

            
            if ( newIndex === 20 ) {
                $('#wizard').find('a[href="#finish"]').hide();
                $('#wizard .actions li:last-child').html('<input class="btn" type="submit" value="Make Prediction">').fadeIn();
                 
            } 

            if ( newIndex === 20 ) {
                $('.steps ul').addClass('step-21');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-21');
                $('.actions ul').removeClass('step-last');  
            } 

            


            if ( newIndex === 21 ) {
                $('.steps ul').addClass('step-22');
                $('.actions ul').addClass('step-last');
            } else {
                $('.steps ul').removeClass('step-22');
                $('.actions ul').removeClass('step-last');
            }


            return true; 
        },
        labels: {
            next: "Next",
            previous: "Previous"
        }
    });
    // Custom Steps Jquery Steps
    $('.wizard > .steps li a').click(function(){
    	$(this).parent().addClass('checked');
		$(this).parent().prevAll().addClass('checked');
		$(this).parent().nextAll().removeClass('checked');
    });
    // Custom Button Jquery Steps
    $('.forward').click(function(){
    	$("#wizard").steps('next');
    })
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    })
    // Checkbox
    $('.checkbox-circle label').click(function(){
        $('.checkbox-circle label').removeClass('active');
        $(this).addClass('active');
    })
})
