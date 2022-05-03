var panel = document.getElementById("panel")

$(document).ready(function(){
  panel.style.display = "none"
    $("#learn-more").click(function(){
      $("#panel").slideToggle("slow");
    });
  });