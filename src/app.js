window.addEventListener("load", function () {

    const _shans = document.getElementById("shans");
    const _dogruReqem = document.getElementById("dogruReqem");
    const _input = document.getElementById("input");
    const _btn = document.getElementById("btn");
    const _help = document.getElementById("help");
    const _start = document.getElementById("start");
    const _end = document.getElementById("end");
    const _xal = document.getElementById("xal");

    var oyunStatusu = true;

    var random = 0;
    var start = 0;
    var end = 100;
    var shans = 10;
    var xal = 0;

    function randomYaradan(start = 0, end = 100) {
        if (oyunStatusu === true) {

            random = Math.floor(start + Math.random() * (end - start));
            _dogruReqem.innerText = "**";

        } else {
            yenidenOyna();
        }
    }


    function startAndEnd() {
        if (oyunStatusu === true) {

            _start.innerText = start;
            _end.innerText = end;
            _shans.innerText = shans;
            _xal.innerText = xal;
        } else {
            yenidenOyna();
        }
    }

    function yoxla() {
        if (oyunStatusu === true) {

            let ipt = Number(_input.value);
            if (random === ipt) {
                _help.innerText = "Doqrudur";
                _dogruReqem.innerText = random;

                setTimeout(function () {
                    xal++;
                    _xal.innerText = xal
                    shans = 10;
                    randomYaradan(start, end);
                    _help.innerText = "---";
                }, 2000)

            } else if (random > ipt) {
                _help.innerText = "Daha boyuk ede sec";
                shans--;
            } else {
                _help.innerText = "Daha kicik ede sec";
                shans--;
            }
            _shans.innerText = shans;
            _input.value = "";
            if (shans <= 0) {
                _help.innerText = "Oyunu uduzduz";
                oyunStatusu = false;
            }
        } else {
            yenidenOyna();
        }
    }

    function yenidenOyna() {
        if (window.confirm("yeniden bashlasinmi?")) {
            window.open(window.location.href, "_parent")
        }
    }

    _btn.addEventListener("click", function () {
        yoxla();
    })

    function enter(e) {
        const key = e.keyCode;
        if (key === 13) {
            yoxla();
        }
    }
    _input.addEventListener("keydown", function (e) {
        enter(e);
    })

    startAndEnd();
    randomYaradan(start, end);
});