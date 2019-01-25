function run() {
    var html = document.getElementById('html');
    var encoded = encodeURIcomponent(html);
    var url = 'data:text/html,' + encoded;
    open(url, '_blank');
}
