function gsaptimeline1(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page1",
            start: "top top",
            scrub: 1,
            // markers: true,
            pin: true,
            end: "bottom -250%"
        },
    })

    tl
        .to("#center-image",{
            left: "50%",
            duration: 2,
            ease: Power1,
        })

        .to("#circle #c-bottom img",{
            scale: 1.27,
            rotate: "-180deg",
            duration: 3,
            ease: Power1,
            stagger: 0.1
        }, "Animate")

        .to("#circle #c-top img",{
            scale: 1.27,
            duration: 3,
            ease: Power1,
            stagger: 0.1
        }, "Animate")

        .to("#circle",{
            scale: 0.5,
            ease: Power1,
        }, "Animate")

        .to("#center-image img",{
            scale: 0,
            duration: 3,
            ease: Power1,
            stagger: 0.1
        }, "Animate")

        .to("#center-image h3",{
            opacity: 0,
            ease: Power1,
            stagger: 0.1
        }, "Animate")

        .to("#overlay #i-1",{
            bottom: "-50%",
            opacity: 0,
            duration: 4,
            ease: Power1
        }, "Animate")

        .to("#mini-circle",{
            duration: 2,
            top: "50%",
            scale: 1.5,
            ease: Power1
        }, "Animate")

        .to("#nav #top",{
            color: "#fff",
            textShadow: "1px 1px 0.5px #000",
            ease: Power1
        }, "Animate")

        .to("#color-top #box1",{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            border: "1px solid white",
            ease: Power1
        }, "Animate")

        .to("#color-top #box2",{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            border: "1px solid white",
            ease: Power1
        }, "Animate")

        .to("#color-top #box3",{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            border: "1px solid white",
            ease: Power1
        }, "Animate")

        .to("#color-top #box4",{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            border: "1px solid white",
            ease: Power1
        }, "Animate")

        .to("#color-top #box5",{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            border: "1px solid white",
            ease: Power1
        }, "Animate")

        .to("#color-top #box6",{
            backgroundColor: "rgba(255, 255, 255, 1)",
            border: "1px solid white",
            ease: Power1
        }, "Animate")

        .to("#nav #bottom h3 sup",{
            backgroundColor: "#fff",
            color: "#000",
            border: "1px solid #000",
            ease: Power1
        }, "Animate")

        .to("#nav #bottom h3 sub",{
            color: "#fff",
            textShadow: "1px 1px 0.5px #000",
            ease: Power1
        }, "Animate")

        .to("#bottom img",{
            opacity: 0,
            ease: Power1
        }, "Animate")

        .to("#b-2",{
            opacity: 1,
            ease: Power1
        }, "Animate")

        .to("#semi-circle",{
            scale: 0,
            duration: 3,
            ease: Power1
        }, "Animate2")

        .to("#circle",{
            scale: 0,
            duration: 3,
            ease: Power1
        }, "Animate2")

        .to("#mini-circle",{
            opacity: 0,
            duration: 2.5,
            ease: Power1
        }, "Animate2")

        .to("#overlay #i-2",{
            bottom: "0%",
            rotate: 0,
            duration: 1,
            delay: -0.3,
            ease: Power1
        }, "Animate2")

        .to("#animate-top",{
            delay: 1,
            top: 0,
            duration: 5,
            ease: Power1
        }, "Animate2")

        .to("#animate-top",{
            top: 0,
            duration: 5,
            ease: Power1
        })

        .to("#animate-top",{
            top: "-70%",
            duration: 5,
            ease: Power1
        })
}

