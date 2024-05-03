const toggleMenu = document.getElementById("btn-toggle")
const responsiveMenu = document.getElementById("responsive-menu")

toggleMenu.addEventListener("click", () => {
    responsiveMenu.classList.toggle("hidden")
})



const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".ador-gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){

       filterContainer.querySelector(".active").classList.remove("active");

       event.target.classList.add("active");
       const filterValue = event.target.getAttribute("data-filter");
       galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'client-feedback'){
          item.classList.remove("hide");
           item.classList.add("show");
      }
      else{
          item.classList.remove("show");
          item.classList.add("hide");
      }
       });
  }
});



imageItem = document.querySelectorAll(".gallery-item-inner");

imageItem.addEventListener("click", (event) => {
    console.log("DSDSDS");
});








