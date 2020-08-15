function INNERHTML(){
  var child = document.getElementById("child");
  child.innerHTML = "<h2>강태영</h2>";
}

function HTMLINHTML(){
  $(document).ready( function() {
    $("#child").load("testContents.html");
  });
}

HTMLINHTML();