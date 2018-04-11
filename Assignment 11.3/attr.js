function removeAttrs() {
    document.getElementById("attrs").innerHTML = "";
}

function showAttrs() {

     var anchor = document.getElementById("google");
     var result = document.getElementById("attrs");

     // First, let's verify that the anchor has some attributes    
     if (anchor.hasAttributes()) {
       var attrs = anchor.attributes;
       var output = "";
       for(var i = attrs.length - 1; i >= 0; i--) {
         output += '<strong>'+attrs[i].nodeName+'</strong> = '+attrs[i].nodeValue+'<br />';
           if (i==0) {
               output += '<br /><br /><br /><br />';
           }
       }
       result.innerHTML = output;
     } else {
       result.innerHTML = "No attributes to show";
     }
}