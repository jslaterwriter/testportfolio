var resetBtn = document.getElementById("reset")
var fName = document.getElementById("f-name2")
var lName = document.getElementById("l-name2")
var email = document.getElementById("email")
var tArea = document.getElementById("project")
var form = document.getElementsByTagName("form")
var tel = document.getElementById("tel")

// Get the modal
var modal = document.getElementById('custom-modal');

// Get the button that opens the modal
var btn = document.getElementById("commission");

// Get the button that opens the modal
var btn2 = document.getElementById("btn-modal");

// Get the button that opens the modal
var btn3 = document.getElementById("commission2")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modalContent = document.getElementsByClassName("modal-content")

resetBtn.addEventListener("click", function(){
        email.textContent="";
        fName.textContent="";
        lName.textContent="";
        tArea.textContent="";
})


// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    modal.classList.add="btn-morph";
    
}

// When the user clicks on the button, open the modal 
btn2.onclick = function() {
    modal.style.display = "block";
    modal.classList.add="btn-morph";
    
}

// When the user clicks on the button, open the modal 
btn3.onclick = function() {
    modal.style.display = "block";
    modal.classList.add="btn-morph";
    
   }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    form.classList.add="fade-in";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



resetBtn.addEventListener("click", function(){
        email.textContent="";
        fName.textContent="";
        lName.textContent="";
        tArea.textContent="";
        tel.textContent="";
})