function gsaptimeline1(){
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            scrub: 1,
            // markers: true,
            pin: true,
            end: "bottom -250%"
        },
    })
    
    tl
    
        .to("#centerimg",{
            left: "50%",
            duration: 6,
            ease: Power1
        })
    
        .to("#circle #btm img",{
            scale: 1.27,
            rotate: "-180deg",
            duration: 3,
            ease: Power1,
            stagger: 0.1
        }, "Animate")
    
        .to("#circle #top img",{
            scale: 1.27,
            duration: 3,
            ease: Power1,
            stagger: 0.1
        }, "Animate")
    
    // "Animate" this is a name of flag. Flag means same naming for doing together animate
    
        .to("#cimage img",{
            scale: 0,
            duration: 3,
            ease: Power1,
            stagger: 0.1
        }, "Animate")
    
        .to("#centerimg h5",{
            opacity: 0,
            ease: Power1,
            stagger: 0.1
        }, "Animate")
    
        .to("#circle",{
            scale: 0.5,
            // duration: 2,
            ease: Power1,
        }, "Animate")
    
        .to("#overlay #f-h1",{
            opacity: 0,
            bottom: "-50%",
            duration: 4,
            ease: Power1,
        }, "Animate")
    
        .to("#mini-circle",{
            duration: 2,
            top: "50%",
            scale: 1.5,
            ease: Power1,
        }, "Animate")
    
        // .to("#mini-circle",{
        //     opacity: 0,
        //     duration: 3,
        //     ease: Power1,
        // }, "Animate2")
    
        .to("#nav",{
            color: "#fff",
            ease: Power1,
        }, "Animate")
    
        .to("#s-top #box1",{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            duration: 0.5,
            ease: Power1,
        }, "Animate")
    
        .to("#s-top #box2",{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            duration: 0.5,
            ease: Power1,
        }, "Animate")
    
        .to("#s-top #box3",{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            duration: 0.5,
            ease: Power1,
        }, "Animate")
    
        .to("#s-top #box4",{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            duration: 0.5,
            ease: Power1,
        }, "Animate")
    
        .to("#s-top #box5",{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            duration: 0.5,
            ease: Power1,
        }, "Animate")
    
        .to("#s-top #box6",{
            backgroundColor: "rgba(255, 255, 255, 1)",
            duration: 0.5,
            ease: Power1,
        }, "Animate")
    
        // .to("#s-top #box6",{
        //     backgroundColor: "rgba(255, 255, 255, 1)",
        //     duration: 0.5,
        //     ease: Power1,
        // }, "Animate")
    
        .to("#bottom #btm-1 h1 sup",{
            color: "black",
            backgroundColor: "#fff",
            ease: Power1,
        }, "Animate")
    
        .to("#bottom #btm-1 h1 span",{
            color: "white",
            border: "transparent 4px solid",
            backgroundColor: "transparent",
            ease: Power1,
        }, "Animate")
    
        .to("#bottom #btm-2 img:nth-child(1)",{
            opacity: 0,
            ease: Power1,
        }, "Animate")
    
        .to("#bottom #btm-2 img:nth-child(2)",{
            opacity: 1,
            ease: Power1,
        },"Animate")
    
        // .to("#home #bg-img",{
        //     scale: 1.25,
        //     duration: 5,
        //     ease: Power1
        // }
        // ,"Animate")
    
        // .to("#home #bg-img",{
        //     scale: 1,
        //     duration: 3,
        //     ease: Power1
        // }
        // ,"Animate2")
    
        .to("#semicircle",{
            scale: 0,
            duration: 4,
            ease: Power1,
        }, "Animate2")
    
        .to("#circle",{
            scale: 0,
            duration: 4,
            ease: Power1,
        }, "Animate2")
    
        .to("#mini-circle",{
            opacity: 0,
            duration: 5.5,
            ease: Power1,
        }, "Animate2")
    
        .to("#overlay #nexth1",{
            rotate: 0,
            bottom: "2%",
            duration: 2.3,
            delay: 2.7,
            // stagger: 0.1,
            // scale: 1.3,
            ease: Power1,
        },"Animate")
    
        .to("#animate-top",{
            top: 0,
            duration: 5,
            ease: Power1
        }, "Animate2")
    
        .to("#animate-top",{
            top: 0,
            duration: 3,
            ease: Power1
        })
    
        .to("#animate-top",{
            top: "-70%",
            duration: 3,
            ease: Power1
        })
}

