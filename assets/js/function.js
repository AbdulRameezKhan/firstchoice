$('.clientSlider').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true
        },
        600: {
            items: 1,
            nav: false,
            dots: true
        },
        992: {
            items: 1


        }
    }
});
$('.portfolioSlider').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: true,
    dots: false,
    navText: ["<i class='fa-solid fa-arrow-left'></i>", "<i class='fa-solid fa-arrow-right'></i>"],
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            dots: true
        },
        600: {
            items: 1
        },
        1000: {
            items: 1


        }
    }
});



$(document).ready(function() {

    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');


        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.' + value).hide('3000');
            $('.filter').filter('.' + value).show('3000');

        }
    });

    if ($(".filter-button").removeClass("ctive")) {

    }


});
$(document).ready(function() {
    $(".filter-button").click(function() {
        $(".filter-button").removeClass("active");
        // $(".tab").addClass("active"); // instead of this do the below 
        $(this).addClass("active");
    });
});

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
let outer = document.querySelector("#outer");
let content = outer.querySelector('#content');

repeatContent(content, outer.offsetWidth);

let el = outer.querySelector('#loop');
el.innerHTML = el.innerHTML + el.innerHTML;

function repeatContent(el, till) {
    let html = el.innerHTML;
    let counter = 0; // prevents infinite loop

    while (el.offsetWidth < till && counter < 100) {
        el.innerHTML += html;
        counter += 1;
    }
}