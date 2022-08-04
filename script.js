(function () {
    var intro = document.querySelector('#intro');
    var introInner = document.querySelector('#intro .inner');
    var second = document.querySelector('#second');
    var third = document.querySelector('#third');
    var moon = document.querySelector('#moon');
    var fourth = document.querySelector('#fourth');
    var fifth = document.querySelector('#fifth');
    var seven = document.querySelector('#seven');
    var sevenInner = document.querySelector('#seven > div');
    var eight = document.querySelector('#eight');
    var nine = document.querySelector('#ninth > div');
    var ten = document.querySelector('#ten > div');
    var tenballon2 = document.querySelector('#ten > div > div');
    var eightInner = document.querySelector('#eight > div');

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

                var tx = Math.max(0, (r - 7) * 1.2); // Anfangswert 0
                var tx1 = 1 - tx; // Anfangswert 1
                third.style.opacity = 0 - (5.5 - r);
                moon.style.backgroundPosition = (-20 + (t * 120)) + '% ' + (12 - (t1 * 30) + (tx1 * 30)) + '%';
            } else if (r >= 7.5) {
                third.style.opacity = 1;
            }
        } // r = 8

        function fourthSection() {
            let s = 8, e = 10, t = Math.min(1, (r - s) / (e - s)), tx = 1 - t;

            if (r <= s) {
                fourth.style.backgroundSize = '100% 100%';
                fourth.style.backgroundPosition = '50% 100%';
            } else if (r > s && r < e) {
                fourth.style.backgroundPosition = `0px ${86 + tx * 30}%`;
                fourth.style.backgroundSize = `100% ${80 + tx * 80}%`;
            } else if (r >= e) {
                fourth.style.backgroundSize = '100% 100%';
                fourth.style.backgroundPosition = '50% 100%';
            }
        } // r = 9

        function fifthSection() {
            let s = 9.5, e = 11.5, t = Math.min(1, (r - s) / (e - s)), tx = 1 - t;

            if (r <= s) {
                fifth.style.backgroundPosition = '50% 100%';
            } else if (r > s && r < e) {
                fifth.style.backgroundPosition = `${-30 + tx * 50}vw 20vh`;
            } else if (r >= e) {
                fifth.style.backgroundPosition = '50% 100%';
            }
        } // r = 9

        function sixSection() {

        } // r = 13

        function sevenSection() {
            let s = 13, e = 15, t = Math.min(1, (r - s) / (e - s)), tx = 1 - t;

            if (r <= s) {
                seven.style.backgroundPosition = '50% 100%';
                sevenInner.style.backgroundPosition = '50% 100%';
            } else if (r > s && r < e) {
                seven.style.backgroundPosition = `50% ${-40 + tx * 70}vw`;
                sevenInner.style.backgroundPosition = `50% ${20 - tx * 40}vw`;
            } else if (r >= e) {
                seven.style.backgroundPosition = '50% 100%';
                sevenInner.style.backgroundPosition = '50% 100%';
            }
        } // r = 15

        function eightSection() {
            let s = 15.5, e = 16.5, t = Math.min(1, (r - s) / (e - s)), tx = 1 - t;

            if (r <= s) {
                eightInner.style.backgroundPosition = '50% -10vh';
            } else if (r > s && r < e) {
                eightInner.style.backgroundPosition = `50% ${30 - tx * 40}vh`;
            } else if (r >= e) {
                eightInner.style.backgroundPosition = '50% 30vh';
            }
        } // r = 17

        function nineSection() {
            let s = 17, e = 19, t = Math.min(1, (r - s) / (e - s)), tx = 1 - t;
            
            if (r <= s) {
                nine.style.backgroundPosition = '50% 100%';
            } else if (r > s && r < e) {
                nine.style.backgroundPosition = `${-40 + tx * 70}vw 100%`;
            } else if (r >= e) {
                nine.style.backgroundPosition = '50% 100%';
            }
        }

        function tenSection() {
            let s = 19, e = 21, t = Math.min(1, (r - s) / (e - s)), tx = 1 - t;
            
            if (r <= s) {
                ten.style.backgroundPosition = '50% 100%';
                tenballon2.style.backgroundPosition = '-10vw 100%';
            } else if (r > s && r < e) {
                ten.style.backgroundPosition = `${-60 + tx * 70}vw 100%`;
                tenballon2.style.backgroundPosition = `${-(-90 + tx * 170)}vw 100%`;
            } else if (r >= e) {
                ten.style.backgroundPosition = '50% 100%';
                tenballon2.style.backgroundPosition = '50% 100%';
            }
        }

        introSection();
        firstSection();
        secondSection();
        thirdSection();
        fourthSection();
        fifthSection();
        sixSection();
        sevenSection();
        eightSection();
        nineSection();
        tenSection();
    }

    buildAnimations();

    window.addEventListener('scroll', buildAnimations)

    new WOW().init();
})()
