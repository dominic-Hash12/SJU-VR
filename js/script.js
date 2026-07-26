// =======================================
// NAVBAR BACKGROUND ON SCROLL
// =======================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// =======================================
// SMOOTH SCROLL FOR NAV LINKS
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


// =======================================
// FADE IN ON SCROLL
// =======================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});


// =======================================
// ACTIVE NAVIGATION LINK
// =======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// =======================================
// SCROLL TO TOP BUTTON
// =======================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `

position:fixed;
bottom:25px;
right:25px;

width:55px;
height:55px;

border:none;
border-radius:50%;

background:#2563eb;
color:white;

font-size:24px;

cursor:pointer;

display:none;

box-shadow:0 10px 30px rgba(0,0,0,.3);

transition:.3s;

z-index:9999;

`;

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


// =======================================
// HERO TYPING EFFECT
// =======================================

const subtitle = document.querySelector(".hero-content p");

if(subtitle){

const originalText = subtitle.textContent;

subtitle.textContent = "";

let index = 0;

function typeText(){

    if(index < originalText.length){

        subtitle.textContent += originalText.charAt(index);

        index++;

        setTimeout(typeText,20);

    }

}

setTimeout(typeText,700);

}


// =======================================
// BUTTON RIPPLE EFFECT
// =======================================

document.querySelectorAll(".buttons a").forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        const rect=this.getBoundingClientRect();

        const size=Math.max(rect.width,rect.height);

        ripple.style.width=size+"px";
        ripple.style.height=size+"px";

        ripple.style.left=(e.clientX-rect.left-size/2)+"px";
        ripple.style.top=(e.clientY-rect.top-size/2)+"px";

        ripple.style.position="absolute";
        ripple.style.borderRadius="50%";
        ripple.style.background="rgba(255,255,255,.4)";
        ripple.style.transform="scale(0)";
        ripple.style.animation="ripple .6s linear";
        ripple.style.pointerEvents="none";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});


// =======================================
// FLOATING CARD ANIMATION
// =======================================

document.querySelectorAll(".card").forEach((card,index)=>{

    card.style.animation=`float 4s ease-in-out ${index*0.3}s infinite`;

});


// =======================================
// PARALLAX HERO
// =======================================

const hero=document.querySelector(".hero");

document.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/80;

    const y=(window.innerHeight/2-e.clientY)/80;

    hero.style.backgroundPosition=`calc(50% + ${x}px) calc(50% + ${y}px)`;

});


// =======================================
// LOADING ANIMATION
// =======================================

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});