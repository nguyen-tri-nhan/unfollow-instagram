setInterval(
    function() {
        var arr = document.getElementsByClassName("sqdOP  L3NKy    _8A5w5    ");

        for (var i = 1, len = arr.length; i < len; i++) {
            arr[i].click();
            document.getElementsByClassName("aOOlW -Cab_   ")[0].click();
        }

        var scroll_stuff = document.getElementsByClassName("isgrP")[0];
        scroll_stuff.scrollTop = scroll_stuff.scrollHeight;
    }, 600000);