$(document).ready(function(){
  $('header').fadeOut(200);
  $('.random').show();
  $('.back').hide();

  $('#dropdownMenu1').click(function(){
    $('.mexican, .italian, .japanese, .chinese, .chilean').hide();
    $('.random').show();
  })

  $('#chileanFood').click(function(){
    $('.mexican, .italian, .japanese, .chinese').hide();
    $('.chilean').show();
  })

  $('#italianFood').click(function(){
    $('.mexican, .chilean, .japanese, .chinese').hide();
    $('.italian').show();
  })

  $('#mexicanFood').click(function(){
    $('.chilean, .italian, .japanese, .chinese').hide();
    $('.mexican').show();
  })

  $('#japaneseFood').click(function(){
    $('.mexican, .italian, .chilean, .chinese').hide();
    $('.japanese').show();
  })

  $('#chineseFood').click(function(){
    $('.mexican, .italian, .japanese, .chilean').hide();
    $('.chinese').show();
  })

  //------- FUNCION MOUSEOVER/MOUSEOUT--------
  $('.restaurants img').mouseover(function(){
    var name = $(this).attr("data-name");
    
    $(this).css({"filter":"blur(5px)"});
    $(this).after('<p class="hoverName">' + name + '</p>');
  })
  
    $('.restaurants img').mouseout(function(){
      var name = $(this).attr("data-name");
      
      $(this).css({"filter":"none"});
      $('.hoverName').remove();
    })

//-------- FIN MOUSEOVER/MOUSEOUT------------
  $('.restaurants img').click(function(){

    $('.modal-title').empty();
    $('.message').empty();
    $('.address').empty();
    $('.cost').empty();

    var name = $(this).attr("data-name");
    var message = $(this).attr("data-message")
    var address = $(this).attr("data-address");
    var cost = $(this).attr("data-cost");

    $('.modal-title').append(name);
    $('.message').append(message);
    $('.address').append(address);
    $('.cost').append(cost);
  })
});

