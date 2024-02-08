// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


let msg=[
    `I CAN'T THANK YOU ENOUGH
    FOR THE AMAZING FOOD YOUR
    TEAM PROVIDED US TODAY. OUR
    STAFF COULDN'T SPEAK HIGHLY
    ENOUGH OF THE FISH AND THE
    SALADS; LOOKING FORWARD
    TO WORKING TOGETHER MORE.`,
    `LOVE THE QUALITY OF THE FOOD
    AND LEVEL OF CUSTOMER
    SERVICE EQUALS THE
    'MEANINGFULNESS' OF EVERY
    PURCHASE.`,
    `I LOVE THE WAY THEY OPERATE;
    DONATING IS ONE THING BUT
    EMPLOYING AND EMPOWERING
    WOMEN IS SO IMPORTANT.`,
    `I LOVE THE STORY BEHIND THIS
    BUSINESS AND THE PEOPLE
    WHO RUN AND WORK IN IT - IT
    FEELS GOOD TO WORK WITH
    PEOPLE DOING A GOOD JOB`,
    `AN IMMENSELY GREAT
    COMPANY... AND WHAT A
    GREAT CAUSE DRIVING THE
    BUSINESS.`,
    `THANK YOU SO MUCH FOR THE BEAUTIFUL CATERING;
    IT MEANS A LOT WORKING WITH A COMPANY SUCH AS
    TWO GOOD CO.`,
]

let btnslider = document.querySelectorAll(".btn-slider");
let msgText = document.querySelector("#msg-text");

btnslider.forEach(function(ele){
    ele.addEventListener("click", function(){
        var msgToBeDisp = msg[ele.id - 1];
    btnslider.forEach(function (btn) {
        btn.classList.remove("act");
    });

    ele.classList.add("act");
        msgText.textContent = msgToBeDisp;
        console.log(msgToBeDisp);
    });
})


function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
  
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}


function videoAnimation(){
    let videocon=document.querySelector("#video-container");
    let playbtn=document.querySelector("#play");

    videocon.addEventListener("mouseenter",function(){
        gsap.to(playbtn,{
            opacity:1,
            scale:1
        })
    });

    videocon.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
            opacity:0,
            scale:0
        })
    });

    videocon.addEventListener("mousemove",function(e){
        gsap.to(playbtn,{
            left:e.x-70,
            top:e.y-80
        })
    });


}

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from("#page1 #video-container",{
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.5,
    })
}
function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
        left: dets.x,
        top: dets.y,
        });
    });

    let a=document.querySelectorAll(".child");
    a.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to("#cursor",{
                transform:"translate(-50%,-50%) scale(1)",
                cursor:"pointer"
            })
        })

        elem.addEventListener("mousemove",function(e){
            gsap.to("#cursor",{
                left:e.x,
                top:e.y
            })
        })

        elem.addEventListener("mouseleave",function(){
            gsap.to("#cursor",{
                transform:"translate(-50%,-50%) scale(0)",
            })
        })
    })
}







cursorAnimation();
videoAnimation();
loadingAnimation();
locomotiveAnimation();








