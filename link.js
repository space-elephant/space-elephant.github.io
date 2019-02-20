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

var cookieWorks;

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
    var html = document.getElementById('html').innerText;
    if (cookieWorks) {
	setCookie('value', html);
    } else {
	document.write(html);
	window.location.reload();
    }
}

function setup() {
    var cookieVal = getCookie('value');
    document.getElementById('html').innerText = cookieVal===null ? startCode : cookieVal;
    if (cookieVal === null) {// if it wasn't there before
	setCookie('value', startCode)// is cookie supported?
	cookieWorks = false;//getCookie('value') === startCode;
	if (!cookieWorks) {
	    document.getElementById('noCookieWarning').innerHTML = 'Because you have disabled cookies, you cannot open the &ldquo;run&rdquo; link in a new tab.';
	    document.getElementById('run').href = "javascript:void(0)";
	}
    } else {
	cookieWorks = true;
    }
}
