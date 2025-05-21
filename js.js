var BTN = document.getElementById("myButton");

var doThings = function(event){
    alert("silly happy fun times");
    console.log(event);
    
}
for(var i = 0; i < 3; i++){
    var newBTN = BTN.cloneNode(true);
    document.body.append(newBTN);
    newBTN.addEventListener("click", doThings);
}

