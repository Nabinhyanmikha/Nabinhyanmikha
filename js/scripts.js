
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict





const scriptURL = 'https://script.google.com/macros/s/AKfycbxX1lNEDuDWpj8q7oDwJiX9q0UXem1HgTMIfaixyiI8NHcj7L8/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method:'post', body: new FormData(form)})
                // .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .then(response => toster())
                .catch(error => errortoster())
            })
            function toster(){
                var x = document.getElementById("snackbar");
                document.getElementById("gform").reset();
                x.className = "show";
                setTimeout(function(){x.className=x.className.replace("show", "");},3000);

            }

            function errortoster(){

                var x = document.getElementById("errorsnackbar");
                document.getElementById("gform").reset();
                x.className = "show";
                setTimeout(function(){x.className=x.className.replace("show", "");},3000);
            }
            


$(document).ready(function(){
        $(".btn-light").click(function(){
            $(this).addClass("active1");
            setTimeout(function(){
                $(".btn-light").addClass("success1");
            }, 3700);

            setTimeout(function(){
                $(".btn-light").removeClass("active1");
                $(".btn-light").removeClass("success1");
            }, 5000);
        });
    });
