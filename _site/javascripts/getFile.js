function ajax(url, id) {
    var request =  new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader("Content-Type",
      "application/x-www-form-urlencoded");

    request.onreadystatechange = function() {
      var done = 4, ok = 200;
      if (request.readyState == done && request.status == ok) {
        if (request.responseText) {
          if (! document.getElementById(id).innerHtml=request.responseText)
	      alert("unable to load");
        }
      }
    };
    request.send();
}
