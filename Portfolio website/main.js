let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");
let navLinks=document.querySelectorAll("nav a");

menuIcon.onclick=()=>{
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");

}


//scroll function:::

// window.addEventListener("scroll",()=>{
//         const scrollable=document.documentElement.scrollHeight - window.innerHeight;
//         const scrolled=window.scrollY;

//         // console.log(scrollable);
//         // console.log(scrolled);

//         if(Math.ceil(scrolled) === scrollable){
//                 alert("You've reached the bottom!!!")
//         }
// })


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


//mouse pointer movement




function circleMovement(){
        window.addEventListener('mousemove', function(details){
                document.querySelector('.circle').style.transform=`translate(${details.clientX}px, ${details.clientY}px)`;
        })
}

circleMovement();
