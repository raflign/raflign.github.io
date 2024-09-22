"use strict";

function loadPDF() {
    $("#loginbox").hide();
    $("#pdfContainer").show();
}

$("#loginbutton").on("click", function() {
    var password = $("#password").val();
    var hash = Sha1.hash(password); // Hash the password
    console.log("Entered password:", password);
    console.log("Generated hash:", hash);
    
    // Expected hash for 'mypassword'
    if (hash === "5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8") { 
        loadPDF();
    } else {
        $("#wrongPassword").show();
        $("#password").val("");
    }
});

$("#password").keypress(function(e) {
    if (e.which == 13) {
        $("#loginbutton").click();
    }
});

$("#password").focus();
