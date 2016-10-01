  $(document).ready(function() {
    alert('Cargada la página');

    var window_height = $(window).height();
    //Charge gypsi.
    var q="Construction";
    $.ajax({

      url:"http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=oh-my-god",
      dataType:"jsonP",
      success:function(result){
        data = result.data.image_url;
        alert(JSON.stringify(result));
        $('#imagen').css({'background-image': 'url('+data+')','height':window_height+'px'});
      },
      fail:function(){
        alert("Error");
      }

    })
  })
