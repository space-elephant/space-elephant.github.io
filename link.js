var startCode = "<!DOCTYPE html>\n\
<html>\n\
  <head>\n\
    <title>Hello World!</title>\n\
  </head>\n\
  <body>\n\
    <h1>Hello World!</h1>\n\
  </body>\n\
</html>\n\
";

function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var region = document.cookie.split(';');
    for(var i = 0; i < region.length; i++) {
	var c = region[i];
	while (c.charAt(0) === ' ') {
	    c = c.substring(1);
	}
	if (c.indexOf(name) === 0) {
	    return decodeURIComponent(c.substring(name.length, c.length));
	}
    }
    return null;
}

function run() {
    var html = document.getElementById('html').value;
    setCookie('value', html);
    document.write(html);
    window.location.reload();
}

function setup() {
    var cookieVal = getCookie('value');
    document.getElementById('html').value = cookieVal===null ? startCode : cookieVal;
}
