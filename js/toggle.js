function myFunction() {
    var x = document.getElementById("menu");
    var btn = document.getElementById("btn_nav");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        btn.innerHTML = "&times;";
    } else { 
        x.className = x.className.replace(" w3-show", "");
        btn.innerHTML = "&#9776;";
    }
}
      
function dropdown(id){
    var x = document.getElementById(id);
    if(x.className.indexOf("w3-show") == -1){
        x.className += " w3-show";
    }else{
        x.className = x.className.replace("w3-show", "");
    }
}