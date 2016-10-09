/**************************************************
* JAVIER RODRÍGUEZ SOLER.
* 2016
**************************************************/

$(document).ready(function()
{
  var window_height = $(window).height();
  //Charge gypsi.
  var q="Construction";
  $.ajax({
    url:"http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=sorry",
    dataType:"jsonP",
    success:function(result)
    {
      data = result.data.image_url;
      $('#img').attr('src',data);
      $('#img').css({'height':window_height+'px'});
    },
    fail:function()
    {
    alert("Error");
    }
  })
  $('#countdown').countdown('2016/10/31').on('update.countdown', function(event)
  {
    var $this = $(this).html(event.strftime(''
      + '<h2><span>%-w</span> week%!w '
      + '<span>%-d</span> day%!d '
      + '<span>%H</span> hr '
      + '<span>%M</span> min '
      + '<span>%S</span> sec</h2>'));
  });
})
