(function () {
    var intro = document.querySelector('#intro');
    var introInner = document.querySelector('#intro .inner');
    var second = document.querySelector('#second');
    var third = document.querySelector('#third');
    var moon = document.querySelector('#moon');

    function buildAnimations() {
        var offset = window.scrollY;
        var h = window.innerHeight;
        var r = offset / h

        console.log(r)

        function introSection() {
            intro.style.backgroundSize = (90 + .5 * offset / 10) + '%'
            introInner.style.backgroundSize = (100 + 1.6 * offset / 10) + '%'
            introInner.style.fontSize = (200 + 4 * offset / 10) + '%'

            if (r <= 1) {
                intro.style.filter = `blur(0)`
            } else if (r > 1 && r < 2) {
                intro.style.opacity = 2 - r;
                intro.style.filter = `blur(${Math.round((r - 1) * 5)}px)`
            } else if (r >= 3) {
                intro.style.opacity = 0;
                intro.style.filter = `blur(0)`
            }
        } // r = 3

        function firstSection() {
            //
        } // r = 4

        function secondSection() {
            if (r <= 4) {
                second.style.position = `relative`
                second.style.filter = `blur(0)`
                second.style.opacity = 1;
            } else if (r > 5 && r < 6) {
                second.style.position = `sticky`
                second.style.top = `0`
                second.style.opacity = 6 - r;
                second.style.filter = `blur(${Math.round((r - 5) * 5)}px)`
            } else if (r >= 6) {
                second.style.position = `relative`
                second.style.opacity = 1;
                second.style.filter = `blur(0)`
            }
        } // r = 6

        function thirdSection() {
            if (r <= 5.5) {
                third.style.opacity = 0;
            } else if (r > 5.5 && r < 9) {
                var t = Math.min(1, (r - 5.5) / 2); // Anfangswert 0
                var t1 = 1 - t; // Anfangswert 1

                var tx = Math.max(0, (r - 7) * 1.2 ); // Anfangswert 0
                var tx1 = 1 - tx; // Anfangswert 1
                third.style.opacity = 0 - (5.5 - r);
                moon.style.backgroundPosition = (-20 + (t * 120)) + '% ' +  (12 - (t1 * 30) + (tx1 * 30)) + '%';
                if(r >= 7){
                    //moon.style.backgroundPosition = (-20 + (t * 120)) + '% ' +  (30 + (t1 * 30)) + '%';
                }
            } else if (r >= 7.5) {
                third.style.opacity = 1;
            }
        } // r = 9

        introSection();
        firstSection();
        secondSection();
        thirdSection();
    }

    buildAnimations();

    window.addEventListener('scroll', buildAnimations)

    new WOW().init();
})()
