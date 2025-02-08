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
}

gsaptimeline1();