$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
  })
  
function getVideoFr() {
    
  var a = document.getElementById("fd_s").value;
  $.get('config/getVideoJs.php', {a:a}, function(data) {
    $('#random_code_subitlte').html(data);
  });
}


