const links = document.querySelectorAll(".links")
const arrow = document.querySelectorAll(".arrow")
const category = document.querySelectorAll(".arrow p")
const hamMenu = document.querySelector(".ham-menu");
const header = document.querySelector(".header");
const body = document.querySelector("body");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  header.classList.toggle("land")
 
});

for (let i = 0; i < category.length; i++) {

  
        category[i].addEventListener("click" , () => {
          
           
            if (window.innerWidth < 600) {
                arrow[i].classList.toggle("rotate")
                links[i].classList.remove("hidden")
                links[i].classList.toggle("show")
                category[i].classList.toggle("color")
            } else {
                 links[i].classList.toggle("hidden")
                 arrow[i].classList.toggle("rotate")
            }
            

    })
   
    


}
