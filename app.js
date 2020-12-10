clickElement = document.getElementById("cta");

small = document.getElementById("small");

TweenMax.to(small, 1, {x: "+=18%", y: "+=22%", ease: Elastic.easeOut.config(1, 0.3)});

clickElement.addEventListener('click', function() {
   TweenMax.to(small, 1, {morphSVG: "#large", x:"-=24%", y: "-=22%", ease: Power4.easeOut})
});