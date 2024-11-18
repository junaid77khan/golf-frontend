const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.x+"px";
    cursor.style.top = dets.y+"px";

    gsap.to("#cursor-blur", {
        left : dets.x-250+"px",
        top : dets.y-250+"px",
        duration:.5,
        scrollTrigger : {
            trigger : "#cursor-blur",
            scroller : "body",
            scrub : 2
        }
    })
})

// const allH4 = document.querySelectorAll("#nav span");
// allH4.forEach((ele) => {
//     ele.addEventListener("mouseenter", () => {
//         cursor.style.height = "70px";
//         cursor.style.width = "70px";
//         cursor.style.border = "0.1px solid #fff";
//         cursor.style.backgroundColor = "transparent";
//     })

//     ele.addEventListener("mouseleave", () => {
//         cursor.style.height = "20px";
//         cursor.style.width = "20px";
//         cursor.style.border = "none";
//         cursor.style.backgroundColor = "#ade0209e";
//     })
// })

gsap.to("#nav", {
    backgroundColor :"#000",
    height : "5rem",
    duration : 0.5,
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start : "top -10%",
        end : " top -11%", 
        scrub : 1
    }
})

gsap.to("#main", {
    backgroundColor : "#000",
    duration : 0.5,
    scrollTrigger : {
        trigger : "#main",
        scroll : "body",
        // markers : true,
        start : "top -25%",
        end : "top -75%",
        scrub : 1
    }
})

gsap.from(".about-us-img, .about-us-content", {
    y:70, //starting from 50 in y-axis when scroll
    opacity:0, //intially opacity is 0
    duration:0.5, // It take 1 sec to come
    // stagger : 0.4 //one by one

    scrollTrigger : {
        trigger : ".about-us",
        scroller : "body",
        start : "top 90%",
        end : " top 70%", 
        scrub : 1
    }
})

gsap.from(".card", {
    scale : 0.8, //starting from 50 in y-axis when scroll
    duration:0.5, // It take 1 sec to come
    stagger : 0.1, //one by one

    scrollTrigger : {
        trigger : ".cards",
        scroller : "body",
        start : "top 90%",
        end : " top 80%", 
        scrub : 1
    }
})


gsap.from(".follow", {
    scale : 1.2,
    duration:0.5, 

    scrollTrigger : {
        trigger : ".img-section",
        scroller : "body",
        start : "top 90%",
        end : " top 80%", 
        scrub : 1
    }
})

gsap.from("#food-img, #dots-behind-img, .food-content", {
    scale : 0.8,
    duration:0.5, 

    scrollTrigger : {
        trigger : ".food",
        scroller : "body",
        start : "top 90%",
        end : " top 80%", 
        scrub : 1
    }
})


gsap.from("#quote1", {
    x : -70, 
    y : -70,
    opacity:0, //intially opacity is 0
    duration:0.5, // It take 1 sec to come

    scrollTrigger : {
        trigger : ".quotes",
        scroller : "body",
        start : "top 55%",
        end : " top 47%", 
        scrub : 3
    }
})

gsap.from("#quote2", {
    x : 70, 
    y : 70,
    opacity:0, //intially opacity is 0
    duration:0.5, // It take 1 sec to come

    scrollTrigger : {
        trigger : ".quotes",
        scroller : "body",
        start : "top 55%",
        end : " top 47%", 
        scrub : 3
    }
})

gsap.from("#pop", { 
    y : 50,
    opacity:0, //intially opacity is 0
    duration:0.5, // It take 1 sec to come

    scrollTrigger : {
        trigger : ".page4",
        scroller : "body",
        start : "top 75%",
        end : " top 70%", 
        scrub : 2
    }
})