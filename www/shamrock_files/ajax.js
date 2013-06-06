// JavaScript Document
	
function checkusername(z)
{
    if (window.XMLHttpRequest)     // Standard object
    {
        xhr = new XMLHttpRequest();     // Firefox, Safari, ...
    }
    else if (window.ActiveXObject)   // Internet Explorer
    {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function()   // instructions to process the response };
    {
        if (xhr.readyState == 4)
        {
           document.getElementById("usernamevalid").innerHTML = xhr.responseText;
           // Received, OK
        }
        else
        {
          // Wait...
        }
    }
       xhr.open('GET', '/ajax/checkusername.cfm?username='+z, true);
    xhr.send(null);
}

function checkzip(z)
{
    if (window.XMLHttpRequest)     // Standard object
    {
        xhr = new XMLHttpRequest();     // Firefox, Safari, ...
    }
    else if (window.ActiveXObject)   // Internet Explorer
    {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function()   // instructions to process the response };
    {
        if (xhr.readyState == 4)
        {
           document.getElementById("zipcity").innerHTML = xhr.responseText;
           // Received, OK
        }
        else
        {
          // Wait...
        }
    }
       xhr.open('GET', '/ajax/zipcity.cfm?zip='+z, true);
    xhr.send(null);
}