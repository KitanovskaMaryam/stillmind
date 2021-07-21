$("#clicky").click(function(){
          if($("#slide").is(':hidden'))
            {
          $("#slide").animate({ width: 'show' }); 
            }
            else
            {
              $("#slide").animate({ width: 'hide' }); 
            }
       });
$(document).on('click', '.nav-link', function(){
    $("#slide").animate({ width: 'hide' });
})