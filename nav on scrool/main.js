document.addEventListener("scroll", ()=>{
const myHeader = document.querySelector("header");
myHeader.classList.toggle("sticky", window.scrollY > 0);
if(window.innerWidth < 790){

    myHeader.classList.remove("sticky");
}
});


const navSlide = () =>{

    const mymenubutton  = document.querySelector(".mymenubutton");
    const mobileUl = document.querySelector(".mobileul");
    mymenubutton.addEventListener("click", () =>{

        mobileUl.classList.toggle("myslide");
    });

    const myClose = document.querySelector(".closebutton")
    myClose.addEventListener("click",()=>{
        mobileUl.classList.remove("myslide"); 
    })
}
navSlide();

