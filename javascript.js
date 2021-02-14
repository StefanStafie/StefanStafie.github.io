var a;

function start_as() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var a = urlParams.get('page')
    if (a == null)
        a = 1;

    document.getElementById("content1").style.display = 'none';
    document.getElementById("content2").style.display = 'none';
    document.getElementById("content3").style.display = 'none';
    document.getElementById("content4").style.display = 'none';
    var yourUl = document.getElementById("choice1");
    yourUl.style.background = 'repeating-linear-gradient(#280028, black 5px)';

    var yourUl = document.getElementById("choice2");
    yourUl.style.background = 'repeating-linear-gradient(#280028, black 5px)';

    var yourUl = document.getElementById("choice3");
    yourUl.style.background = 'repeating-linear-gradient(#280028, black 5px)';

    var yourUl = document.getElementById("choice4");
    yourUl.style.background = 'repeating-linear-gradient(#280028, black 5px)';

    if (a == 1) {
        var yourUl = document.getElementById("content1");
        yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
        var yourUl = document.getElementById("choice1");
        yourUl.style.background = 'repeating-linear-gradient(#280028, transparent 5px), linear-gradient(0deg, rgba(40, 0, 40, 1) 95%, black 100%)';

    } else if (a == 2) {
        var yourUl = document.getElementById("content2");
        yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
        var yourUl = document.getElementById("choice2");
        yourUl.style.background = 'repeating-linear-gradient(#280028, transparent 5px), linear-gradient(0deg, rgba(40, 0, 40, 1) 95%, black 100%)';

    } else if (a == 3) {
        var yourUl = document.getElementById("content3");
        yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
        var yourUl = document.getElementById("choice3");
        yourUl.style.background = 'repeating-linear-gradient(#280028, transparent 5px), linear-gradient(0deg, rgba(40, 0, 40, 1) 95%, black 100%)';
    } else {
        var yourUl = document.getElementById("content4");
        yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
        var yourUl = document.getElementById("choice4");
        yourUl.style.background = 'repeating-linear-gradient(#280028, transparent 5px), linear-gradient(0deg, rgba(40, 0, 40, 1) 95%, black 100%)';
    }
}

function mech(a) {
    var queryParams = new URLSearchParams(window.location.search);

    // Set new or modify existing parameter value. 
    queryParams.set("page", a);

    // Replace current querystring with the new one.
    history.replaceState(null, null, "?" + queryParams.toString());

    document.getElementById("content1").style.display = 'none';
    document.getElementById("content2").style.display = 'none';
    document.getElementById("content3").style.display = 'none';
    document.getElementById("content4").style.display = 'none';
    var yourUl = document.getElementById("choice1");
    yourUl.style.background = 'repeating-linear-gradient(#280028, black 5px)';

    var yourUl = document.getElementById("choice2");
    yourUl.style.background = 'repeating-linear-gradient(#280028, black 5px)';

    var yourUl = document.getElementById("choice3");
    yourUl.style.background = 'repeating-linear-gradient(#280028, black 5px)';

    var yourUl = document.getElementById("choice4");
    yourUl.style.background = 'repeating-linear-gradient(#280028, black 5px)';

    if (a == 1) {
        var yourUl = document.getElementById("content1");
        yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
        var yourUl = document.getElementById("choice1");
        yourUl.style.background = 'repeating-linear-gradient(#280028, transparent 5px), linear-gradient(0deg, rgba(40, 0, 40, 1) 95%, black 100%)';

    } else if (a == 2) {
        var yourUl = document.getElementById("content2");
        yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
        var yourUl = document.getElementById("choice2");
        yourUl.style.background = 'repeating-linear-gradient(#280028, transparent 5px), linear-gradient(0deg, rgba(40, 0, 40, 1) 95%, black 100%)';

    } else if (a == 3) {
        var yourUl = document.getElementById("content3");
        yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
        var yourUl = document.getElementById("choice3");
        yourUl.style.background = 'repeating-linear-gradient(#280028, transparent 5px), linear-gradient(0deg, rgba(40, 0, 40, 1) 95%, black 100%)';
    } else {
        var yourUl = document.getElementById("content4");
        yourUl.style.display = yourUl.style.display === 'none' ? '' : 'none';
        var yourUl = document.getElementById("choice4");
        yourUl.style.background = 'repeating-linear-gradient(#280028, transparent 5px), linear-gradient(0deg, rgba(40, 0, 40, 1) 95%, black 100%)';
    }
}