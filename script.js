const mousefollower=document.querySelector(".mousefollower")
window.addEventListener("mousemove",function(e){
    let w=e.clientX;
    let h=e.clientY;

   // Correct the typo in the transform property
   mousefollower.style.transform = `translate(${w}px, ${h}px)`;
})
window.addEventListener("scroll",function(e){
    mousefollower.style.position="fixed"
})

function gsaptimline0(){
    tl0=gsap.timeline({
        scrollTrigger:{
            trigger: ".loader",
            start: "top",
            end: "+=" + (window.innerHeight * 10),
            pin: true,
            scrub: .01,
        }
    
    })
    tl0.to(".titleload",{
        x:"-48%",
        duration:1,
    },"sts")
    .to(".imgload img",{
        opacity:1,
        duration:1,
        delay:-0.1
    },"sts")
    .to(".imgload img",{
        rotate:"360deg",
        duration:1,
    },"sts")
    .to(".center",{
        opacity:1,
        duration:1,
        delay:-0.1
    },"sts")
    .to(".center .row .coll",{
        x:"-250%",
        duration:1,

    },"sts")

    .to(".center .row2 .coll",{
        x:"-10%",
        duration:1,

    },"sts")
}




function gsaptimline(){
    tl=gsap.timeline({
        scrollTrigger:{
            trigger: "#home",
            start: "top",
            end: "+=" + (window.innerHeight * 10),
            pin: true,
            scrub: .01,
     
        }
    })

    tl.to(".dcenterImg",{
        left:"50%",
        ease: Power1
    })

    .to(".circle",{
        scale:.2,
        ease: Power1
    },"sameTosame")

    .to(".backgoundImg img", {
        scale: 1.25,
        ease: Power0,
    }, "sameTosame")

    .to(".circle .bottomPart img", {
        rotate: "-180deg",
        ease: Power1,
        stagger: .05
    }, 'sameTosame')

    .to(".gallery",{
        bottom:"-30%",
        ease: Power1,
        delay:"-0.1"
    }, 'sameTosame')

    .to(".purpleBox",{
        top:"50%",
        ease: Power1,
        scale:1.1,
    }, 'sameTosame')

    .to(".dcenterImg",{
        scale:0,
        top:"60%",
        ease: Power1,
    }, 'sameTosame')



    .to(".pinkf",{
        delay:0.2,
        bottom:"0%",
        rotate:0
    },"same")

    .to(".circle",{
        scale:0,
        ease: Power1
    },"same")

    .to(".innerCircle",{
        scale:0,
        ease: Power1
    },"same")

    .to(".purpleBox",{
        scale:0,
        opacity:0,
        ease: Power1,
        delay:"-0.1"
    },"same")

    .to(".desc",{
        top:"-60%",
        ease: Power1,
    })
    .to(".backgoundImg img", {
        scale: 1,
        ease: Power0,
    }, "same")

}

function timeline2(){
    tl2=gsap.timeline({
        scrollTrigger:{
            trigger:"#second",
            start:"top",
            end: "+=" + (window.innerHeight * 10),
            pin:true,
            scrub:.01,
        }
    })
    tl2.to(".purple",{
        y:"0%",
        scale:1
    },"sm")

    .to(".brinjalColr",{
        y:"0%",
        delay:0.1,
        scale:1
    },"sm")

    .to(".purple",{
        marginRight:"-2rem",
        delay:-0.6
    })

    .to(".purple",{
        marginRight:"-8rem",
        scale:0.8
    },"s")
    .to(".brinjalColr",{
        marginLeft:"-8rem",
        scale:0.8
    },"s")

    .to(".purple",{
        scale:6,
        delay:0.2
    },"t")
    .to(".count .num",{
        y:"-35%"
    },"t")

    .to(".gradient",{
        left:"-140%",
        duration:5
    },"2c")

    .to(".purple",{
        backgroundSize: "100%",
        delay:1,
        duration:1
    },"2c")

    .to(".thirdTop .box",{
        y:"0%",
        stagger:0.1
    },"x")

    .to(".count .num",{
        y:"-70%"
    },"x")

    .to(".describe-cont p:nth-child(1)",{
        opacity:0
    },"2c")

    .to(".describe-cont p:nth-child(1)",{
        display:"none",
        delay:0.2,
    },"2c")

    .to(".describe-cont p:nth-child(2)",{
        // opacity:0.2,
        display:"initial",
        delay:0.95
    },"2c")

    .to(".describe-cont p:nth-child(2)",{
        opacity:1,
        delay:2
    },"2c")
}


function timeline3(){
    tl3=gsap.timeline({
        scrollTrigger:{
            trigger:".finalPage",
            start:"top",
            end: "+=" + (window.innerHeight * 10),
            pin:true,
            scrub:.01,
        }
    })
    tl3.to(".overl",{
        y:"-500%",
        duration:"10",
        delay:0.3
    },"ss")

    .to(".animatedcir img",{
        rotate:"300deg",
        duration:3
    },"ss")

    .to(".slider h1",{
        x:"-10%",
        delay:1,
        duration:3
    },"ss")

    .to(".boxtri",{
        x:"100%",
        delay:2.5,
        duration:3
    },"ss")
    .to(".sliding h1",{
        x:"100%",
        delay:6,
        duration:5
    },"ss")
}

gsaptimline0()
gsaptimline()
timeline2()
timeline3()


const hvr1=document.querySelector(".hvr1");
const hvr2=document.querySelector(".hvr2");
const hvr3=document.querySelector(".hvr3");
const lastpage=document.querySelector(".finalPage")

hvr1.addEventListener("mouseover",function(){
    lastpage.style.backgroundColor="#784856";
})
hvr2.addEventListener("mouseover",function(){
    lastpage.style.backgroundColor="#DEF3FF";
})
hvr1.addEventListener("mouseleave",function(){
    lastpage.style.backgroundColor="#FCF4FC";
})
hvr2.addEventListener("mouseleave",function(){
    lastpage.style.backgroundColor="#FCF4FC";
})
hvr3.addEventListener("mouseover",function(){
    lastpage.style.backgroundColor="#706993";
})
hvr3.addEventListener("mouseleave",function(){
    lastpage.style.backgroundColor="#FCF4FC";
})