function gsaptimeline2(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#second",
            start: "top top",
            scrub: 1,
            // markers: true,
            pin: true,
            end: "bottom -150%"
        },
    })

    tl2
        .to("#s-overlay",{
            backgroundColor: "rgb(0, 0, 0,0)",
            scrub: 5,
            ease: Power1
        })

        .to(".circle",{
            top: "50%",
            stagger: 0.1,
            ease: Power1
        })

        .to(".circle",{
            left: "50%",
            stagger: 0.1,
            ease: Power1
        })

        .to(".circle",{
            scale: 0.8,
            ease: Power1
        })

        .to(".circle",{
            scale: 1.3,
            duration: 1,
            ease: Power1
        })

        .to(".pu",{
            scale: 5.5,
            ease: Power1
        },"color")

        .to("#s-nav",{
            color: "#fff",
            ease: Power1
        },"color")

        .to(".pi",{
            opacity: 0,
            ease: Power1
        })

        .to(".pu",{
            backgroundColor: "linear-gradient(to right, #d5a7b4, #d5a7b4)",
            // duration: 5,
            ease: Power1
        })

        .to(".pu",{
            background: "linear-gradient(to right, #d5a7b4, #b4aad5)",
            duration: 5,
            ease: Power1
        },"a")

        .to("#sec-top h1",{
            left: "-160%",
            duration: 10,
            ease: Power1
        },"a")

        .to("#sec-top h1",{
            left: "-550%",
            duration: 5,
            ease: Power1
        })

        .to("#sd-top #s-box1",{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            duration: 0.5,
            ease: Power1,
        }, "color")
    
        .to("#sd-top #s-box2",{
            backgroundColor: "rgba(255, 255, 255, 0.3)",
            duration: 0.5,
            ease: Power1,
        }, "color")
    
        .to("#sd-top #s-box3",{
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            duration: 0.5,
            ease: Power1,
        }, "color")
    
        .to("#sd-top #s-box4",{
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            duration: 0.5,
            ease: Power1,
        }, "color")
    
        .to("#sd-top #s-box5",{
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            duration: 0.5,
            ease: Power1,
        }, "color")
    
        .to("#sd-top #s-box6",{
            backgroundColor: "rgba(255, 255, 255, 1)",
            duration: 0.5,
            ease: Power1,
        }, "color")

        .to("#no h1:nth-child(1)",{
            top: "5%",
            duration: 2,
            opacity: 0,
            ease: Power1
        },"color")

        .to("#no h1:nth-child(3)",{
            top: "41%",
            opacity: 0,
            ease: Power1
        },"color")

        .to("#no h1:nth-child(2)",{
            top: "20%",
            duration: 2,
            // delay: 0.5,
            opacity: 1,
            ease: Power1
        },"color")

        .to("#sec-bottom #para1",{
            duration: 2,
            delay: 1.5,
            opacity: 0,
            ease: Power1
        },"a")

        .to("#sec-bottom #para2",{
            duration: 2,
            opacity: 1,
            delay: 1.2,
            ease: Power1
        },"a")

        .to("#no h1:nth-child(2)",{
            top: "5%",
            duration: 2,
            opacity: 0,
            stagger: 0.5,
            ease: Power1
        },"color2")

        .to("#no h1:nth-child(3)",{
            top: "15%",
            duration: 2,
            // delay: 0.5,
            opacity: 1,
            ease: Power1
        },"color2")

        .to("#sec-top #boxes",{
            top: "-75%",
            duration: 5,
            stagger: 1,
            opacity: 1,
            ease: Power1
        },"color2")

        .to("#sec-top #boxes2",{
            top: "62%",
            duration: 5,
            stagger: 1,
            // delay: 0.5,
            opacity: 1,
            ease: Power1
        },"color2")

        .to("#sec-top #boxes3",{
            top: "81%",
            duration: 5,
            stagger: 1,
            // delay: 0.5,
            opacity: 1,
            ease: Power1
        },"color2")

        .to("#boxes2 #box-1",{
            width: "9.5vw",
            duration: 5,
            ease: Power1
        },"color3")

        .to("#boxes3 #box-1",{
            width: "4.5vw",
            duration: 6,
            ease: Power1
        },"color3")

 
}
gsaptimeline1();

gsaptimeline2();


