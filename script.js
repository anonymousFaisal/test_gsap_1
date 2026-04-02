gsap.set(".element", { transformOrigin: "top center" });
gsap.set(["#milk_1", "#milk_right", "#milk_left", "#copy"], { transformOrigin: "center center" });

const rightElements = ["#el5", "#el7"];
const leftElements1 = ["#el1", "#el6"];
const leftElements2 = ["#el3", "#el4"];

const tl = gsap.timeline();

tl.from("#mnemonic", { 
    duration: 0.8, 
    x: -100, 
    opacity: 0, 
    ease: "power2.out" 
})
.from("#logo", { 
    duration: 0.8, 
    x: 100, 
    opacity: 0, 
    ease: "power2.out" 
}, "-=0.6")
.from("#podium", { 
    duration: 0.8, 
    y: 100, 
    opacity: 0, 
    ease: "power2.out" 
}, "-=0.4")
.from(["#milk_1", "#milk_right", "#milk_left"], { 
    duration: 0.8, 
    scale: 0, 
    stagger: 0.15, 
    ease: "back.out(1.5)" 
}, "-=0.3")
.from("#shadow", { 
    duration: 0.8, 
    opacity: 0 
}, "<+0.2")
.from(".element", { 
    duration: 0.8, 
    y: -300, 
    opacity: 0,
    stagger: 0.1, 
    ease: "back.out(1.5)" 
}, "-=0.4")
.from("#copy", { 
    duration: 1.2, 
    scale: 0, 
    opacity: 0, 
    ease: "power1.inOut" 
}, "-=0.2")
.addLabel("endloop", "+=0")

.to(rightElements, { 
    duration: 2.5, 
    rotationY: 360, 
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5
}, "endloop")
.to(["#milk_1", "#milk_right", "#milk_left"], { 
    duration: 1, 
    y: -10, 
    stagger: 0.15,
    yoyo: true,
    repeat:-1,
    ease: "sine.inOut"
}, "endloop+=0.5")
.to(leftElements1, { 
    duration: 2.5, 
    rotationY: 360, 
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5
}, "endloop+=1.0")
.to(leftElements2, { 
    duration: 2.5, 
    rotationY: 360, 
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
    repeatDelay: 0.5
}, "endloop+=2.0");
