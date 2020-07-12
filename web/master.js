jQuery('html,body').ready(function () {
    jQuery('body').on('click', '#calcSalbutton', function(e){
        setTimeout(function(){ 
            $('body').find('#calcSalbutton').addClass('hide');
            $('body').find('#calcSalinput').removeClass('hide');
        }, 2000);
        
    });
});