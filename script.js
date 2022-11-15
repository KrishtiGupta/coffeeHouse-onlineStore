function locoAndScrollInitialize()
{
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector(".smooth-scroll").style.transform
    ? "transform"
    : "fixed"*/
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

locoAndScrollInitialize();

// --------------------------------------------------------------------------------section1 swipper-----------------------------------------------------------------------------------------
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


  // ---------------------------------------------------------------------------------section6 swipper----------------------------------------------------------------------------------------
  var swiper = new Swiper(".ySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-rollbar",
    },
    mousewheel: true,
  });


// --------------------------------------------section2---------------------------------------------------------------------------------------------------------------------------------------

gsap.from("#s2part1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#s2part1",
    start:"top 80%",
    // markers:true
  },

  y:30,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:TimelineLite.to,
  duration:1,
})
gsap.from("#s2part1 h1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#s2part1 h1",
    start:"top 80%",
    // markers:true
  },

  y:30,
  opacity:0,
  // ease:Expo.easeInOut,
  duration:1,
  delay:.4
})
gsap.from("#s2part1 img",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#s2part1 img",
    start:"top 80%",
    // markers:true
  },

  x:-40,
  opacity:0,
  ease:Expo.easeInOut,
  duration:1,
  delay:.7
})

gsap.from(".s2p2c11",{
  scrollTrigger:{
    scroller:"#main",
    trigger:".s2p2c11",
    start:"top 80%",
    // markers:true
  },
  y:30,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:TimelineLite.to,
  duration:.5,
  stagger:.25,
  delay:1
})
// -------------------------------------------------------section3---------------------------


gsap.from("#section3 #s3part1 p",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section3 #s3part1 p",
    start:"top 80%",
    // markers:true
  },

  y:30,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:TimelineLite.to,
  duration:1,
})

gsap.from("#section3 #s3part1 h1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section3 #s3part1 h1",
    start:"top 80%",
    // markers:true
  },

  y:30,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:TimelineLite.to,
  duration:1,
  delay:.5
})

gsap.from("#section3 #s3part1 #nav .one",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section3 #s3part1 #nav .one",
    start:"top 80%",
    // markers:true
  },

  y:30,
  opacity:0,
  ease:Expo.easeInOut,
  // ease:TimelineLite.to,
  duration:1,
  stagger:.2,
  delay:1
})

gsap.from("#section3 #s3p2c1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section3  #s3p2c1",
    start:"top 80%",
    // markers:true
  },

  x:-120,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:TimelineLite.to,
  duration:1,
  delay:1.5

})

gsap.from("#section3 #s3p2c2",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section3  #s3p2c2",
    start:"top 80%",
    // markers:true
  },
  x:-60,
  opacity:0,
  ease:TimelineLite.to,
  duration:1,
  delay:.5
})

gsap.from("#section3 #s3p2c3",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section3  #s3p2c3",
    start:"top 80%",
    // markers:true
  },
  x:60,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:TimelineLite.to,
  duration:1,
  delay:.5
})

gsap.from("#section3 #s3p2c4",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section3  #s3p2c4",
    start:"top 80%",
    // markers:true
  },

  x:120,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:TimelineLite.to,
  duration:1,
  delay:1.5

})

var a1=document.querySelector("#a1");
var a2=document.querySelector("#a2");
var a3=document.querySelector("#a3");
var a4=document.querySelector("#a4");
var a5=document.querySelector("#a5");

var b1=document.querySelector("#s3p2c1");
var b2=document.querySelector("#s3p2c2");
var b3=document.querySelector("#s3p2c3");
var b4=document.querySelector("#s3p2c4");

a1.addEventListener("click",function(){
  b1.style.display="block";
  b2.style.display="block";
  b3.style.display="block";
  b4.style.display="block";
})

a2.addEventListener("click",function(){
  b1.style.display="none";
  b2.style.display="block";
  b3.style.display="none";
  b4.style.display="none";
})

a3.addEventListener("click",function(){
  b1.style.display="none";
  b2.style.display="none";
  b3.style.display="block";
  b4.style.display="none";
})

