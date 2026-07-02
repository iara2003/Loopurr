function showhide(){
let popup = document.getElementById("popup")
if (popup.style.display == "none") {
popup.style.display = "flex"


}else {
  popup.style.display = "none"

}
}

function showhidetwo(){
  let popoverbox = document.getElementById("popoverbox")
  if (popoverbox.style.display == "none") {
    popoverbox.style.display = "block"
  
  
  }else {
    popoverbox.style.display = "none"
  
  }
  }


function gomainpage() {
  var check = document.getElementById('check');
  var errormsg = document.getElementById('errormsg')

  if (check.checked == true) {
    window.location.href = 'home.html';
  }
  
  else {errormsg.style.display = 'block'

  }
}



  
