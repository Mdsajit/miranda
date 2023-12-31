const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var tl = gsap.timeline();

tl.to("#page-one",{
    y:"100vh",
    scale: 0.6,    
    duration:0
})
tl.to("#page-one", {
    y: "30vh",
    duration: 1,
    delay: 1
})
tl.to("#page-one",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:.8
})