a4.addEventListener("click",function(){
  b1.style.display="block";
  b2.style.display="none";
  b3.style.display="none";
  b4.style.display="none";
})

a5.addEventListener("click",function(){
  b1.style.display="none";
  b2.style.display="none";
  b3.style.display="none";
  b4.style.display="block";
})

// -------------------------------------------------------section4---------------------------

gsap.from("#s4part1 h1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#s4part1 h1",
    start:"top 90%",
    // markers:true
  },

  y:30,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:TimelineLite.to,
  duration:.7,
})

gsap.from("#s4part1 h3",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#s4part1 h3",
    start:"top 90%",
    // markers:true
  },

  y:30,
  opacity:0,
  ease:Expo.easeInOut,
  duration:1,
  delay:.5,
})

gsap.from("#s4part1 #s4p1innerbox",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#s4part1 #s4p1innerbox",
    start:"top 90%",
    // markers:true
  },

  y:30,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:TimelineLite.to,
  duration:.7,
  delay:1.3
})

gsap.from("#s4part1 button",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#s4part1 button",
    start:"top 90%",
    // markers:true
  },

  y:30,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:TimelineLite.to,
  duration:1,
  delay:1.7
})

// -------------------------------------------------------section5---------------------------

gsap.from("#section5 #s5r1 h1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section5 #s5r1 h1",
    start:"top 90%",
    // markers:true
  },

  y:80,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:TimelineLite.to,
  duration:1.8
})

gsap.from("#section5 #s5r2 #one",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section5 #s5r2 #one",
    start:"top 70%",
    // markers:true
  },

  x:-150,
  opacity:0,
  // ease:Expo.easeInOut,
    ease:Cubic.easeOut,
  duration:2,
  delay:1.5
})

gsap.from("#section5 #s5r2 #two",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section5 #s5r2 #two",
    start:"top 70%",
    // markers:true
  },

  x:150,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:Cubic.easeOut,
  duration:2,
  delay:.5
})

gsap.from("#section5 #s5r2 #three",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section5 #s5r2 #three",
    start:"top 70%",
    // markers:true
  },

  x:-150,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:Cubic.easeOut,
  duration:2,
  delay:.5
})

gsap.from("#section5 #s5r2 #four",{
  scrollTrigger:{
    scroller:"#main",
    trigger:"#section5 #s5r2 #four",
    start:"top 70%",
    // markers:true
  },

  x:150,
  opacity:0,
  // ease:Expo.easeInOut,
  ease:Cubic.easeOut,
  duration:2,
  delay:1.5
})
// -------------------------------------------------------section6---------------------------
// gsap.from("#section6 #s6p1r1 h5",{
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"#section6 #s6p1r1 h5",
//     start:"top 90%",
//     // markers:true
//   },

//   y:30,
//   opacity:0,
//   ease:Expo.easeInOut,
//   duration:1.5
// })



// gsap.from("#section6 #s6p1r1 #s6nav .one",{
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"#section6 #s6p1r1 #s6nav .one",
//     start:"top 90%",
//     // markers:true
//   },

//   y:30,
//   opacity:0,
//   ease:Expo.easeInOut,
//   duration:1,
//   delay:1,
//   stagger:.3
// })

 gsap.from("#section6 #s6p1",{
    scrollTrigger:{
      scroller:"#main",
      trigger:"#section6 #s6p1",
      start:"top 70%",
      // markers:true
    },
  
    y:30,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:TimelineLite.to,
    duration:1.5
  })

  gsap.from("#section6 #s6p1r1 h1",{
    scrollTrigger:{
      scroller:"#main",
      trigger:"#section6 #s6p1r1 h1",
      start:"top 90%",
      // markers:true
    },
  
    y:30,
    opacity:0,
    // ease:Expo.easeInOut,
    ease:TimelineLite.to,
    duration:1.1,
    delay:1
  })
// -------------------------------------------------------section7---------------------------

gsap.from(".s7p1r1",{
  scrollTrigger:{
    scroller:"#main",
    trigger:".s7p1r1",
    start:"top 70%",
    markers:true
  },
  y:30,
  ease:expo.easeInOut,
  opacity:0,
  duration:1
})