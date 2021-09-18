// google map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 24.713552, lng: 46.675297 },
    zoom: 8,
  });
}

//smooth scrolling
$("#navbar a, .btn").on("click", function(event) {
    if(this.hash !== ""){
        event.preventDefault();
        const hash = this.hash;
        $("html, body").animate({scrollTop: $(hash).offset().top - 100}, 800);
    }
});
// navbar opacity
window.addEventListener("scroll", function(){
    if(window.scrollY > 150){
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("navbar").style.opacity = 1 ; 
    }
});