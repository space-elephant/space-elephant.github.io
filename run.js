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

function finalRun() {
    document.write(getCookie('value'));
}
