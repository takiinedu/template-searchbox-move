document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("hie").style.top = "0";
    setTimeout(function() {
        document.getElementById("input").value = ""
    }, 700);
    setTimeout(function() {
        document.getElementById("hie").style.top = "-100%";
    }, 750);
});

