document.getElementById('playButton').addEventListener('click', function() {
    var iframe = document.getElementById('video');
    var src = iframe.src;
    iframe.src = src + "&autoplay=1";
});