function gsaptimeline2(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page2",
            start: "top top",
            scrub: 1,
            // markers: true,
            pin: true,
            end: "bottom -150%"
        },
    })

    tl2
        .to("#page2 #overlay",{
            backgroundColor: "rgba(0,0,0,0)",
            scrub: 5,
            duration: 0.5,
            ease: "expo.inOut"
        })

        .to(".circle",{
            top: "50%",
            duration: 25,
            delay: 3,
            stagger: 10,
            width: "20vw",
            height: "20vw",
            ease: Power1
        })

        .to(".circle",{
            left: "50%",
            stagger: 0.5,
            scrub: 1,
            delay: 2,
            duration: 10,
            ease: Power1
        })

        .to(".circle",{
            scale: 0.6,
            duration: 5,
            ease: Power1
        })

        .to(".circle",{
            scale: 1.2,
            duration: 5,
            ease: Power1
        })

        .to(".pi",{
            scale: 5.5,
            duration: 5,
            ease: Power1
        }, "color")

        .to(".pu",{
            opacity: 0,
            ease: Power1
        })

        .to("#s-bottom #first p:nth-child(1)",{
            marginTop: "-30px",
            opacity: 0,
            duration: 5,
            ease: Power1
        }, "color")

        .to("#s-bottom #second p:nth-child(1)",{
            marginTop: "30px",
            ease: Power1
        }, "color")

        .to("#s-bottom #second p:nth-child(1)",{
            marginTop: "0px",
            opacity: 1,
            duration: 5,
            ease: Power1
        }, "color")

        .to("#s-bottom #first p:nth-child(2)",{
            duration: 5,
            ease: Power1
        }, "color2")

        .to("#s-bottom #first p:nth-child(2)",{
            delay: 20,
            opacity: 0,
            duration: 5,
            ease: Power1
        }, "color2")

        .to("#s-bottom #second p:nth-child(2)",{
            opacity: 1,
            duration: 15,
            ease: Power1
        })

        .to("#s-bottom #second p:nth-child(1)",{
            marginTop: "-40px",
            opacity: 0,
            duration: 15,
            ease: Power1
        }, "color3")

        .to("#s-bottom #third p",{
            marginTop: "30px",
            ease: Power1
        }, "color3")

        .to("#s-bottom #third p",{
            marginTop: "0px",
            opacity: 1,
            duration: 15,
            ease: Power1
        }, "color3")

        .to("#page2 #nav #top h1",{
            color: "#fff",
            textShadow: "1px 1px 0.5px #fff",
            ease: Power1
        }, "color")

        .to("#page2 #color-bottom",{
            color: "#fff",
            ease: Power1
        }, "color")

        .to("#page2 #color-top-2 #box1",{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            ease: Power1
        }, "color")

        .to("#page2 #color-top-2 #box2",{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            ease: Power1
        }, "color")

        .to("#page2 #color-top-2 #box3",{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            ease: Power1
        }, "color")

        .to("#page2 #color-top-2 #box4",{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            ease: Power1
        }, "color")

        .to("#page2 #color-top-2 #box5",{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            ease: Power1
        }, "color")

        .to("#page2 #color-top-2 #box6",{
            backgroundColor: "rgba(255, 255, 255, 1)", 
            ease: Power1
        }, "color")
        
        .to(".pi",{
            background: "linear-gradient( #d5a7b4, #d5a7b4)",
            ease: Power1
        }, "color2")

        .to("#page2 #s-top h1",{
            left: "-100%",
            duration: 100,
            scrub: 1,
            ease: Power1
        }, "color2")

        .to("#page2 #s-top h1",{
            left: "-350%",
            duration: 100,
            scrub: 1,
            ease: Power1
        }, "color3")

        .to(".pi",{
            background: "linear-gradient(to right, #d5a7b4, #b4aad5)",
            delay: 35,
            duration: 10,
            ease: Power1
        }, "color2")

        .to("#three-parts #boxes",{
            top: "-73%",
            delay: 35,
            duration: 15,
            ease: Power1
        }, "color3")

        .to("#three-parts #boxes-2",{
            top: "63.5%",
            delay: 40,
            duration: 5,
            ease: Power1
        }, "color3")

        .to("#three-parts #boxes-3",{
            top: "81.5%",
            delay: 40,
            duration: 5,
            ease: Power1
        }, "color3")

        .to("#three-parts #boxes-2",{
            left: "-10.1%",
            duration: 10,
            ease: Power1
        }, "color4")

        .to("#three-parts #boxes-3",{
            left: "-15.2%",
            duration: 15,
            ease: Power1
        }, "color4")

}

function gsaptimeline3(){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3-more",
            start: "top 0%",
            // markers: true,
            scrub: 5,
            pin: true,
            end: "bottom 0%"
        },
    })

    tl3
        .to("#p3-center",{
            transform: "translate(-50% ,-50%) rotate(170deg)",
            duration: 1,
            scrub: 5,
            ease: Power1
        })
}

gsaptimeline1();
gsaptimeline2();
gsaptimeline3();